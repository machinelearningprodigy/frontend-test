import React, { useState } from "react";
import { Home, Palette, Settings, CreditCard, LogOut } from "lucide-react";

const Header = () => {
  const [header1, setHeader1] = useState("");
  const [header2, setHeader2] = useState("");
  const [button1Text, setButton1Text] = useState("");
  const [button1Link, setButton1Link] = useState("");
  const [button2Text, setButton2Text] = useState("");
  const [button2Link, setButton2Link] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      header1,
      header2,
      button1: { text: button1Text, link: button1Link },
      button2: { text: button2Text, link: button2Link },
    });
  };

  return (
    <div style={styles.adminContainer}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h2 style={styles.sidebarTitle}>ADMIN</h2>
        </div>
        <nav style={styles.navMenu}>
          <a href="#" style={{ ...styles.navItem, ...styles.activeNavItem }}>
            <Home size={20} />
            <span style={styles.navText}>Home</span>
          </a>
          <a href="#" style={styles.navItem}>
            <Palette size={20} />
            <span style={styles.navText}>Branding</span>
          </a>
          <a href="#" style={styles.navItem}>
            <Settings size={20} />
            <span style={styles.navText}>Services</span>
          </a>
          <a href="#" style={styles.navItem}>
            <CreditCard size={20} />
            <span style={styles.navText}>Subscription</span>
          </a>
          <a href="#" style={{ ...styles.navItem, ...styles.logoutItem }}>
            <LogOut size={20} />
            <span style={styles.navText}>Log Out</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.headerSection}>
          <h1 style={styles.headerTitle}>Header</h1>
          <form onSubmit={handleSubmit}>
            <div style={styles.headerConfig}>
              <div style={styles.headerGroup}>
                <label style={styles.label}>Header 1</label>
                <input
                  type="text"
                  placeholder="Enter Header 1"
                  style={styles.inputField}
                  value={header1}
                  onChange={(e) => setHeader1(e.target.value)}
                />
                <label style={styles.label}>Header 2</label>
                <input
                  type="text"
                  placeholder="Enter Header 2"
                  style={styles.inputField}
                  value={header2}
                  onChange={(e) => setHeader2(e.target.value)}
                />
              </div>

              <div style={styles.buttonConfig}>
                <div style={styles.buttonGroup}>
                  <h3 style={styles.buttonTitle}>Button 1</h3>
                  <input
                    type="text"
                    placeholder="Text"
                    style={styles.inputField}
                    value={button1Text}
                    onChange={(e) => setButton1Text(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Link"
                    style={styles.inputField}
                    value={button1Link}
                    onChange={(e) => setButton1Link(e.target.value)}
                  />
                </div>

                <div style={styles.buttonGroup}>
                  <h3 style={styles.buttonTitle}>Button 2</h3>
                  <input
                    type="text"
                    placeholder="Text"
                    style={styles.inputField}
                    value={button2Text}
                    onChange={(e) => setButton2Text(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Link"
                    style={styles.inputField}
                    value={button2Link}
                    onChange={(e) => setButton2Link(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button type="submit" style={styles.saveButton}>
              SAVE
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

const styles = {
  adminContainer: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  },
  sidebar: {
    width: "256px",
    backgroundColor: "#ffffff",
    boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
  },
  sidebarHeader: {
    padding: "1rem",
    borderBottom: "1px solid #e5e7eb",
  },
  sidebarTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    textAlign: "center",
  },
  navMenu: {
    padding: "1rem",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    marginBottom: "0.5rem",
    cursor: "pointer",
    transition: "background-color 0.2s",
    color: "#374151",
    textDecoration: "none",
  },
  activeNavItem: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
  },
  logoutItem: {
    color: "#ef4444",
  },
  navText: {
    fontSize: "1rem",
  },
  mainContent: {
    flex: 1,
    padding: "2rem",
  },
  headerSection: {
    maxWidth: "800px",
    margin: "auto",
  },
  headerTitle: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  headerConfig: {
    marginBottom: "2rem",
  },
  headerGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    fontWeight: "500",
    marginBottom: "0.5rem",
    display: "block",
  },
  inputField: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #e5e7eb",
    borderRadius: "0.375rem",
    marginBottom: "1rem",
    fontSize: "1rem",
  },
  buttonConfig: {
    display: "flex",
    gap: "2rem",
  },
  buttonGroup: {
    flex: 1,
  },
  buttonTitle: {
    marginBottom: "0.5rem",
  },
  saveButton: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "0.375rem",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};

export default Header;
