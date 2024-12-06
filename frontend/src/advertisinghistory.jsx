import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserProducts.css';
import Navbar from './navbar';

const UserProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('username');
        if (!loggedInUser) {
            navigate('/login');
        } else {
            axios.get(`http://localhost:5000/api/products/by-user/${loggedInUser}`)
                .then(response => setProducts(response.data))
                .catch(error => setError(error.response?.data?.message || 'Error fetching products'));
        }
    }, [navigate]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
            {/* Sidebar/Navbar */}
            <Navbar />
            <div className="user-products-container">
                <h1 className="title">Your Products</h1>                {products.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    <div className="product-list">
                        <div className='text-products'>
                        {products.map(product => (
                            <div key={product._id} className="product-card">
        
                                    <div style={{ fontSize: '20px', fontWeight: 'bold' , textAlign: 'center'}}>{product.name}</div>
                                    <img 
                                        src={`http://localhost:5000${product.imageUrl}`} 
                                        alt={product.name} 
                                        className="product-image"

                                    />
                                    <div style={{ fontSize: '16px', fontWeight: 'bold' , textAlign: 'center' }}><strong>Price:</strong> ${product.price}</div>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold' , textAlign: 'center' }} ><strong>Type:</strong> {product.type}</div>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold' , textAlign: 'center' }}><strong>Brand:</strong> {product.brand}</div>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold' , textAlign: 'center' }}><strong>Added By:</strong> {product.addedBy?.username || 'Unknown'}</div>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold' , textAlign: 'center' }}><strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}</div>
                            </div>
                        
                        ))}
                        </div>
                    </div>
                )}
                <button className="back-button" onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default UserProducts;
