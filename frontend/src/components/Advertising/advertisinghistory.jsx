import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Product/UserProducts.css';

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
        <div className="user-products-container">
            <h1 className="title">Your Products</h1>
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="product-list">
                    {products.map(product => (
                        <div key={product._id} className="product-card">
                            <h3>{product.name}</h3>
                            <img
                                src={`http://localhost:5000${product.imageUrl}`}
                                alt={product.name}
                                className="product-image"
                            />
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Type:</strong> {product.type}</p>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Added By:</strong> {product.addedBy?.username || 'Unknown'}</p>
                            <p><strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            )}
            <button className="back-button" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    );
};

export default UserProducts;
