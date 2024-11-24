const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://bestphumin2547:1234@cluster0.stobj.mongodb.net/skincare?retryWrites=true&w=majority&tls=true&tlsInsecure=true')
    .then(() => console.log('เชื่อมต่อกับ MongoDB สำเร็จ'))
    .catch(err => console.log('ไม่สามารถเชื่อมต่อกับ MongoDB:', err));

// Multer Configuration for Multiple Upload Types
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath = 'uploads/';
        // If it's a profile image, use the profiles subdirectory
        if (file.fieldname === 'profileImage') {
            uploadPath += 'profiles/';
        } else if (file.fieldname === 'productImage') {
            uploadPath += 'products/';
        }
        
        // Create directory if it doesn't exist
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExt = path.extname(file.originalname);
        const prefix = file.fieldname === 'profileImage' ? 'profile-' : 'product-';
        cb(null, prefix + uniqueSuffix + fileExt);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('ไม่ใช่ไฟล์รูปภาพ! กรุณาอัปโหลดไฟล์รูปภาพเท่านั้น'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// Schemas
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: [String],
    description: String,
    relatedProducts: [String],
    imageUrl: String,
    type: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reviewLinks: [String] 
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    company: { type: String, required: true },
    profileImage: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

// Routes

// Home Route
app.get('/', (req, res) => {
    res.send('ยินดีต้อนรับสู่เว็บไซต์ Skincare!');
});

// User Registration
app.post('/api/register', upload.single('profileImage'), async (req, res) => {
    const { username, password, email, phoneNumber, company } = req.body;

    if (!username || !password || !email || !phoneNumber || !company) {
        if (req.file) {
            fs.unlink(req.file.path, err => {
                if (err) console.error('Error deleting file:', err);
            });
        }
        return res.status(400).json({
            message: 'กรุณากรอกข้อมูลให้ครบทุกช่อง'
        });
    }

    try {
        const existingUser = await User.findOne({ 
            $or: [{ username }, { email }] 
        });

        if (existingUser) {
            if (req.file) {
                fs.unlink(req.file.path, err => {
                    if (err) console.error('Error deleting file:', err);
                });
            }
            return res.status(400).json({
                message: existingUser.username === username ? 
                    'ชื่อผู้ใช้งานนี้ถูกใช้แล้ว' : 
                    'อีเมลนี้ถูกใช้งานแล้ว'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            phoneNumber,
            company,
            profileImage: req.file ? `/uploads/profiles/${req.file.filename}` : null
        });

        const savedUser = await newUser.save();
        const userResponse = {
            ...savedUser.toObject(),
            password: undefined
        };

        res.status(201).json({
            message: 'ลงทะเบียนสำเร็จ',
            user: userResponse
        });
    } catch (err) {
        if (req.file) {
            fs.unlink(req.file.path, err => {
                if (err) console.error('Error deleting file:', err);
            });
        }
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดในการลงทะเบียน',
            error: err.message
        });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            const userResponse = {
                ...user.toObject(),
                password: undefined
            };
            res.status(200).json({
                message: 'เข้าสู่ระบบสำเร็จ',
                user: userResponse
            });
        } else {
            res.status(400).json({
                message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'เกิดข้อผิดพลาด',
            error: err.message
        });
    }
});

// Product Routes

// Get All Products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find().populate('addedBy', 'username email');
        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูล',
            error: err.message
        });
    }
});

// Search Products
app.get('/api/products/search', async (req, res) => {
    try {
        const { query } = req.query;
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { brand: { $regex: query, $options: 'i' } }
            ]
        });
        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดในการค้นหา',
            error: err.message
        });
    }
});

// Get Products by Type
app.get('/api/products/type/:type', async (req, res) => {
    try {
        const { type } = req.params;
        const products = await Product.find({
            type: { $regex: type, $options: 'i' }
        });
        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลตามประเภท',
            error: err.message
        });
    }
});

// Add New Product
app.post('/api/add-product', upload.single('productImage'), async (req, res) => {
    const { name, description, type, price, brand, addedBy, ingredients, relatedProducts, reviewLinks } = req.body;
  
    if (!name || !type || !price || !brand || !addedBy) {
      return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }
  
    try {
      const user = await User.findOne({ username: addedBy });
      if (!user) return res.status(404).json({ message: 'ไม่พบผู้ใช้ที่ระบุ' });
  
      const product = new Product({
        name,
        description,
        type,
        price: Number(price),
        brand,
        addedBy: user._id,
        ingredients: ingredients ? JSON.parse(ingredients) : [],
        relatedProducts: relatedProducts ? JSON.parse(relatedProducts) : [],
        reviewLinks: reviewLinks ? JSON.parse(reviewLinks) : [], // รับค่าจาก frontend ที่เป็น array แล้ว
        imageUrl: req.file ? `/uploads/products/${req.file.filename}` : null,
      });
  
      const savedProduct = await product.save();
      res.status(201).json({ message: 'เพิ่มผลิตภัณฑ์สำเร็จ', product: savedProduct });
    } catch (error) {
      res.status(500).json({ message: 'เกิดข้อผิดพลาดในการบันทึกผลิตภัณฑ์', error: error.message });
    }
  });  

