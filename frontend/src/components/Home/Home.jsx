import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("all");
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("username");
        if (loggedInUser) {
            setUsername(loggedInUser);
        }
    }, []);

    // ฟังก์ชันดึงข้อมูลสินค้าจาก backend
    const fetchProducts = useCallback(async (type, query = "") => {
        setLoading(true);
        try {
            let url;
            if (type === "all") {
                // ถ้ามีการค้นหา ใช้ search endpoint
                if (query) {
                    url = `http://localhost:5000/api/products/search?query=${query}`;
                } else {
                    url = `http://localhost:5000/api/products`;
                }
            } else {
                // ถ้าเลือกประเภทสินค้า
                url = `http://localhost:5000/api/products/type/${type}`;
            }

            const response = await axios.get(url);

            if (response.data && Array.isArray(response.data)) {
                setProducts(response.data);
            } else {
                console.error("Invalid response format:", response.data);
                setProducts([]);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // โหลดสินค้าเมื่อ component ถูก mount
    useEffect(() => {
        fetchProducts("all");
    }, [fetchProducts]);

    // จัดการการค้นหา
    const handleSearch = useCallback((searchTerm) => {
        setSearchQuery(searchTerm);
        // รอให้ผู้ใช้พิมพ์เสร็จก่อนส่งคำค้นหา (debounce)
        const timeoutId = setTimeout(() => {
            if (searchTerm.trim() !== "") {
                fetchProducts("all", searchTerm);
            } else {
                // ถ้าช่องค้นหาว่าง ให้โหลดสินค้าตามประเภทที่เลือกไว้
                fetchProducts(selectedType);
            }
        }, 300); // รอ 300ms

        return () => clearTimeout(timeoutId);
    }, [fetchProducts, selectedType]);

    // จัดการการกรองตามประเภท
    const handleFilterClick = useCallback((type) => {
        setSelectedType(type);
        setSearchQuery(""); // ล้างค่าการค้นหาเมื่อเปลี่ยนประเภท
        fetchProducts(type);
    }, [fetchProducts]);

    const goToProductDetail = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="app-container">
            {/* Header */}
            <header className="header" style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
            }}>
                <h1 onClick={() => {
                    navigate("/");
                    setSelectedType("all");
                    setSearchQuery("");
                    fetchProducts("all");
                }} style={{ cursor: "pointer" }}>
                    HOME
                </h1>

                <div className="header-buttons" style={{
                    position: "absolute",
                    top: "50%",
                    right: "20px",
                    transform: "translateY(-50%)",
                    display: "flex",
                    gap: "10px",
                }}>
                    {username ? (
                        <Link to="/profile" style={{
                            textDecoration: "none",
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}>
                            Hello, {username}
                        </Link>
                    ) : (
                        <>
                            <Link to="/register" style={{
                                textDecoration: "none",
                                color: "white",
                                marginRight: "10px",
                            }}>
                                Register
                            </Link>
                            <Link to="/login" style={{
                                textDecoration: "none",
                                color: "white",
                            }}>
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </header>

            {/* ช่องค้นหา */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <i className="fas fa-search search-icon"></i>
            </div>

            {/* ปุ่ม Filter */}
            <div className="filter-container">
                <button
                    className={`filter-button ${selectedType === "sunscreen" ? "active" : ""}`}
                    onClick={() => handleFilterClick("sunscreen")}
                >
                    Sunscreen
                </button>
                <button
                    className={`filter-button ${selectedType === "cleanser" ? "active" : ""}`}
                    onClick={() => handleFilterClick("cleanser")}
                >
                    Cleanser
                </button>
                <button
                    className={`filter-button ${selectedType === "moisturizer" ? "active" : ""}`}
                    onClick={() => handleFilterClick("moisturizer")}
                >
                    Moisturizer
                </button>
            </div>

            {/* แสดงสินค้า */}
            <div className="content-container">
                <h2>Product Recommend</h2>
                <div className="product-slider">
                    {loading ? (
                        <div>Loading...</div>
                    ) : products.length > 0 ? (
                        products.map((product) => (
                            <div
                                className="product-item"
                                onClick={() => goToProductDetail(product._id)}
                                key={product._id}
                            >
                                <img
                                    src={`http://localhost:5000${product.imageUrl}` || "https://via.placeholder.com/150"}
                                    alt={product.name}
                                    style={{ width: "150px", height: "150px" }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/150";
                                    }}
                                />
                                <p className="product-name">{product.name}</p>
                                <p className="product-description">
                                    {product.description || "No description available"}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>No products found</div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <Link to="/add-product" className="advertise-link">
                    Contact to Advertise
                </Link>
            </footer>
        </div>
    );
};

export default Home;