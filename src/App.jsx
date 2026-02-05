import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ClassroomModule from './components/ClassroomModule';
import ParkingModule from './components/ParkingModule';
import DepartmentModule from './components/DepartmentModule';
import SecurityModule from './components/SecurityModule';
import CampusMapModule from './components/CampusMapModule';
import './App.css';

/**
 * Main App Component
 * Smart Campus IoT Dashboard with modular architecture
 */
export default function App() {
  const [activeModule, setActiveModule] = useState('classroom');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleModuleChange = (moduleId) => {
    setActiveModule(moduleId);
  };

  // Render active module
  const renderModule = () => {
    switch (activeModule) {
      case 'classroom':
        return <ClassroomModule />;
      case 'parking':
        return <ParkingModule />;
      case 'department':
        return <DepartmentModule />;
      case 'security':
        return <SecurityModule />;
      case 'campus-map':
        return <CampusMapModule />;
      default:
        return <ClassroomModule />;
    }
  };

  return (
    <>
      <Navbar onMenuToggle={handleMenuToggle} sidebarOpen={sidebarOpen} />
      <div className="app-layout">
        <Sidebar
          activeModule={activeModule}
          onModuleChange={handleModuleChange}
          isOpen={sidebarOpen}
          onToggle={(value) => setSidebarOpen(value)}
        />
        <main className="main-content">
          {renderModule()}
        </main>
      </div>
    </>
  );
}
