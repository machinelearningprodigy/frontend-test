import React, { useState } from 'react';
import { Home, Crown, Settings, CreditCard, LogOut, Plus } from 'lucide-react';

// Sidebar Navigation Menu Items
const menuItems = [
  { icon: <Home size={20} />, text: 'Home' },
  { icon: <Crown size={20} />, text: 'Branding' },
  { icon: <Settings size={20} />, text: 'Services', active: true },
  { icon: <CreditCard size={20} />, text: 'Subscription' },
  { icon: <LogOut size={20} />, text: 'Log Out' },
];

// Sidebar Component
const Sidebar = () => (
  <aside
    style={{
      width: '256px',
      backgroundColor: 'white',
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
      borderRight: '1px solid #e5e7eb',
    }}
  >
    <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>ADMIN</h2>
    </div>
    <nav style={{ padding: '1rem' }}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            marginBottom: '0.5rem',
            cursor: 'pointer',
            backgroundColor: item.active ? '#2563eb' : 'transparent',
            color: item.active ? 'white' : 'black',
            transition: 'background-color 0.2s',
          }}
        >
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </nav>
  </aside>
);

// Service Card Component
const ServiceCard = ({ title, description, isAddNew }) => (
  <div
    style={{
      padding: '1.5rem',
      borderRadius: '0.5rem',
      minHeight: '150px',
      backgroundColor: isAddNew ? '#2563eb' : '#0a0f29',
      color: 'white',
      display: 'flex',
      flexDirection: isAddNew ? 'column' : 'block',
      alignItems: isAddNew ? 'center' : 'start',
      justifyContent: isAddNew ? 'center' : 'flex-start',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
  >
    {isAddNew ? (
      <>
        <Plus size={24} />
        <span>Add New</span>
      </>
    ) : (
      <>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '0.75rem' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', lineHeight: '1.5', opacity: '0.9' }}>{description}</p>
      </>
    )}
  </div>
);

// Main Services Component
const Services = () => {
  const [headerText, setHeaderText] = useState('');
  const [subheaderText, setSubheaderText] = useState('');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <Settings style={{ width: '1.5rem', height: '1.5rem' }} />
          <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Services</h1>
        </div>

        <div style={{ maxWidth: '1200px' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Services Header
            </label>
            <input
              type="text"
              value={headerText}
              onChange={(e) => setHeaderText(e.target.value)}
              placeholder="Enter services header"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                transition: 'border-color 0.2s',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Services Subheader
            </label>
            <input
              type="text"
              value={subheaderText}
              onChange={(e) => setSubheaderText(e.target.value)}
              placeholder="Enter services subheader"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                transition: 'border-color 0.2s',
              }}
            />
          </div>

          <section style={{ marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '500', marginBottom: '1rem' }}>
              Added Services
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <ServiceCard
                title="3D animation"
                description="Our team has decades of combined experience creating winning Facebook & Instagram campaigns."
              />
              <ServiceCard isAddNew={true} />
            </div>
          </section>

          <button
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            SAVE
          </button>
        </div>
      </main>
    </div>
  );
};

export default Services;
