import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearch }) => {
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่ใน localStorage หรือไม่
    useEffect(() => {
        const loggedInUser = localStorage.getItem('username');
        if (loggedInUser) {
            setUsername(loggedInUser);
        }
    }, []);

    // ฟังก์ชันค้นหาข้อมูล
    const handleSearch = () => {
        onSearch(searchTerm);  // ส่งค่าคำค้นหากลับไปยัง parent component
    };

    // ฟังก์ชัน Logout
    const handleLogout = () => {
        localStorage.removeItem('username');
        setUsername(null);
        navigate('/');  // นำทางไปที่หน้า Home
    };

    return (
        <header className="header-container">
            <div className="header-top">
                <div className="header-left">
                    {/* ค้นหาสินค้า */}
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="header-right">
                    {username ? (
                        <div>
                            {/* ลิงก์ไปหน้าโปรไฟล์ */}
                            <Link to="/profile" className="header-link">
                                Hello, {username}
                            </Link>
                            {/* ลิงก์ไปหน้าตะกร้าสินค้า */}
                            <a href="/cart" className="cart-icon">
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                            {/* ปุ่ม Logout */}
                            <button onClick={handleLogout} className="logout-button">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div >
                            <Link to="/login" className="header-link">Login</Link>
                            <span> | </span>
                            <Link to="/register" className="header-link">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
