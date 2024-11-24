import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    company: '',
    email: '',
    phoneNumber: '',
    profileImage: '', // เพิ่มสำหรับรูปภาพโปรไฟล์
  });
  const [profileImageFile, setProfileImageFile] = useState(null); // เก็บไฟล์รูปภาพ
  const [imagePreview, setImagePreview] = useState(null); // เก็บ URL รูปภาพที่เลือก
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(`/api/users/${username}`)
      .then((response) => {
        setFormData(response.data);
        if (response.data.profileImage) {
          setImagePreview(response.data.profileImage); // แสดงภาพเดิมถ้ามี
        }
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // แสดง Preview ของรูปที่เลือก
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (profileImageFile) {
      data.append('profileImage', profileImageFile); // แนบไฟล์รูปภาพ
    }

    axios
      .put(`/api/users/${username}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        setMessage('Profile updated successfully!');
        setTimeout(() => navigate(-1), 1500);
      })
      .catch((error) => {
        setMessage('Error updating profile. Please try again.');
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-6">
      <div className="bg-white shadow-lg p-8 w-full max-w-md rounded-lg">
        {/* เพิ่ม margin-bottom ให้คำว่า Edit Profile ห่างจากรูปโปรไฟล์ */}
        <h1 className="text-lg font-medium text-gray-700 mb-16">Edit Profile</h1>

        {message && <p className="text-center text-sm mb-4 text-green-600">{message}</p>}

        {/* รูปโปรไฟล์ */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div
            style={{
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
              backgroundColor: '#f8f9fa',
            }}
          >
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
                cursor: 'pointer',
              }}
            />
          </div>
        </div>

        {/* ฟอร์มการกรอกข้อมูล */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {['username', 'company', 'email', 'phoneNumber'].map((field, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <label className="text-sm text-gray-600 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field] || ''}
                onChange={handleChange}
                className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
