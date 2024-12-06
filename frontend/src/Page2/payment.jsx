import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate
import './payment.css';
import paymentSuccessful from './paymentsuccessful';

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [price, setPrice] = useState(0);
  const [priceType, setPriceType] = useState('');
  const location = useLocation(); // Get location object
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (location.state) {
      setPrice(location.state.price); // Set the price passed from the previous page
      setPriceType(location.state.priceType); // Set the price type (weekly/monthly)
    }
  }, [location.state]);

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    
    <div className="payment-container">
      {/* Close Button */}
      <button className="close-btn" onClick={() => navigate('/')}>
        &times; {/* Navigate to home (root page) */}
      </button>

      {/* Payment Methods */}
      <div className="payment-wrapper">
        {/* Left Section: Payment Options */}
        <div className="payment-options">
          <h2>Payment Methods</h2>
          <div className="payment-method">
            <input 
              type="radio" 
              id="creditCard" 
              name="paymentMethod" 
              value="creditCard" 
              onChange={() => handleMethodChange('creditCard')} 
              checked={selectedMethod === 'creditCard'} 
            />
            <label htmlFor="creditCard">Credit / Debit Card</label>
          </div>
          <div className="payment-method">
            <input 
              type="radio" 
              id="qrCode" 
              name="paymentMethod" 
              value="qrCode" 
              onChange={() => handleMethodChange('qrCode')} 
              checked={selectedMethod === 'qrCode'} 
            />
            <label htmlFor="qrCode">QR Code</label>
          </div>
        </div>

        {/* Middle Section: Payment Details */}
        <div className="payment-details">
          {selectedMethod === 'creditCard' && (
            <div className="credit-card-form">
              <h3>Enter Card Details</h3>
              <input type="text" placeholder="Card Number" maxLength="16" />
              <div className="card-info">
                <input type="text" placeholder="MM / YY" maxLength="5" />
                <input type="text" placeholder="CVC" maxLength="3" />
              </div>
              <select>
                <option>Select Country</option>
                <option>Thailand</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
          )}

          {selectedMethod === 'qrCode' && (
            <div className="qr-code">
              <h3>Scan QR Code</h3>
              <img 
                src="https://www.icon0.com/wp-content/uploads/2022/04/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%B4%E0%B8%A7%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%94%E0%B8%9F%E0%B8%A3%E0%B8%B5-%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%AB%E0%B8%A1%E0%B8%94%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8-1-1024x1024.png" 
                alt="QR Code" 
                className="qr-code-img" 
              />
            </div>
          )}
        </div>

        {/* Right Section: Summary */}
        <div className="payment-summary">
          <div className="summary-row">
            <span>{`1 ${priceType === 'weekly' ? 'week' : 'month'} × 1`}</span>
            <span>฿{price}</span> {/* Display the selected price */}
          </div>
          <div className="summary-row">
            <span>VAT</span>
            <span>฿0</span> {/* Assume VAT is 0 for now */}
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>฿{price}</span> {/* Display the total price */}
          </div>
          <button className="continue-button"
          onClick={() => navigate('/paymentsuccessful')}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
