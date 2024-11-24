import React, { useEffect, useState } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (!loggedInUser) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${loggedInUser}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="user-profile-container">
      {/* Top Bar */}
      <div className="template-top">
        <ArrowLeft
          className="back-arrow"
          onClick={() => navigate('/home')}
        />
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="user-info">
            <div className="avatar">
              <User className="avatar-icon" />
            </div>
            <p className="username">{userData?.username || 'Username'}</p>
          </div>
          <div className="menu">
            <button className="menu-item active"><img src="asserts/User.png" alt="User Icon" className="menu-icon" /> <div className='input-label'>Profile</div></button>
            <button className="menu-item"><img src="asserts/Bag.png" alt="User Icon" className="menu-icon" /><div className='input-label'>Advertising</div></button>
            <button className="menu-item"><img src="asserts/Bag-Timer.png" alt="User Icon" className="menu-icon" /><div className='input-label'>Advertising History</div></button>
            <button className="menu-item"><img src="asserts/Notification.png" alt="User Icon" className="menu-icon" /><div className='input-label'>Notifications</div></button>
          </div>
        </div>

        {/* Profile Form */}
        <div className="profile-form">
          <div className="form-header">
            <div className="form-avatar">
              <User className="avatar-icon-large" />
            </div>
            <button className="select-image-btn">Select Image</button>
          </div>
          <div className="form-content">
            <div className="form-row">
              <div className="input-container">
                <div className='input-label'>Username</div>
                <input className="d-input" type="text" value={userData?.username || ''} readOnly />
                <span className="input-icon">
                  <img src="/asserts/arrow_right.png" alt="Arrow Icon" />
                </span>
              </div>
            </div>
            <div className="form-row">
              <div className="input-container">
                <div className='input-label'>Company Name</div>
                <input className="d-input" type="text" value={userData?.companyName || ''} readOnly />
                <span className="input-icon">
                  <img src="/asserts/arrow_right.png" alt="Arrow Icon" />
                </span>
              </div>
            </div>
            <div className="form-row">
              <div className="input-container">
                <div className='input-label'>Email</div>
                <input className="d-input" type="email" value={userData?.email || ''} readOnly />
                <span className="input-icon">
                  <img src="/asserts/arrow_right.png" alt="Arrow Icon" />
                </span>
              </div>
            </div>
            <div className="form-row">
              <div className="input-container">
                <div className='input-label'>Phone Number</div>
                <input className="d-input" type="text" value={userData?.phoneNumber || ''} readOnly />
                <span className="input-icon">
                  <img src="/asserts/arrow_right.png" alt="Arrow Icon" />
                </span>
              </div>
            </div>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            <img src="asserts/Logout.png" alt="User Icon" className="menu-icon" />
            Log-out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
