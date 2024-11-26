import React from "react";
import { useNavigate } from "react-router-dom";
import "./paymentsuccessful.css";

const PaymentSuccessful = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        {/* Full green circle with white checkmark */}
        <div className="success-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="white"
            className="check-circle"
          >
            <circle cx="12" cy="12" r="12" fill="#4CAF50" />
            <polyline
              points="9 12 12 15 16 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <h2>Payment Success!</h2>
        <div className="payment-info">
          <div className="info-row">
            <span className="label">Reference Number</span>
            <span className="value">000001235667</span>
          </div>
          <div className="info-row">
            <span className="label">Date</span>
            <span className="value">Dec 25, 2024</span>
          </div>
          <div className="info-row">
            <span className="label">Time</span>
            <span className="value">7:00 AM</span>
          </div>
          <div className="info-row">
            <span className="label">Payment Method</span>
            <span className="value">Credit Card</span>
          </div>
          <div className="info-row">
            <span className="label">Amount</span>
            <span className="value">฿1,000.00</span>
          </div>
        </div>
        <button
          className="pdf-button"
          onClick={() => alert("Downloading PDF receipt...")}
        >
          Get PDF Receipt
        </button>
        <button
          className="back-home-button"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
