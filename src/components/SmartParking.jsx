import React, { useState } from 'react';

/**
 * SmartParking Component
 * Simulates a parking lot with 20 slots with ultrasonic sensors
 * Each slot can be toggled to show available (green) or occupied (red)
 * Real IoT system would use ultrasonic sensors to detect car presence
 */
export default function SmartParking() {
  const TOTAL_SLOTS = 20;
  const [parkingSlots, setParkingSlots] = useState(
    Array(TOTAL_SLOTS).fill(false) // false = available, true = occupied
  );

  // Toggle slot status (simulating sensor detection)
  const toggleSlot = (index) => {
    const newSlots = [...parkingSlots];
    newSlots[index] = !newSlots[index];
    setParkingSlots(newSlots);
  };

  // Calculate statistics
  const occupiedSlots = parkingSlots.filter(slot => slot).length;
  const availableSlots = TOTAL_SLOTS - occupiedSlots;
  const occupancyPercentage = Math.round((occupiedSlots / TOTAL_SLOTS) * 100);

  return (
    <div className="card">
      <h2>🅿️ Smart Parking System</h2>
      
      {/* Occupancy Stats */}
      <div className="stats-grid">
        <div className="stat-card stat-card-blue">
          <p className="stat-label">Total Slots</p>
          <p className="stat-value">{TOTAL_SLOTS}</p>
        </div>
        <div className="stat-card stat-card-green">
          <p className="stat-label">Available</p>
          <p className="stat-value">{availableSlots}</p>
        </div>
        <div className="stat-card stat-card-red">
          <p className="stat-label">Occupied</p>
          <p className="stat-value">{occupiedSlots}</p>
        </div>
      </div>

      {/* Occupancy Bar */}
      <div className="occupancy-section">
        <div className="occupancy-label">
          <p>Occupancy</p>
          <p>{occupancyPercentage}%</p>
        </div>
        <div className="occupancy-bar">
          <div
            className={`occupancy-fill ${
              occupancyPercentage > 75
                ? 'red'
                : occupancyPercentage > 50
                ? 'yellow'
                : 'green'
            }`}
            style={{ width: `${occupancyPercentage}%` }}
          />
        </div>
      </div>

      {/* Parking Slots Grid */}
      <div className="control-section">
        <span className="control-label">🔧 Click slot to toggle (simulating ultrasonic sensor)</span>
        <div className="parking-grid">
          {parkingSlots.map((isOccupied, index) => (
            <button
              key={index}
              onClick={() => toggleSlot(index)}
              className={`parking-slot ${
                isOccupied ? 'parking-slot-occupied' : 'parking-slot-available'
              }`}
            >
              <span className="slot-emoji">{isOccupied ? '🚗' : '✓'}</span>
              <span className="slot-number">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Status Message */}
      <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px' }}>
        <p style={{ fontSize: '14px', color: '#1e40af' }}>
          <strong>Status:</strong>{' '}
          {availableSlots > 0
            ? `${availableSlots} space${availableSlots > 1 ? 's' : ''} available ✅`
            : 'Parking lot full ❌'}
        </p>
      </div>

      {/* IoT Sensor Info */}
      <p className="status-message" style={{ marginTop: '16px' }}>
        💡 Real system: Ultrasonic sensors detect vehicle presence in each slot
      </p>
    </div>
  );
}
