import React from 'react';
import SmartParking from './SmartParking';

/**
 * Parking Module
 * Focused view for Smart Parking feature
 */
export default function ParkingModule() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">🚗 Smart Parking Management</h1>
        <p className="dashboard-subtitle">Real-time parking availability and occupancy tracking</p>
        <div className="info-box">
          <p>
            <strong>Features:</strong> Click on parking slots to simulate vehicle presence detection. 
            Real systems use ultrasonic sensors mounted above each spot.
          </p>
        </div>
      </header>

      {/* System Benefits */}
      <section className="dashboard-section">
        <h2 className="section-title">✨ System Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-emoji">⏱️</div>
            <h3>Save Time</h3>
            <p>Find available spots instantly without circling the lot</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-emoji">🌱</div>
            <h3>Eco-Friendly</h3>
            <p>Reduce emissions from searching for parking</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-emoji">💰</div>
            <h3>Cost Effective</h3>
            <p>Optimize parking space utilization</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-emoji">📊</div>
            <h3>Analytics</h3>
            <p>Track parking patterns and peak times</p>
          </div>
        </div>
      </section>

      {/* Parking System */}
      <section className="dashboard-section">
        <div className="cards-grid full">
          <SmartParking />
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        💡 Real IoT system: Ultrasonic sensors detect vehicles at each parking spot
      </footer>
    </div>
  );
}
