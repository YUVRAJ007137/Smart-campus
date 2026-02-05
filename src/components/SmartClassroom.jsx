import React, { useState, useEffect } from 'react';

/**
 * SmartClassroom Component
 * Simulates IoT classroom automation with:
 * - Student count sensor (0-60)
 * - Temperature sensor (18-40°C)
 * - Light control
 * - Fan control
 * - Manual override mode
 */
export default function SmartClassroom({ roomName, roomId }) {
  const [students, setStudents] = useState(20);
  const [temperature, setTemperature] = useState(24);
  const [manualOverride, setManualOverride] = useState(false);

  // Simulated sensor states
  const [lights, setLights] = useState(true);
  const [fan, setFan] = useState(false);

  // Automation logic (simulating real IoT rules)
  useEffect(() => {
    if (manualOverride) return; // Skip automation if manual override is active

    // Rule 1: If students == 0 → Lights OFF, Fan OFF
    if (students === 0) {
      setLights(false);
      setFan(false);
      return;
    }

    // Rule 2: If students > 0 → Lights ON
    if (students > 0) {
      setLights(true);
    }

    // Rule 3: If temperature > 28 → Fan ON, Else → Fan OFF
    if (temperature > 28) {
      setFan(true);
    } else {
      setFan(false);
    }
  }, [students, temperature, manualOverride]);

  const toggleLights = () => setLights(!lights);
  const toggleFan = () => setFan(!fan);

  return (
    <div className="card">
      <h2>{roomName}</h2>

      {/* Student Count Slider */}
      <div className="slider-group">
        <div className="slider-label">
          <label>👥 Students: {students}</label>
          <span>0-60</span>
        </div>
        <input
          type="range"
          min="0"
          max="60"
          value={students}
          onChange={(e) => setStudents(Number(e.target.value))}
          disabled={manualOverride}
          className="slider-range"
        />
      </div>

      {/* Temperature Slider */}
      <div className="slider-group">
        <div className="slider-label">
          <label>🌡️ Temperature: {temperature}°C</label>
          <span>18-40°C</span>
        </div>
        <input
          type="range"
          min="18"
          max="40"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          disabled={manualOverride}
          className="slider-range"
        />
      </div>

      {/* Status Indicators */}
      <div className="status-grid">
        {/* Lights Status */}
        <div className={`status-box status-box-lights ${lights ? '' : 'off'}`}>
          <div className="status-emoji">{lights ? '💡' : '🌑'}</div>
          <p className="status-text">
            Lights: <span className="status-value">{lights ? 'ON' : 'OFF'}</span>
          </p>
        </div>

        {/* Fan Status */}
        <div className={`status-box status-box-fan ${fan ? '' : 'off'}`}>
          <div className="status-emoji">{fan ? '🌀' : '❌'}</div>
          <p className="status-text">
            Fan: <span className="status-value">{fan ? 'ON' : 'OFF'}</span>
          </p>
        </div>
      </div>

      {/* Manual Controls */}
      <div className="control-section">
        <span className="control-label">Manual Control</span>
        <div className="button-group">
          <button
            onClick={toggleLights}
            disabled={!manualOverride}
            className="btn-warning"
          >
            {lights ? '💡 Turn Lights OFF' : '🌑 Turn Lights ON'}
          </button>
          <button
            onClick={toggleFan}
            disabled={!manualOverride}
            className="btn-cyan"
          >
            {fan ? '🌀 Turn Fan OFF' : '❌ Turn Fan ON'}
          </button>
        </div>
      </div>

      {/* Manual Override Toggle */}
      <div className="override-section">
        <label className="override-label">🔧 Manual Override</label>
        <button
          onClick={() => setManualOverride(!manualOverride)}
          className={`toggle-switch ${manualOverride ? 'active' : ''}`}
        />
      </div>

      {/* Automation Status */}
      <p className="status-message">
        {manualOverride ? '⚠️ Automation disabled' : '✅ Automation enabled'}
      </p>
    </div>
  );
}
