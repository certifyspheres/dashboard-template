import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Bell, Search, Settings, Palette, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = ({ toggleSidebar }) => {
  const { isDark, toggleTheme, colorTheme, changeColorTheme } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef(null);

  const colors = [
    { name: 'blue', class: 'bg-blue-500', label: 'Blue' },
    { name: 'green', class: 'bg-green-500', label: 'Green' },
    { name: 'purple', class: 'bg-purple-500', label: 'Purple' },
    { name: 'orange', class: 'bg-orange-500', label: 'Orange' },
    { name: 'pink', class: 'bg-pink-500', label: 'Pink' },
  ];

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md h-16 fixed top-0 right-0 left-0 lg:left-64 z-30">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Search Bar */}
        <div className="flex items-center flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Color Theme Picker */}
          <div className="relative" ref={colorPickerRef}>
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="Change Color Theme"
            >
              <Palette className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            
            {showColorPicker && (
              <div className="absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 min-w-[200px]">
                <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Choose Color Theme</p>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        changeColorTheme(color.name);
                        setShowColorPicker(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        colorTheme === color.name ? 'bg-gray-100 dark:bg-gray-700' : ''
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full ${color.class} ${
                        colorTheme === color.name ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-offset-gray-800' : ''
                      }`} />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{color.label}</span>
                      {colorTheme === color.name && (
                        <span className="ml-auto text-primary">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="flex items-center space-x-3 ml-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
