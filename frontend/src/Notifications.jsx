import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Notifications = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { products } = location.state || {};

  const handleBack = () => {
    navigate(-1, { state: { resetNotifications: true } });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '20px' }}>Your Notifications</h1>
      {products?.length === 0 ? (
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          No new notifications.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 15px',
                backgroundColor: '#d1ecf1',
                color: '#0c5460',
                border: '1px solid #bee5eb',
                borderRadius: '5px',
                flexWrap: 'wrap', // เพิ่มเพื่อรองรับข้อความยาว
              }}
            >
              <span style={{ fontWeight: 'bold', color: '#155724', flex: '1 1 100%' }}>
                New Product Added!
              </span>
              <span>
                <strong>สินค้า:</strong> {product.name}
              </span>
              <span>
                <strong>ราคา:</strong> ${product.price}
              </span>
              <span>
                <strong>ประเภท:</strong> {product.type}
              </span>
              <span>
                <strong>แบรนด์:</strong> {product.brand}
              </span>
              <span style={{ fontStyle: 'italic', color: '#555' }}>
                <strong>เวลาเพิ่ม:</strong>{' '}
                {new Date(product.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleBack}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Notifications;
