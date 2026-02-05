import React, { useState, useEffect } from 'react';

/**
 * Security Module
 * Displays mock CCTV camera feeds from different campus locations
 */
export default function SecurityModule() {
  const [selectedCamera, setSelectedCamera] = useState(0);
  const [cameraFeeds, setCameraFeeds] = useState([]);

  const cameras = [
    { id: 1, name: 'Main Gate', location: 'Campus Entrance', status: 'online' },
    { id: 2, name: 'Library Front', location: 'Library Building', status: 'online' },
    { id: 3, name: 'Cafeteria', location: 'Student Center', status: 'online' },
    { id: 4, name: 'Parking Lot A', location: 'North Campus', status: 'online' },
    { id: 5, name: 'Computer Lab', location: 'Tech Building', status: 'online' },
    { id: 6, name: 'Sports Ground', location: 'Athletic Field', status: 'online' },
    { id: 7, name: 'Dormitory Entrance', location: 'Housing Building', status: 'online' },
    { id: 8, name: 'Research Lab', location: 'Science Center', status: 'online' },
  ];

  // Simulate camera activity
  useEffect(() => {
    const interval = setInterval(() => {
      setCameraFeeds(cameras.map(camera => ({
        ...camera,
        activityLevel: Math.floor(Math.random() * 100),
        timestamp: new Date().toLocaleTimeString(),
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const generateMockFeedContent = (cameraId) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];
    const locations = ['Main Entrance', 'Library', 'Cafeteria', 'Parking', 'Lab', 'Sports', 'Dorm', 'Research'];
    
    return {
      color: colors[cameraId % colors.length],
      location: locations[cameraId % locations.length],
      activity: Math.floor(Math.random() * 100),
    };
  };

  const activeFeed = cameraFeeds[selectedCamera] || cameras[selectedCamera];
  const feedContent = generateMockFeedContent(selectedCamera);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">🔒 Campus Security System</h1>
        <p className="dashboard-subtitle">Real-time CCTV monitoring and campus surveillance</p>
        <div className="info-box">
          <p>
            <strong>Security Monitoring:</strong> Live CCTV feeds from strategic campus locations. 
            Click on camera names below to switch between different surveillance points.
          </p>
        </div>
      </header>

      {/* Main CCTV Display */}
      <section className="dashboard-section">
        <h2 className="section-title">📹 Live Camera Feed</h2>
        <div className="cctv-main">
          <div className="main-screen" style={{ backgroundColor: feedContent.color }}>
            <div className="screen-overlay">
              <div className="feed-info">
                <div className="feed-label">CAMERA {selectedCamera + 1}</div>
                <div className="feed-location">{activeFeed?.name || 'Camera Feed'}</div>
                <div className="feed-location-detail">{activeFeed?.location || 'Location'}</div>
                <div className="feed-timestamp">
                  {activeFeed?.timestamp || new Date().toLocaleTimeString()}
                </div>
                <div className="activity-indicator">
                  <span className="activity-label">Activity:</span>
                  <span className="activity-bar">
                    <span 
                      className="activity-fill" 
                      style={{ width: `${feedContent.activity}%` }}
                    />
                  </span>
                  <span className="activity-value">{feedContent.activity}%</span>
                </div>
              </div>
              <div className="recording-badge">
                <span className="recording-dot"></span>
                <span>REC</span>
              </div>
            </div>
          </div>

          {/* Camera Info */}
          <div className="camera-info-bar">
            <div className="info-item">
              <span className="label">Status:</span>
              <span className="status-badge online">{activeFeed?.status?.toUpperCase() || 'ONLINE'}</span>
            </div>
            <div className="info-item">
              <span className="label">Resolution:</span>
              <span className="value">1920x1080</span>
            </div>
            <div className="info-item">
              <span className="label">Frame Rate:</span>
              <span className="value">30 FPS</span>
            </div>
            <div className="info-item">
              <span className="label">Recording:</span>
              <span className="value">Enabled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Camera Grid */}
      <section className="dashboard-section">
        <h2 className="section-title">📷 Available Cameras ({cameras.length})</h2>
        <div className="cameras-grid">
          {cameras.map((camera, idx) => (
            <button
              key={camera.id}
              onClick={() => setSelectedCamera(idx)}
              className={`camera-card ${selectedCamera === idx ? 'active' : ''}`}
            >
              <div 
                className="camera-thumbnail"
                style={{ backgroundColor: generateMockFeedContent(idx).color }}
              >
                <div className="thumbnail-overlay">
                  <div className="camera-number">CAM {idx + 1}</div>
                  <div className="status-indicator">
                    <span className="status-dot online"></span>
                  </div>
                </div>
              </div>
              <div className="camera-label">
                <h4>{camera.name}</h4>
                <p>{camera.location}</p>
              </div>
              <div className="camera-activity">
                <span>Activity: {cameraFeeds[idx]?.activityLevel || 0}%</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* System Status */}
      <section className="dashboard-section">
        <h2 className="section-title">🎚️ System Status</h2>
        <div className="status-cards-grid">
          <div className="status-card">
            <div className="status-icon">📹</div>
            <h3>Total Cameras</h3>
            <p className="big-number">{cameras.length}</p>
            <p className="status-text">All cameras online</p>
          </div>
          <div className="status-card">
            <div className="status-icon">✅</div>
            <h3>System Health</h3>
            <p className="big-number">100%</p>
            <p className="status-text">All systems operational</p>
          </div>
          <div className="status-card">
            <div className="status-icon">💾</div>
            <h3>Storage</h3>
            <p className="big-number">65%</p>
            <p className="status-text">Recording continues</p>
          </div>
          <div className="status-card">
            <div className="status-icon">🔔</div>
            <h3>Alerts</h3>
            <p className="big-number">0</p>
            <p className="status-text">No active alerts</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        💡 CCTV system records 24/7 for campus safety and security
      </footer>
    </div>
  );
}
