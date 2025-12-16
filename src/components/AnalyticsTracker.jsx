import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pageTitle = getPageTitle(location.pathname);
    trackPageView(pageTitle, window.location.href);
  }, [location]);

  return null; // This component doesn't render anything
};

// Helper function to get page titles
const getPageTitle = (pathname) => {
  const titles = {
    '/': 'Landing Page',
    '/login': 'Login',
    '/register': 'Register',
    '/dashboard': 'Dashboard',
    '/tables': 'Tables',
    '/charts': 'Charts',
    '/profile': 'Profile',
    '/privacy': 'Privacy Policy',
    '/terms': 'Terms of Service'
  };
  
  return titles[pathname] || 'Unknown Page';
};

export default AnalyticsTracker;