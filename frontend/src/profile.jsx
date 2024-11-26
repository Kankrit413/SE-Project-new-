import React, { useEffect, useState } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './profile.css';

const UserProfile = () => {
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
    <div className="profile-page-container">
      <div className="profile-card1">
        <ArrowLeft
          className="back-arrow"
          onClick={() => navigate('/home')}
        />
        <div className="circle-container">
          {userData?.profileImage ? (
            <img
              src={userData.profileImage}
              alt="Profile"
              className="profile-image"
            />
          ) : (
            <User className="default-icon" />
          )}
        </div>
        <h2 className="profile-username">{userData?.username || 'User'}</h2>
        <div className="button-container">
          <button
            className="action-button"
            onClick={() => navigate('/profile-page')}
          >
            Profile 
          </button>
          <button
            className="action-button"
            onClick={() => navigate('/add-product')}
          >
            Advertising
          </button>
          <button
            className="action-button"
            onClick={() => navigate('/advertising-history')}
          >
            Advertising History
          </button>
          <button
            className="action-button"
            onClick={navigateToNotifications}
          >
            Notifications
          </button>
        </div>
        <div className="button-container">
          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="return-button"
            onClick={() => navigate('/home')}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