// Update Product
app.put('/api/products/:id', upload.single('productImage'), async (req, res) => {
    const { id } = req.params;
    const updateData = { ...req.body };

    try {
        const product = await Product.findById(id);
        if (!product) {
            if (req.file) {
                fs.unlink(req.file.path, err => {
                    if (err) console.error('Error deleting file:', err);
                });
            }
            return res.status(404).json({
                message: 'ไม่พบผลิตภัณฑ์ที่ต้องการอัปเดต'
            });
        }

        if (updateData.ingredients) {
            updateData.ingredients = JSON.parse(updateData.ingredients);
        }
        if (updateData.relatedProducts) {
            updateData.relatedProducts = JSON.parse(updateData.relatedProducts);
        }
        if (updateData.reviewLinks) {
            updateData.reviewLinks = JSON.parse(updateData.reviewLinks); // แปลง JSON เป็น Array
        }
        if (updateData.price) {
            updateData.price = Number(updateData.price);
        }

        if (req.file) {
            if (product.imageUrl) {
                const oldImagePath = path.join(__dirname, product.imageUrl);
                fs.unlink(oldImagePath, err => {
                    if (err && err.code !== 'ENOENT') console.error('Error deleting old image:', err);
                });
            }
            updateData.imageUrl = `/uploads/products/${req.file.filename}`;
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true }
        );

        res.status(200).json({
            message: 'อัปเดตผลิตภัณฑ์สำเร็จ',
            product: updatedProduct
        });
    } catch (err) {
        if (req.file) {
            fs.unlink(req.file.path, err => {
                if (err) console.error('Error deleting file:', err);
            });
        }
        res.status(500).json({
            message: 'ไม่สามารถอัปเดตผลิตภัณฑ์ได้',
            error: err.message
        });
    }
});

// Delete Product
app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                message: 'ไม่พบผลิตภัณฑ์ที่ต้องการลบ'
            });
        }

        if (product.imageUrl) {
            const imagePath = path.join(__dirname, product.imageUrl);
            fs.unlink(imagePath, err => {
                if (err && err.code !== 'ENOENT') console.error('Error deleting image:', err);
            });
        }

        await Product.findByIdAndDelete(id);
        res.status(200).json({
            message: 'ลบผลิตภัณฑ์สำเร็จ'
        });
    } catch (err) {
        res.status(500).json({
            message: 'ไม่สามารถลบผลิตภัณฑ์ได้',
            error: err.message
        });
    }
});

// Get Brands
app.get('/api/brands', async (req, res) => {
    try {
        const brands = await Product.distinct('brand');
        res.json(brands);
    } catch (error) {
        res.status(500).json({
            message: 'ไม่สามารถดึงรายชื่อแบรนด์ได้',
            error: error.message
        });
    }
});

// Serve Static Files
app.use('/uploads', express.static('uploads'));

// Error Handling Middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                message: 'ไฟล์มีขนาดใหญ่เกินไป กรุณาอัปโหลดไฟล์ที่มีขนาดไม่เกิน 5MB'
            });
        }
    }
    console.error(error);
    res.status(500).json({
        message: 'เกิดข้อผิดพลาดที่ไม่คาดคิด',
        error: error.message
    });
});

app.get('/api/users/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                message: 'ไม่พบผู้ใช้ที่ระบุ'
            });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูล',
            error: err.message
        });
    }
});

// Get Products Added by a Specific User
app.get('/api/products/by-user/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'ไม่พบผู้ใช้ที่ระบุ' });
        }

        const products = await Product.find({ addedBy: user._id }).populate('addedBy', 'username email');
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า',
            error: err.message
        });
    }
});

// Get Product by ID
app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
            .populate('addedBy', 'username email');
            
        if (!product) {
            return res.status(404).json({
                message: 'ไม่พบสินค้าที่ต้องการ'
            });
        }
        
        res.json(product);
    } catch (err) {
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดในการดึงข้อมูลสินค้า',
            error: err.message
        });
    }
});

app.put('/api/users/:username', upload.single('profileImage'), async (req, res) => {
    const { username } = req.params;
    const { email, phoneNumber, company } = req.body;
  
    try {
        // ค้นหาผู้ใช้ก่อนอัปเดต
        const user = await User.findOne({ username });
        if (!user) {
            if (req.file) fs.unlinkSync(req.file.path); // ลบไฟล์ใหม่ถ้าผู้ใช้ไม่พบ
            return res.status(404).json({ message: 'ไม่พบผู้ใช้ที่ระบุ' });
        }
  
        // ลบรูปโปรไฟล์เก่าถ้ามี
        if (req.file && user.profileImage) {
            const oldImagePath = path.join(__dirname, user.profileImage);
            fs.unlink(oldImagePath, err => {
                if (err && err.code !== 'ENOENT') {
                    console.error('Error deleting old profile image:', err);
                }
            });
        }
  
        // อัปเดตข้อมูล
        const updatedUser = await User.findOneAndUpdate(
            { username },
            {
                email,
                phoneNumber,
                company,
                profileImage: req.file ? `/uploads/profiles/${req.file.filename}` : user.profileImage
            },
            { new: true }
        );
  
        res.status(200).json({
            message: 'อัปเดตโปรไฟล์สำเร็จ',
            user: updatedUser,
        });
    } catch (err) {
        if (req.file) fs.unlinkSync(req.file.path); // ลบไฟล์ใหม่ถ้าเกิดข้อผิดพลาด
        res.status(500).json({
            message: 'เกิดข้อผิดพลาดในการอัปเดตโปรไฟล์',
            error: err.message,
        });
    }
});
  
// Start Server
app.listen(port, () => {
    console.log(`เซิร์ฟเวอร์กำลังรันบนพอร์ต ${port}`);
});
