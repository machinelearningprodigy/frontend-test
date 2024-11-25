import React, { useState } from 'react';
import './styles.css';

const ClientLogos = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleLogoUpload = (event) => {
    setCompanyLogo(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission, save company details, etc.
    console.log('Company Name:', companyName);
    console.log('Company Logo:', companyLogo);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <nav className="nav-links">
          <a href="#" className="nav-link active">
            <svg className="nav-icon" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </a>
          <a href="#" className="nav-link">
            <svg className="nav-icon" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Branding
          </a>
          {/* Add more navigation links */}
        </nav>
      </div>

      <div className="main-content">
        <h1 className="page-title">Client Logos</h1>
        <div className="grid">
          <div className="added-clients">
            <h2 className="section-title">Added Clients</h2>
            <div className="client-logos">
              <div className="client-logo"></div>
              <div className="client-logo"></div>
              <div className="client-logo"></div>
              <div className="client-logo"></div>
            </div>
          </div>
          <div className="add-company">
            <h2 className="section-title">Add a new company</h2>
            <div className="company-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name of the company
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="logo" className="form-label">
                  Company Logo
                </label>
                <div className="logo-upload">
                  <label htmlFor="logo" className="upload-button">
                    Upload
                  </label>
                  <input
                    type="file"
                    id="logo"
                    className="file-input"
                    onChange={handleLogoUpload}
                  />
                  {companyLogo && (
                    <span className="file-info">
                      {companyLogo.name} - {companyLogo.size} bytes
                    </span>
                  )}
                </div>
              </div>
              <button className="submit-button" onClick={handleSubmit}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;