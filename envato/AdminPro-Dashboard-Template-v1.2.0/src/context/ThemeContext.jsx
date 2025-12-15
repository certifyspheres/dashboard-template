import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [colorTheme, setColorTheme] = useState('blue');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('colorTheme');
    
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedColor) {
      setColorTheme(savedColor);
      document.documentElement.setAttribute('data-theme', savedColor);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const changeColorTheme = (color) => {
    setColorTheme(color);
    document.documentElement.setAttribute('data-theme', color);
    localStorage.setItem('colorTheme', color);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colorTheme, changeColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
