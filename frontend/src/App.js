/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddProduct from './addproduct';
import UpdateProduct from './updateproduct';
import Login from './Login';
import Register from './Register';
import AdminPage from './addminpage';
import DeleteProduct from './deleteproduct';
import UserProfile from './profile'; // Import UserProfile component
import ProfilePage from './ProfilePage'; // Import the ProfilePage component
import EditProfile from './EditProfile'; // Import the EditProfile component
import Recommended from './Page2/mainheader';
import PaymentForm from './Page2/payment';
import AdvertisingHistory from './advertisinghistory'; // Import the AdvertisingHistory component
import Notifications from './Notifications'; 
import MainHeader from "./Page2/mainheader";
import AddProductForm1 from './addproduct1'; 
import PaymentSuccessful from "./Page2/paymentsuccessful";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} /> {/* Add route for UserProfile */}
        <Route path="/profile-page" element={<ProfilePage />} /> {/* Add route for ProfilePage */}
        <Route path="/edit-profile/:username" element={<EditProfile />} /> {/* Add route for EditProfile */}
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/advertising-history" element={<AdvertisingHistory />} /> {/* Route for Advertising History */}
        <Route path="/Page2/mainheader/:productId" element={<MainHeader />} />
        <Route path="/add-product1" element={<AddProductForm1 />} />
        <Route path="/paymentsuccessful" element={<PaymentSuccessful />} />
      </Routes>
    </Router>
  );
};

export default App;
