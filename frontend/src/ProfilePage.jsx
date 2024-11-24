import React, { useEffect, useState } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './profilepage.css';
import Navbar from './navbar';

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (!loggedInUser) {
      navigate('/login');
    } else {
      axios
        .get(`/api/users/${loggedInUser}`)
        .then((response) => setUserData(response.data))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  const navigateToNotifications = () => {
    navigate('/notifications');
  };

  return (
    <div className="container">
      {/* Sidebar/Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content ">
        <div className="profile-card">
          {/* Back Arrow */}
          <ArrowLeft
            className="back-arrow"
            onClick={() => navigate(-1)} // Go back to the previous page
          />

          {/* Profile Image */}
          <div className="circle-container">
            {userData?.profileImage ? (
              <img
                src={userData.profileImage}
                alt="Profile"
                className="profile-image rounded-full w-24 h-24"
              />
            ) : (
              <User className="default-icon" />
            )}
          </div>

          {/* Username */}
          <h2 className="text">
            {userData?.username || 'User'}
          </h2>

          {/* User Details */}
          <div className="detail-item">
            {[
              { label: 'Username', value: userData?.username },
              { label: 'Company Name', value: userData?.company },
              { label: 'Email', value: userData?.email },
              { label: 'Phone Number', value: userData?.phoneNumber },
            ].map((field, index) => (
              <React.Fragment key={index}>
                <label>{field.label}</label>
                <input
                  type="text"
                  value={field.value || 'N/A'}
                  readOnly
                />
              </React.Fragment>
            ))}
          </div>


          {/* Buttons: Back and Edit */}
          <div className="flex items-center justify-between mt-6 w-full space-x-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg w-1/2 hover:bg-gray-600 transition"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-1/2 hover:bg-blue-600 transition"
              onClick={() => navigate(`/edit-profile/${userData?.username}`)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
