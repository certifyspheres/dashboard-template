import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Table2, BarChart3, User, LogOut } from 'lucide-react';

const Sidebar = ({ setIsAuthenticated }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/tables', icon: Table2, label: 'Tables' },
    { path: '/charts', icon: BarChart3, label: 'Charts' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">AdminPro</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                isActive ? 'bg-primary text-white hover:bg-primary' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-4"
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
