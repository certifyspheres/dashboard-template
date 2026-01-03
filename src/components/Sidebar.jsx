import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Table2, BarChart3, User, LogOut, X, Users, Settings, TrendingUp } from 'lucide-react';
import { trackNavigation, trackEvent } from '../utils/analytics';

const Sidebar = ({ setIsAuthenticated, isOpen, setIsOpen, isCollapsed }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/analytics', icon: TrendingUp, label: 'Analytics' },
    { path: '/users', icon: Users, label: 'Users' },
    { path: '/tables', icon: Table2, label: 'Tables' },
    { path: '/charts', icon: BarChart3, label: 'Charts' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const handleLogout = () => {
    // Track logout event
    trackEvent('logout', 'authentication', 'sidebar_logout');
    
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  const handleLinkClick = (path) => {
    // Track navigation
    const pageName = path.replace('/', '') || 'dashboard';
    trackNavigation(pageName, 'sidebar');
    
    // Close mobile menu when link is clicked
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg z-50 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-20' : 'w-64'}
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 lg:justify-center">
          {!isCollapsed && (
            <h1 className="text-2xl font-bold text-primary">AdminPro</h1>
          )}
          {isCollapsed && (
            <h1 className="text-2xl font-bold text-primary">AP</h1>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
        
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleLinkClick(item.path)}
                className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group relative ${
                  isActive ? 'bg-primary text-white hover:bg-primary' : ''
                }`}
                title={isCollapsed ? item.label : ''}
              >
                <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
          
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-4 group relative"
            title={isCollapsed ? 'Logout' : ''}
          >
            <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
            {!isCollapsed && <span>Logout</span>}
            
            {/* Tooltip for collapsed state */}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                Logout
              </div>
            )}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
