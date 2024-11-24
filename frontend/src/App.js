import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddProduct from './components/Product/addproduct';
import UpdateProduct from './components/Product/updateproduct';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AdminPage from './components/AdminPage/addminpage';
import DeleteProduct from './components/Product/deleteproduct';
import UserProfile from './components/Profile/profile'; // Import UserProfile component
import ProfilePage from './components/Profile/ProfilePage'; // Import the ProfilePage component
import Recommended from './Page2/mainheader';
import PaymentForm from './Page2/payment';
import AdvertisingHistory from './components/Advertising/advertisinghistory'; // Import the AdvertisingHistory component
import Notifications from './components/Notifications/Notifications';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/delete-product/:id" element={<DeleteProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<UserProfile />} /> {/* Add route for UserProfile */}
        <Route path="/profile-page" element={<ProfilePage />} /> {/* Add route for ProfilePage */}
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/advertising-history" element={<AdvertisingHistory />} /> {/* Route for Advertising History */}
        <Route path="/notifications" element={<Notifications />} /> {/* Route for Notifications */}
      </Routes>
    </Router>
  );
};

export default App;
