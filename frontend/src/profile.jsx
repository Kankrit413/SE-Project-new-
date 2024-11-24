import React, { useEffect, useState } from 'react';
import { ArrowLeft, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="relative bg-white shadow-lg p-8 w-full max-w-sm rounded-lg flex flex-col items-center">
        <ArrowLeft
          className="text-gray-400 w-6 h-6 cursor-pointer hover:scale-110 transition-transform absolute left-4 top-4"
          onClick={() => navigate('/home')}
        />
        <div className="circle-container mt-8 mb-4">
          {userData?.profileImage ? (
            <img
              src={userData.profileImage}
              alt="Profile"
              className="profile-image rounded-full w-24 h-24 object-cover"
            />
          ) : (
            <User className="default-icon text-gray-400 w-24 h-24" />
          )}
        </div>
        <h2 className="text-lg font-medium text-gray-700">{userData?.username || 'User'}</h2>
        <div className="flex flex-col items-center mt-6 space-y-4 w-full">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition"
            onClick={() => navigate('/profile-page')}
          >
            View Profile Details
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 transition"
            onClick={() => navigate('/add-product')}
          >
            Advertising
          </button>
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg w-full hover:bg-indigo-600 transition"
            onClick={() => navigate('/advertising-history')}
          >
            Advertising History
          </button>

          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg w-full hover:bg-indigo-600 transition"
            onClick={navigateToNotifications}
          >
            Notifications
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-600 transition"
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
