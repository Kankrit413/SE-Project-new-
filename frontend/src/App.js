import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddProduct from './addproduct';
import Login from './Login';
import Register from './Register';
import UserProfile from './profile'; // Import UserProfile component
import ProfilePage from './ProfilePage'; // Import the ProfilePage component
import EditProfile from './EditProfile'; // Import the EditProfile component
import Recommended from './Page2/mainheader';
import PaymentForm from './Page2/payment';
import AdvertisingHistory from './advertisinghistory'; // Import the AdvertisingHistory component
import Notifications from './Notifications'; 
import MainHeader from "./Page2/mainheader";
import MainHeader3 from "./Page3/mainheader3";
import MainHeader4 from "./Page4/mainheader4";
import MainHeader5 from "./Page5/mainheader5";
import MainHeader6 from "./Page6/mainheader6";
import MainHeader7 from "./Page7/mainheader7";
import MainHeader8 from "./Page8/mainheader8";
import MainHeader9 from "./Page9/mainheader9";
import MainHeader10 from "./Page10/mainheader10";
import AddProductForm1 from './addproduct1'; 
import PaymentSuccessful from './Page2/paymentsuccessful';
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
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/advertising-history" element={<AdvertisingHistory />} /> {/* Route for Advertising History */}
        <Route path="/notifications" element={<Notifications />} /> {/* Route for Notifications */}
        <Route path="/Page2/mainheader" element={<MainHeader />} />
        <Route path="/Page3/mainheader" element={<MainHeader3 />} />
        <Route path="/Page4/mainheader" element={<MainHeader4 />} />
        <Route path="/Page5/mainheader" element={<MainHeader5 />} />
        <Route path="/Page6/mainheader" element={<MainHeader6 />} />
        <Route path="/Page7/mainheader" element={<MainHeader7 />} />
        <Route path="/Page8/mainheader" element={<MainHeader8 />} />
        <Route path="/Page9/mainheader" element={<MainHeader9 />} />
        <Route path="/Page10/mainheader" element={<MainHeader10 />} />
        <Route path="/add-product1" element={<AddProductForm1 />} />
        <Route path="/paymentsuccessful" element={<PaymentSuccessful />} />
      </Routes>
    </Router>
  );
};
// Desktop

export default App;