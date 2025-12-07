import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, setIsAuthenticated }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar setIsAuthenticated={setIsAuthenticated} />
      <Header />
      
      <main className="ml-64 pt-16 p-8 min-h-screen">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
