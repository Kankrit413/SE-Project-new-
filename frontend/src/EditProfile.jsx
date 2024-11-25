import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import Navbar from './navbar';
import './profilepage.css';

const EditProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    company: '',
    email: '',
    phoneNumber: '',
    profileImage: '',
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null); // เก็บไฟล์รูปภาพที่ผู้ใช้เลือก
  const [message, setMessage] = useState('');

  // โหลดข้อมูลผู้ใช้
  useEffect(() => {
    axios
      .get(`/api/users/${username}`)
      .then((response) => {
        setFormData(response.data);
        if (response.data.profileImage) {
          setImagePreview(response.data.profileImage); // โหลดรูปโปรไฟล์
        }
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, [username]);

  // จัดการการเปลี่ยนค่าในฟิลด์ต่าง ๆ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // จัดการการเปลี่ยนรูปภาพ
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // จัดการการส่งฟอร์ม
  const handleSubmit = (e) => {
    e.preventDefault();

    // สร้าง FormData สำหรับส่งข้อมูลรวมรูปภาพ
    const data = new FormData();
    data.append('username', formData.username);
    data.append('company', formData.company);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);

    if (imageFile) {
      data.append('profileImage', imageFile);
    }

    axios
      .put(`/api/users/${username}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        setMessage('Profile updated successfully!');
        setTimeout(() => navigate('/profile-page'), 800);
      })
      .catch((error) => {
        setMessage('Error updating profile. Please try again.');
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <div className="profile-card">
          <ArrowLeft className="back-arrow" onClick={() => navigate(-1)} />
          <h1 className="text-lg font-medium text-gray-700 mb-6">Edit Profile</h1>
          {message && <p className="text-center text-sm text-green-600">{message}</p>}

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="circle-container">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="profile-image rounded-full w-24 h-24"
                />
              ) : (
                <p className="default-icon">Upload Image</p>
              )}
            </div>
            <label
              htmlFor="imageUpload"
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600"
              style={{ marginTop: '10px', display: 'inline-block' }}
            >
              Edit Image
            </label>
          </div>

          <form onSubmit={handleSubmit} className="form-container">
            {['username', 'company', 'email', 'phoneNumber'].map((field) => (
              <div key={field} className="detail-item">
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field] || ''}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            ))}

            <div className="flex items-center justify-between mt-6 w-full space-x-4">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg w-1/2 hover:bg-gray-600 transition"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-1/2 hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
