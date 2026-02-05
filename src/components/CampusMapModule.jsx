import React from 'react';

/**
 * Campus Map Module Component
 * Displays the interactive campus map with building locations
 */
export default function CampusMapModule() {
  return (
    <div className="module-container">
      <div className="module-header">
        <h1>🗺️ Campus Map</h1>
        <p>Interactive campus navigation and facility locations</p>
      </div>

      <div className="campus-map-content">
        {/* Map Container */}
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-placeholder-content">
              <h2>Campus Map</h2>
              <p>Add your campus map image here</p>
              <div className="map-image-area">
                {/* Replace this with your actual campus map image */}
                <img 
                  src="public/image.png" 
                  alt="Campus Map"
                  className="map-image"
                />
              </div>
              <p className="map-instruction">
                📍 To add your campus map: Replace the image src in CampusMapModule.jsx with your map image URL or local path
              </p>
            </div>
          </div>
        </div>

        </div>
      </div>
    
  );
}
