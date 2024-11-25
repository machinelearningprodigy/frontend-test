// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import Services from './components/Services';
import DashboardLayout from './components/DashboardLayout';
import Header2 from './components/Header2';
import Header from './components/Header';
import BrandingPage from './components/BrandingPage'
import ClientLogos from './components/ClientLogos'
import AddService from './components/AddService'
import { AuthProvider } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminToken');
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<AdminLogin />} />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <>
                  <DashboardLayout />
                  <Services />
                  <AddService />
                  <Header />
                  <BrandingPage />
                  <Header2 />
                  <ClientLogos />
                </>
              </ProtectedRoute>
            }
          />
          

          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;