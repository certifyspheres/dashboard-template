import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { trackEvent } from '../utils/analytics';

const Layout = ({ children, setIsAuthenticated }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // Desktop sidebar collapse state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    // Track sidebar collapse/expand
    trackEvent('sidebar_toggle', 'ui', sidebarCollapsed ? 'expand' : 'collapse');
  };

  // Close sidebar when clicking outside on mobile
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar 
        setIsAuthenticated={setIsAuthenticated} 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        isCollapsed={sidebarCollapsed}
        onClose={closeSidebar}
      />
      
      {/* Main content area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
      }`}>
        <Header 
          toggleSidebar={toggleSidebar} 
          toggleSidebarCollapse={toggleSidebarCollapse}
          sidebarCollapsed={sidebarCollapsed}
        />
        
        {/* Main content */}
        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>
        
        {/* Footer */}
        <Footer sidebarCollapsed={sidebarCollapsed} />
      </div>
    </div>
  );
};

export default Layout;
