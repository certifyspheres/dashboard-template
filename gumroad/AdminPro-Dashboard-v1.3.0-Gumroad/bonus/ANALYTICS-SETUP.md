# 📊 Google Analytics Setup Guide

## 🎯 Overview

AdminPro comes with Google Analytics pre-configured. Here's how to set it up with your own tracking ID.

## 🔧 Setup Steps

### 1. Get Your Google Analytics ID
1. Go to https://analytics.google.com
2. Create a new property for your website
3. Copy your Measurement ID (starts with G-)

### 2. Update AdminPro
Edit `source-code/index.html` and replace the tracking ID:

```html
<!-- Replace G-TJ5BYVZREG with your ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'YOUR-GA-ID');
</script>
```

### 3. What's Tracked
- Page views on all routes
- User login events (with user type)
- Theme changes (color and dark/light mode)
- Navigation clicks
- Custom events you add

### 4. Custom Event Tracking
Use the built-in analytics functions:

```javascript
import { trackEvent } from '../utils/analytics';

// Track custom events
trackEvent('button_click', 'ui', 'header_cta');
```

## 📈 Analytics Dashboard Setup

### Key Metrics to Monitor
1. **User Engagement**
   - Session duration
   - Pages per session
   - Bounce rate

2. **Feature Usage**
   - Theme preferences
   - Most visited pages
   - User flows

3. **Demographics**
   - Device types
   - Geographic data
   - User behavior patterns

### Custom Goals
Set up goals in Google Analytics for:
- User registration
- Feature adoption
- Time spent on key pages
- Conversion events

## 🎯 Business Insights

Track what matters for your business:
- Which features users engage with most
- Popular user journeys
- Drop-off points
- Performance metrics

**Analytics help you make data-driven decisions! 📊**
