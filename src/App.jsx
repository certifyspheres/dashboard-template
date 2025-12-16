import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';
import { ThemeProvider } from './context/ThemeContext';
import AnalyticsTracker from './components/AnalyticsTracker';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Profile from './pages/Profile';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(auth === 'true');
  }, []);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <ThemeProvider>
      <Router>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<ProtectedRoute><Privacy setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
          <Route path="/terms" element={<ProtectedRoute><Terms setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
          <Route path="/tables" element={<ProtectedRoute><Tables setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
          <Route path="/charts" element={<ProtectedRoute><Charts setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
