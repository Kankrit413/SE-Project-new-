import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        company: ''
    });
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const submitFormData = new FormData();
            Object.keys(formData).forEach(key => {
                submitFormData.append(key, formData[key]);
            });

            if (profileImage) {
                submitFormData.append('profileImage', profileImage);
            }

            const response = await axios.post('http://localhost:5000/api/register', submitFormData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.status === 201) {
                alert('Registration successful. You may now log in.');
                navigate('/login');
            }
        } catch (error) {
            alert(error.response?.data?.message || 'An error occurred during registration. Please try again.');
        }
    };

    return (
        <div style={{
            backgroundColor: '#FFE5E6',
            padding: '2rem',
            borderRadius: '20px',
            maxWidth: '600px',
            margin: '2rem auto',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}>
            <h5 style={{ textAlign: 'center', marginBottom: '2rem' }}>Create a New Account</h5>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '150px',
                        height: '150px',
                        margin: '0 auto',
                        border: '2px dashed #ccc',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        backgroundColor: '#f8f9fa'
                    }}>
                        {imagePreview ? (
                            <img
                                src={imagePreview}
                                alt="Profile preview"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <div style={{ textAlign: 'center', color: '#666' }}>
                                <div>Click to upload</div>
                                <div>profile picture</div>
                            </div>
                        )}
                        <input
                            type="file"
                            id="profileImage"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: 0,
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                </div>

                {['username', 'email', 'phoneNumber', 'company', 'password'].map((field, index) => (
                    <div key={index}>
                        <label htmlFor={field} style={{ display: 'block', marginBottom: '0.5rem', textTransform: 'capitalize', fontWeight: 'bold' }}>
                            {field === 'phoneNumber' ? 'Phone Number' : field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                            type={field === 'password' ? 'password' : 'text'}
                            id={field}
                            placeholder={`Enter your ${field === 'phoneNumber' ? 'phone number' : field}`}
                            value={formData[field]}
                            onChange={handleChange}
                            required
                            style={{
                                padding: '0.5rem',
                                width: '100%',
                                boxSizing: 'border-box',
                                border: '1px solid #ccc',
                                borderRadius: '5px'
                            }}
                        />
                    </div>
                ))}

                <button
                    type="submit"
                    style={{
                        padding: '0.5rem',
                        backgroundColor: '#FCBABC',
                        color: '#FFF',
                        border: 'none',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        width: '100%',
                        fontWeight: 'bold'
                    }}
                >
                    Register
                </button>
            </form>
            <h6 style={{ marginTop: '1rem', textAlign: 'center' }}>
                Already have an account? <Link to="/login" style={{ color: '#FCBABC' }}>Log in here.</Link>
            </h6>
        </div>
    );
};

export default Register;
