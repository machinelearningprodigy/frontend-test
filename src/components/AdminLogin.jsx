// AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, formData);
      localStorage.setItem('adminToken', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-container">
          <h1 className="login-title">Welcome Admin</h1>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}
            
            <button type="submit" className="login-button">
              LOG IN
            </button>

            <div className="forgot-password">
              <a href="/forgot-password">forgot password?</a>
            </div>
          </form>
        </div>
      </div>
      
      <div className="login-right">
        <div className="logo-container">
          <img
            src="https://saneinfotech.com/images/Sane-Infotech-Logo.png"
            alt="Company Logo"
            className="company-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;