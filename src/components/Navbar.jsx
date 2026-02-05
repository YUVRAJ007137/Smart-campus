import React from 'react';

/**
 * Navigation Bar Component
 * Displays college/institution name, logo, and menu toggle
 */
export default function Navbar({ onMenuToggle, sidebarOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Left: Menu Toggle + Logo */}
        <div className="navbar-left">
          <button
            className="menu-toggle"
            onClick={onMenuToggle}
            aria-label="Toggle navigation menu"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>

          <div className="navbar-brand">
            <span className="logo-emoji">🏫</span>
            <div className="brand-text">
              <h1>Smart Campus</h1>
              <p>IoT Dashboard</p>
            </div>
          </div>
        </div>

        {/* Center: Title */}
        <div className="navbar-center">
          <span className="institution-name">Tech University IoT Hub</span>
        </div>

        {/* Right: User/Status Info */}
        <div className="navbar-right">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Live</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
