import React from 'react';
import SmartClassroom from './SmartClassroom';
import SmartParking from './SmartParking';

/**
 * Dashboard Module
 * Shows all features in one view
 */
export default function DashboardModule() {
  const classrooms = [
    { name: 'Room A', id: 'room-a' },
    { name: 'Room B', id: 'room-b' },
    { name: 'Room C', id: 'room-c' },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">📊 Campus Dashboard</h1>
        <p className="dashboard-subtitle">Complete overview of all campus IoT systems</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Smart Classroom Section */}
        <section className="dashboard-section">
          <h2 className="section-title">⚡ Smart Classroom Energy Automation</h2>
          <div className="cards-grid">
            {classrooms.map((room) => (
              <SmartClassroom key={room.id} roomName={room.name} roomId={room.id} />
            ))}
          </div>
        </section>

        {/* Smart Parking Section */}
        <section className="dashboard-section">
          <h2 className="section-title">🚗 Campus Parking Management</h2>
          <div className="cards-grid full">
            <SmartParking />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        💡 View all systems in one place
      </footer>
    </div>
  );
}
