import React from 'react';
import SmartClassroom from './SmartClassroom';

/**
 * Classroom Module
 * Focused view for Smart Classroom feature
 */
export default function ClassroomModule() {
  const classrooms = [
    { name: 'Room A', id: 'room-a' },
    { name: 'Room B', id: 'room-b' },
    { name: 'Room C', id: 'room-c' },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">⚡ Smart Classroom Energy Automation</h1>
        <p className="dashboard-subtitle">Intelligent lighting and climate control</p>
        <div className="info-box">
          <p>
            <strong>How it works:</strong> Adjust student count and temperature to see automated control of lights and fans. 
            Use manual override to take direct control of individual devices.
          </p>
        </div>
      </header>

      {/* Automation Rules Info */}
      <section className="dashboard-section">
        <h2 className="section-title">📋 Automation Rules</h2>
        <div className="rules-grid">
          <div className="rule-card">
            <div className="rule-icon">👥</div>
            <h3>Student Detection</h3>
            <p>If students = 0: Lights OFF, Fan OFF</p>
            <p>If students {'>'} 0: Lights ON</p>
          </div>
          <div className="rule-card">
            <div className="rule-icon">🌡️</div>
            <h3>Temperature Control</h3>
            <p>If temp {'>'} 28°C: Fan ON</p>
            <p>Else: Fan OFF</p>
          </div>
          <div className="rule-card">
            <div className="rule-icon">🔧</div>
            <h3>Manual Override</h3>
            <p>Disable automation and manually control devices</p>
            <p>Quick response to special needs</p>
          </div>
        </div>
      </section>

      {/* Classrooms */}
      <section className="dashboard-section">
        <h2 className="section-title">🏛️ Classrooms</h2>
        <div className="cards-grid">
          {classrooms.map((room) => (
            <SmartClassroom key={room.id} roomName={room.name} roomId={room.id} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        💡 Real IoT system: Replace sliders with actual occupancy and temperature sensors
      </footer>
    </div>
  );
}
