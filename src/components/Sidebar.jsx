import React, { useState } from 'react';

/**
 * Sidebar Navigation Component
 * Provides access to different dashboard modules/features
 */
export default function Sidebar({ activeModule, onModuleChange, isOpen, onToggle }) {
  const modules = [
    { id: 'classroom', label: '⚡ Smart Classroom', icon: '⚡' },
    { id: 'parking', label: '🚗 Smart Parking', icon: '🚗' },
    { id: 'department', label: '🏛️ Departments', icon: '🏛️' },
    { id: 'campus-map', label: '🗺️ Campus Map', icon: '🗺️' },
    { id: 'timetable', label: '📅 Timetable', icon: '📅' },
    { id: 'security', label: '🔒 Campus Security', icon: '🔒' },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Modules</h3>
          <button className="close-btn" onClick={() => onToggle(false)}>✕</button>
        </div>

        <nav className="sidebar-nav">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => {
                onModuleChange(module.id);
                onToggle(false);
              }}
              className={`nav-item ${activeModule === module.id ? 'active' : ''} ${
                module.comingSoon ? 'disabled' : ''
              }`}
              disabled={module.comingSoon}
              title={module.comingSoon ? 'Coming soon!' : ''}
            >
              <span className="nav-icon">{module.icon}</span>
              <span className="nav-label">{module.label}</span>
              {module.comingSoon && <span className="badge">Soon</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>v1.0.0</p>
          <p className="text-muted">Hackathon 2026</p>
        </div>
      </aside>

      {/* Overlay (for mobile) */}
      {isOpen && <div className="sidebar-overlay" onClick={() => onToggle(false)} />}
    </>
  );
}
