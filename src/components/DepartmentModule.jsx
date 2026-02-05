import React, { useState } from 'react';

/**
 * Department Information Module
 * Displays staff, HOD, and labs information for each campus department
 */
export default function DepartmentModule() {
  const [expandedDept, setExpandedDept] = useState('cse');

  const departments = [
    {
      id: 'cse',
      name: 'Computer Science & Engineering',
      icon: '💻',
      hod: {
        name: 'Dr. Faculty Member 1',
        qualification: 'Ph.D. in Computer Science',
        email: 'hod.cse@campus.edu',
        phone: '+91-XXXX-XXXX-10',
      },
      staff: [
        { name: 'Prof. Faculty Member 2', qualification: 'M.Tech (AI/ML)', specialization: 'Artificial Intelligence' },
        { name: 'Prof. Faculty Member 3', qualification: 'M.Tech (Web Dev)', specialization: 'Web Technologies' },
        { name: 'Prof. Faculty Member 4', qualification: 'M.Tech (Cloud)', specialization: 'Cloud Computing' },
        { name: 'Prof. Faculty Member 5', qualification: 'M.Tech (Security)', specialization: 'Cybersecurity' },
      ],
      labs: [
        { name: 'AI & ML Lab', capacity: 40, equipment: 'GPUs, TensorFlow, PyTorch' },
        { name: 'Web Development Lab', capacity: 50, equipment: 'Workstations, Servers' },
        { name: 'Cloud Computing Lab', capacity: 35, equipment: 'AWS, Azure, GCP Services' },
        { name: 'Cybersecurity Lab', capacity: 30, equipment: 'Firewalls, Penetration Testing Tools' },
      ],
    },
    {
      id: 'ece',
      name: 'Electronics & Communication Engineering',
      icon: '📡',
      hod: {
        name: 'Dr. Faculty Member 6',
        qualification: 'Ph.D. in Electronics Engineering',
        email: 'hod.ece@campus.edu',
        phone: '+91-XXXX-XXXX-11',
      },
      staff: [
        { name: 'Prof. Faculty Member 7', qualification: 'M.Tech (VLSI)', specialization: 'VLSI Design' },
        { name: 'Prof. Faculty Member 8', qualification: 'M.Tech (Communication)', specialization: 'Signal Processing' },
        { name: 'Prof. Faculty Member 9', qualification: 'M.Tech (Embedded)', specialization: 'Embedded Systems' },
        { name: 'Prof. Faculty Member 10', qualification: 'M.Tech (IoT)', specialization: 'Internet of Things' },
      ],
      labs: [
        { name: 'VLSI Lab', capacity: 30, equipment: 'Cadence Tools, Simulation Software' },
        { name: 'Signal Processing Lab', capacity: 35, equipment: 'MATLAB, DSP Kits' },
        { name: 'Embedded Systems Lab', capacity: 40, equipment: 'Microcontrollers, Arduino, PIC' },
        { name: 'IoT Lab', capacity: 25, equipment: 'Sensors, Raspberry Pi, Arduino' },
      ],
    },
    {
      id: 'me',
      name: 'Mechanical Engineering',
      icon: '⚙️',
      hod: {
        name: 'Dr. Faculty Member 11',
        qualification: 'Ph.D. in Mechanical Engineering',
        email: 'hod.me@campus.edu',
        phone: '+91-XXXX-XXXX-12',
      },
      staff: [
        { name: 'Prof. Faculty Member 12', qualification: 'M.Tech (Thermal)', specialization: 'Thermal Engineering' },
        { name: 'Prof. Faculty Member 13', qualification: 'M.Tech (CAD/CAM)', specialization: 'Manufacturing' },
        { name: 'Prof. Faculty Member 14', qualification: 'M.Tech (Robotics)', specialization: 'Robotics & Automation' },
        { name: 'Prof. Faculty Member 15', qualification: 'M.Tech (Fluid)', specialization: 'Fluid Mechanics' },
      ],
      labs: [
        { name: 'CAD/CAM Lab', capacity: 25, equipment: 'CATIA, NX, Fusion 360' },
        { name: 'Thermal Lab', capacity: 20, equipment: 'Heat Exchangers, Testing Equipment' },
        { name: 'Robotics Lab', capacity: 30, equipment: 'Robotic Arms, Simulators' },
        { name: 'Material Testing Lab', capacity: 15, equipment: 'UTM, Hardness Tester' },
      ],
    },
    {
      id: 'ce',
      name: 'Civil Engineering',
      icon: '🏗️',
      hod: {
        name: 'Dr. Faculty Member 16',
        qualification: 'Ph.D. in Structural Engineering',
        email: 'hod.ce@campus.edu',
        phone: '+91-XXXX-XXXX-13',
      },
      staff: [
        { name: 'Prof. Faculty Member 17', qualification: 'M.Tech (Structural)', specialization: 'Structural Design' },
        { name: 'Prof. Faculty Member 18', qualification: 'M.Tech (Water)', specialization: 'Water Resources' },
        { name: 'Prof. Faculty Member 19', qualification: 'M.Tech (Geotechnical)', specialization: 'Geotechnical Engineering' },
        { name: 'Prof. Faculty Member 20', qualification: 'M.Tech (Transportation)', specialization: 'Transportation Engineering' },
      ],
      labs: [
        { name: 'Structural Testing Lab', capacity: 20, equipment: 'Load Testing Frames, Strain Gauges' },
        { name: 'Soil Mechanics Lab', capacity: 25, equipment: 'Soil Testing Equipment, Permeability Apparatus' },
        { name: 'CAD Lab', capacity: 30, equipment: 'AutoCAD, Revit, BIM Tools' },
        { name: 'Concrete Lab', capacity: 15, equipment: 'Compression Tester, Curing Tank' },
      ],
    },
  ];

  const currentDept = departments.find(d => d.id === expandedDept);

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">🏛️ Department Information</h1>
        <p className="dashboard-subtitle">Staff, HOD, and laboratory facilities across campus</p>
        <div className="info-box">
          <p>
            <strong>Find Information About:</strong> Department heads, faculty members, and state-of-the-art laboratories 
            available for student projects and research.
          </p>
        </div>
      </header>

      {/* Department Selection */}
      <section className="dashboard-section">
        <h2 className="section-title">📚 Select Department</h2>
        <div className="department-grid">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setExpandedDept(dept.id)}
              className={`dept-card ${expandedDept === dept.id ? 'active' : ''}`}
            >
              <div className="dept-icon">{dept.icon}</div>
              <div className="dept-name">{dept.name}</div>
            </button>
          ))}
        </div>
      </section>

      {/* HOD Information */}
      {currentDept && (
        <section className="dashboard-section">
          <h2 className="section-title">👔 Head of Department</h2>
          <div className="hod-card">
            <div className="hod-header">
              <div className="hod-avatar">👨‍🎓</div>
              <div className="hod-info">
                <h3>{currentDept.hod.name}</h3>
                <p className="qualification">{currentDept.hod.qualification}</p>
              </div>
            </div>
            <div className="hod-details">
              <div className="detail-item">
                <span className="label">📧 Email:</span>
                <span className="value">{currentDept.hod.email}</span>
              </div>
              <div className="detail-item">
                <span className="label">📱 Phone:</span>
                <span className="value">{currentDept.hod.phone}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Faculty Staff */}
      {currentDept && (
        <section className="dashboard-section">
          <h2 className="section-title">👨‍🏫 Faculty Members</h2>
          <div className="staff-grid">
            {currentDept.staff.map((staff, idx) => (
              <div key={idx} className="staff-card">
                <div className="staff-avatar">👨‍🏫</div>
                <h4>{staff.name}</h4>
                <p className="qualification">{staff.qualification}</p>
                <p className="specialization">Specialization: {staff.specialization}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Laboratories */}
      {currentDept && (
        <section className="dashboard-section">
          <h2 className="section-title">🔬 Laboratories</h2>
          <div className="labs-grid">
            {currentDept.labs.map((lab, idx) => (
              <div key={idx} className="lab-card">
                <div className="lab-icon">🔬</div>
                <h4>{lab.name}</h4>
                <div className="lab-detail">
                  <span className="label">👥 Capacity:</span>
                  <span className="value">{lab.capacity} students</span>
                </div>
                <div className="lab-detail">
                  <span className="label">🖥️ Equipment:</span>
                  <span className="value">{lab.equipment}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="dashboard-footer">
        💡 Contact departments for lab bookings, research opportunities, or queries
      </footer>
    </div>
  );
}
