// Google Analytics utility functions
// Usage: import { trackEvent, trackPageView } from '../utils/analytics';

/**
 * Track custom events in Google Analytics
 * @param {string} action - The action being tracked (e.g., 'login', 'theme_change')
 * @param {string} category - The category of the event (e.g., 'user', 'ui')
 * @param {string} label - Optional label for the event
 * @param {number} value - Optional numeric value
 */
export const trackEvent = (action, category = 'general', label = '', value = null) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventData = {
      event_category: category,
      event_label: label,
    };
    
    if (value !== null) {
      eventData.value = value;
    }
    
    window.gtag('event', action, eventData);
    console.log('Analytics Event:', { action, category, label, value });
  }
};

/**
 * Track page views manually (useful for SPA routing)
 * @param {string} page_title - The title of the page
 * @param {string} page_location - The URL of the page
 */
export const trackPageView = (page_title, page_location = window.location.href) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-TJ5BYVZREG', {
      page_title: page_title,
      page_location: page_location,
    });
    console.log('Analytics Page View:', { page_title, page_location });
  }
};

/**
 * Track user login events
 * @param {string} method - Login method (e.g., 'email', 'demo')
 * @param {string} userType - Type of user (e.g., 'admin', 'demo', 'user')
 */
export const trackLogin = (method = 'email', userType = 'user') => {
  trackEvent('login', 'authentication', `${method}_${userType}`);
};

/**
 * Track theme changes
 * @param {string} theme - The theme name (e.g., 'blue', 'dark')
 * @param {string} type - Theme type ('color' or 'mode')
 */
export const trackThemeChange = (theme, type = 'color') => {
  trackEvent('theme_change', 'ui', `${type}_${theme}`);
};

/**
 * Track navigation events
 * @param {string} page - The page being navigated to
 * @param {string} source - Where the navigation came from
 */
export const trackNavigation = (page, source = 'sidebar') => {
  trackEvent('navigate', 'navigation', `${source}_to_${page}`);
};

/**
 * Track feature usage
 * @param {string} feature - The feature being used
 * @param {string} action - The specific action taken
 */
export const trackFeatureUsage = (feature, action) => {
  trackEvent('feature_use', 'engagement', `${feature}_${action}`);
};

// Export gtag function for direct access if needed
export const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};