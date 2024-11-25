import React, { useState } from 'react';
import { Home, Settings, CreditCard, LogOut, Upload } from 'lucide-react';

const BrandingPage = () => {
  const [formData, setFormData] = useState({
    websiteTitle: '',
    tagline: '',
    logo: null,
  });

  const navigationItems = [
    { icon: <Home size={20} />, text: 'Home', path: '/home' },
    { icon: <Settings size={20} />, text: 'Branding', path: '/branding', active: true },
    { icon: <Settings size={20} />, text: 'Services', path: '/services' },
    { icon: <CreditCard size={20} />, text: 'Subscription', path: '/subscription' },
    { icon: <LogOut size={20} />, text: 'Log Out', path: '/logout' },
  ];

  const themeColors = [
    '#DC2626', '#4F46E5', '#BE185D', '#0D9488',
    '#7E22CE', '#F59E0B', '#EC4899', '#8B5CF6',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          logo: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Saving branding data:', formData);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#f1f1f1', padding: '24px' }}>
        <div style={{ color: '#4a5568', fontSize: '14px', fontWeight: '600', marginBottom: '32px', paddingLeft: '8px' }}>ADMIN</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navigationItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '8px',
                color: item.active ? 'white' : '#4a5568',
                backgroundColor: item.active ? '#4f46e5' : 'transparent',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ marginRight: '12px', width: '20px', height: '20px' }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <Settings size={24} />
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>Branding</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '24px' }}>
          {/* Current Branding */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
            <h2>Current Branding</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://saneinfotech.com/images/Sane-Infotech-Logo.png" alt="Company Logo" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <div>
                <h3>Sane Infotech</h3>
                <p>Making your IT solutions possible</p>
              </div>
            </div>
          </div>

          {/* Branding Form */}
          <div style={{ background: '#4f46e5', color: 'white', borderRadius: '12px', padding: '24px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Website Title</label>
              <input
                type="text"
                name="websiteTitle"
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e5e7eb' }}
                value={formData.websiteTitle}
                onChange={handleInputChange}
                placeholder="Enter website title"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Tagline</label>
              <input
                type="text"
                name="tagline"
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e5e7eb' }}
                value={formData.tagline}
                onChange={handleInputChange}
                placeholder="Enter tagline"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Logo</label>
              <div style={{ border: '2px dashed rgba(255, 255, 255, 0.5)', borderRadius: '8px', padding: '32px', textAlign: 'center', cursor: 'pointer' }}>
                <input
                  type="file"
                  id="logo-upload"
                  accept="image/png,image/jpeg"
                  onChange={handleLogoUpload}
                  style={{ display: 'none' }}
                />
                <label htmlFor="logo-upload">
                  <Upload size={32} />
                  <p>Upload a file (png/jpg)</p>
                </label>
              </div>
            </div>

            <button
              style={{
                width: '100%',
                padding: '12px',
                background: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>

        {/* Theme Colors */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
          <h2>Theme for website</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            {themeColors.map((color, index) => (
              <button
                key={index}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: color,
                }}
                aria-label={`Theme color ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrandingPage;
