import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import './noti.css';

const Notifications = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { products = [] } = location.state || {}; // ตั้งค่าเริ่มต้นให้ products เป็น array

  const handleBack = () => {
    navigate(-1, { state: { resetNotifications: true } });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="notifications-container">
        <h1 className="notifications-title">Your Notifications</h1>
        {/* {products.length === 0 ? (
          <div className="no-notifications">
            No new notifications.
          </div>
        ) : ( */}
          <div className="notifications-list">
            {products.map((product) => (
              <div key={product._id} className="notification-item">
                <span className="notification-title">New Product Added!</span>
                <span className="product-detail"><strong>สินค้า:</strong> {product.name}</span>
                <span className="product-detail"><strong>ราคา:</strong> ${product.price}</span>
                <span className="product-detail"><strong>ประเภท:</strong> {product.type}</span>
                <span className="product-detail"><strong>แบรนด์:</strong> {product.brand}</span>
                <span className="product-time">
                  <strong>เวลาเพิ่ม:</strong> {new Date(product.createdAt).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

        <button onClick={handleBack} className="back-button">
          Back
        </button>
      </div>
    </div>
  );
};

export default Notifications;


// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Navbar from './navbar';
// import './noti.css';

// const Notifications = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { products } = location.state || {};

//   const handleBack = () => {
//     navigate(-1, { state: { resetNotifications: true } });
//   };

//   return (
//     <div className="container">
//       {/* Sidebar/Navbar */}
//       <Navbar />
//       <div className="notifications-container">
//         <h1 className="notifications-title">Your Notifications</h1>
//         {products?.length === 0 ? (
//           <div className="no-notifications">
//             No new notifications.
//           </div>
//         ) : (
//           <div className="notifications-list">
//             {products.map((product) => (
//               <div key={product._id} className="notification-item">
//                 <span className="notification-title">New Product Added!</span>
//                 <span className="product-detail"><strong>สินค้า:</strong> {product.name}</span>
//                 <span className="product-detail"><strong>ราคา:</strong> ${product.price}</span>
//                 <span className="product-detail"><strong>ประเภท:</strong> {product.type}</span>
//                 <span className="product-detail"><strong>แบรนด์:</strong> {product.brand}</span>
//                 <span className="product-time">
//                   <strong>เวลาเพิ่ม:</strong> {new Date(product.createdAt).toLocaleString()}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}

//         <button onClick={handleBack} className="back-button">
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Notifications;
