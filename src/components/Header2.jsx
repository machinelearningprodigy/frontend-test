import React from 'react';
import { FaHome, FaTag, FaTools, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';

const Header2 = () => {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const sidebarStyle = {
    width: '200px',
    background: '#f2f2f2',
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  };

  const contentStyle = {
    flex: 1,
    padding: '20px',
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    color: '#000',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
  };

  const menuIconStyle = { marginRight: '10px' };

  const formSectionStyle = { marginBottom: '20px' };

  const formLabelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const formInputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  };

  const saveButtonStyle = {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <aside style={sidebarStyle}>
        <div style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '18px' }}>ADMIN</div>
        <div style={menuItemStyle}>
          <FaHome style={menuIconStyle} /> Home
        </div>
        <div style={menuItemStyle}>
          <FaTag style={menuIconStyle} /> Branding
        </div>
        <div style={menuItemStyle}>
          <FaTools style={menuIconStyle} /> Services
        </div>
        <div style={menuItemStyle}>
          <FaCreditCard style={menuIconStyle} /> Subscription
        </div>
        <div style={menuItemStyle}>
          <FaSignOutAlt style={menuIconStyle} /> Log Out
        </div>
      </aside>

      <main style={contentStyle}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          <FaTools style={{ marginRight: '10px' }} />
          Header
        </h1>

        <div style={formSectionStyle}>
          <label style={formLabelStyle}>Header 1</label>
          <input style={formInputStyle} type="text" placeholder="Header 1" />

          <label style={formLabelStyle}>Header 2</label>
          <input style={formInputStyle} type="text" placeholder="Header 2" />
        </div>

        <div style={formSectionStyle}>
          <label style={formLabelStyle}>Button 1 Text</label>
          <input style={formInputStyle} type="text" placeholder="Button 1 Text" />

          <label style={formLabelStyle}>Button 1 Link</label>
          <input style={formInputStyle} type="text" placeholder="Button 1 Link" />
        </div>

        <div style={formSectionStyle}>
          <label style={formLabelStyle}>Button 2 Text</label>
          <input style={formInputStyle} type="text" placeholder="Button 2 Text" />

          <label style={formLabelStyle}>Button 2 Link</label>
          <input style={formInputStyle} type="text" placeholder="Button 2 Link" />
        </div>

        <button style={saveButtonStyle}>SAVE</button>
      </main>
    </div>
  );
};

export default Header2;
