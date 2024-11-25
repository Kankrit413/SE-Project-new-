import React, { useEffect, useState } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (!loggedInUser) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const [userResponse, productsResponse] = await Promise.all([
          axios.get(`/api/users/${loggedInUser}`),
          axios.get(`/api/products/by-user/${loggedInUser}`),
        ]);

        setUserData(userResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/home');
  };

  const navigateToNotifications = () => {
    navigate('/notifications', { state: { products } });
  };

  return (
    <div className="container">
      {/* Sidebar/Navbar */}
      <div className="sidebar">
        <div className="profile-section">
          {userData?.profileImage ? (
            <img
              src={userData.profileImage}
              alt="Profile"
              className="profile-image"
            />
          ) : (
            <User className="default-icon" />
          )}
          <h2 className="username">{userData?.username || 'User'}</h2>
        </div>
        <nav className="nav-links">
          <button className="nav-button" onClick={() => navigate('/profile-page')}>
            View Profile Details
          </button>
          <button className="nav-button" onClick={() => navigate('/add-product')}>
            Advertising
          </button>
          <button className="nav-button" onClick={() => navigate('/advertising-history')}>
            Advertising History
          </button>
          <button className="nav-button" onClick={navigateToNotifications}>
            Notifications
          </button>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <button className="nav-button return-home" onClick={() => navigate('/home')}>
            Return to Home
          </button>
          <button className="nav-button logout" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
