import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, setIsAuthenticated }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar 
        setIsAuthenticated={setIsAuthenticated} 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <Header toggleSidebar={toggleSidebar} />
      
      <main className="lg:ml-64 pt-16 p-4 lg:p-8 min-h-screen">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
