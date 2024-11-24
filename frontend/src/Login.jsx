import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css";
import imageLogin from "./imageLogin.png"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Special case for admin login without API request
            if (username === 'admin' && password === 'kmutt123') {
                localStorage.setItem('username', username);
                navigate('/admin'); // Redirect to Admin dashboard
                return;
            }

            // General user login via API
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            if (response.status === 200) {
                localStorage.setItem('username', username);
                navigate('/Home'); // Redirect to the home page
            }
        } catch (error) {
            alert('Invalid username or password. Please try again.'); // Inform the user of a failed login attempt
        }
    };

    return (
        <div className="login-page">
            <button className="close-btn-log" onClick={() => navigate(-1)}>&times;</button>
            <div className="login-container">
                <div className="login-image">
                    <img
                        src={imageLogin} // Replace this with your desired image
                        alt="Login Illustration"
                    />
                </div>
                <div className="login-form">
                    <h2>Welcome Back</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit">Login</button>
                    </form>
                    <p>
                        Don't have an account? <Link to="/register">Register here</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;