#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const PACKAGE_NAME = 'AdminPro-Dashboard';
const VERSION = '1.3.0';
const PACKAGE_DIR = `${PACKAGE_NAME}-v${VERSION}-Gumroad`;
const ZIP_NAME = `${PACKAGE_NAME}-v${VERSION}-Gumroad.zip`;

console.log('🚀 AdminPro Dashboard - Gumroad Package Creator (Node.js)');
console.log('=========================================================\n');

// Change to parent directory
const ROOT_DIR = path.join(__dirname, '..');
process.chdir(ROOT_DIR);

// Clean up previous builds
const gumroadPackageDir = path.join('gumroad', PACKAGE_DIR);
const gumroadZipPath = path.join('gumroad', ZIP_NAME);

if (fs.existsSync(gumroadPackageDir)) {
    console.log('🧹 Cleaning up previous build...');
    execSync(`rm -rf "${gumroadPackageDir}"`);
}

if (fs.existsSync(gumroadZipPath)) {
    execSync(`rm -f "${gumroadZipPath}"`);
}

// Create package structure
console.log('📦 Creating Gumroad package structure...');
fs.mkdirSync(gumroadPackageDir, { recursive: true });
fs.mkdirSync(path.join(gumroadPackageDir, 'source-code'), { recursive: true });
fs.mkdirSync(path.join(gumroadPackageDir, 'documentation'), { recursive: true });
fs.mkdirSync(path.join(gumroadPackageDir, 'screenshots'), { recursive: true });
fs.mkdirSync(path.join(gumroadPackageDir, 'bonus'), { recursive: true });

// Copy source code
console.log('📋 Copying source code...');
const sourceFiles = [
    'src/',
    'package.json',
    'vite.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'index.html',
    '.gitignore'
];

sourceFiles.forEach(file => {
    const sourcePath = file;
    const destPath = path.join(gumroadPackageDir, 'source-code', file);
    
    if (fs.existsSync(sourcePath)) {
        if (fs.statSync(sourcePath).isDirectory()) {
            execSync(`cp -r "${sourcePath}" "${path.dirname(destPath)}/"`);
        } else {
            fs.copyFileSync(sourcePath, destPath);
        }
        console.log(`   ✅ ${file}`);
    }
});

// Copy screenshots
if (fs.existsSync('docs/screenshots')) {
    console.log('📸 Copying screenshots...');
    execSync(`cp -r docs/screenshots/* "${path.join(gumroadPackageDir, 'screenshots')}/" 2>/dev/null || true`);
}

console.log('📚 Creating documentation files...');

// Create Installation Guide
const installationContent = `# 📦 Installation Guide - AdminPro Dashboard

## 🎯 Requirements

- **Node.js:** Version 16 or higher
- **npm:** Version 7 or higher (comes with Node.js)
- **Modern Browser:** Chrome, Firefox, Safari, Edge

## 🚀 Step-by-Step Installation

### 1. Check Node.js Installation
\`\`\`bash
node --version
npm --version
\`\`\`

If not installed, download from: https://nodejs.org/

### 2. Navigate to Source Code
\`\`\`bash
cd source-code
\`\`\`

### 3. Install Dependencies
\`\`\`bash
npm install
\`\`\`

This will install all required packages:
- React 18
- Vite
- Tailwind CSS
- Recharts
- React Router
- Lucide Icons

### 4. Start Development Server
\`\`\`bash
npm run dev
\`\`\`

You should see:
\`\`\`
Local:   http://localhost:5173/
Network: http://192.168.x.x:5173/
\`\`\`

### 5. Open in Browser
Navigate to \`http://localhost:5173\`

### 6. Login
Use any demo account:
- admin@admin.com / admin123
- demo@demo.com / demo123
- user@user.com / user123

## 🎨 Available Commands

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## 🔧 Troubleshooting

### Port Already in Use
\`\`\`bash
npm run dev -- --port 3000
\`\`\`

### Dependencies Issues
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Build Errors
Make sure you're using Node.js 16+:
\`\`\`bash
node --version
\`\`\`

## 📞 Support

If you need help:
- Email: support@certifysphere.com
- Check FAQ.md for common questions

**Installation complete! Time to build something amazing! 🎉**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'documentation', 'INSTALLATION.md'), installationContent);

// Create Customization Guide
const customizationContent = `# 🎨 Customization Guide - AdminPro Dashboard

## 🎯 Overview

AdminPro is built to be easily customizable. This guide shows you how to make it your own!

## 🎨 Changing Colors

### Method 1: Use Built-in Themes
The easiest way! Just click the palette icon (🎨) in the header and choose from 5 themes.

### Method 2: Create Custom Colors
Edit \`src/index.css\` and modify the CSS variables:

\`\`\`css
:root {
  --primary: #your-color;
  --primary-dark: #your-darker-color;
}

[data-theme="custom"] {
  --primary: #your-custom-color;
  --primary-dark: #your-custom-darker-color;
}
\`\`\`

Then add your theme to the theme picker in \`src/components/Header.jsx\`.

## 🏠 Adding New Pages

### Step 1: Create Page Component
Create a new file in \`src/pages/YourPage.jsx\`:

\`\`\`jsx
import React from 'react';
import Layout from '../components/Layout';

const YourPage = ({ setIsAuthenticated }) => {
  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Your Page
        </h1>
        <p>Your content here...</p>
      </div>
    </Layout>
  );
};

export default YourPage;
\`\`\`

### Step 2: Add Route
In \`src/App.jsx\`, add your route:

\`\`\`jsx
import YourPage from './pages/YourPage';

// Add to Routes
<Route path="/your-page" element={
  <ProtectedRoute>
    <YourPage setIsAuthenticated={setIsAuthenticated} />
  </ProtectedRoute>
} />
\`\`\`

### Step 3: Add to Navigation
In \`src/components/Sidebar.jsx\`, add to menuItems:

\`\`\`jsx
const menuItems = [
  // existing items...
  { path: '/your-page', icon: YourIcon, label: 'Your Page' },
];
\`\`\`

## 🖼️ Changing Logo and Branding

### Sidebar Logo
Edit \`src/components/Sidebar.jsx\`:
\`\`\`jsx
<h1 className="text-2xl font-bold text-primary">YourBrand</h1>
\`\`\`

### Page Titles
Edit \`index.html\`:
\`\`\`html
<title>Your Dashboard - Your Company</title>
\`\`\`

### Footer
Edit \`src/components/Footer.jsx\` to update company information.

## 📊 Adding New Charts

AdminPro uses Recharts. Add new charts in \`src/pages/Charts.jsx\`:

\`\`\`jsx
import { YourChartType } from 'recharts';

// Add your chart component
<YourChartType data={yourData} />
\`\`\`

## 🗃️ Connecting Real Data

### Replace Demo Data
1. Find demo data in page components
2. Replace with API calls or your data source
3. Update data structures as needed

### Example API Integration
\`\`\`jsx
import { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/your-endpoint')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    // Your component using real data
  );
};
\`\`\`

## 🔐 Authentication

### Replace Demo Authentication
Edit \`src/pages/Login.jsx\` to connect to your auth system:

\`\`\`jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      navigate('/dashboard');
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
};
\`\`\`

## 📞 Need Help?

- Check existing components for examples
- Review Tailwind CSS documentation
- Email: support@certifysphere.com

**Happy customizing! 🎨**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'documentation', 'CUSTOMIZATION.md'), customizationContent);

// Create Theme Guide
const themeGuideContent = `# 🎨 Theme Guide - AdminPro Dashboard

## 🌈 Built-in Themes

AdminPro comes with 5 beautiful color themes, each available in light and dark mode:

### 1. 🔵 Blue Theme (Default)
- **Primary:** Professional blue
- **Use Case:** Corporate, business applications
- **Mood:** Trustworthy, professional

### 2. 🟢 Green Theme
- **Primary:** Nature green
- **Use Case:** Environmental, health, finance apps
- **Mood:** Growth, harmony, success

### 3. 🟣 Purple Theme
- **Primary:** Creative purple
- **Use Case:** Creative agencies, design tools
- **Mood:** Creative, innovative, luxury

### 4. 🟠 Orange Theme
- **Primary:** Energetic orange
- **Use Case:** Marketing, social media, sports
- **Mood:** Energetic, friendly, enthusiastic

### 5. 🩷 Pink Theme
- **Primary:** Modern pink
- **Use Case:** Fashion, beauty, lifestyle apps
- **Mood:** Modern, playful, approachable

## 🌙 Dark Mode

Each theme has a beautiful dark mode variant:
- Automatic color adjustments
- Proper contrast ratios
- Eye-friendly for night use
- Consistent across all components

## 🎛️ How to Switch Themes

### For Users
1. Click the palette icon (🎨) in the top-right corner
2. Choose from 5 color themes
3. Click the sun/moon icon (☀️/🌙) for dark/light mode
4. Settings are automatically saved

### For Developers
Themes are controlled by the \`ThemeContext\` in \`src/context/ThemeContext.jsx\`.

## 🔧 Technical Implementation

### CSS Variables
Themes use CSS custom properties defined in \`src/index.css\`:

\`\`\`css
:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --primary-light: #3b82f6;
}

[data-theme="green"] {
  --primary: #10b981;
  --primary-dark: #059669;
  --primary-light: #34d399;
}
\`\`\`

### Theme Context
The theme system uses React Context for state management:

\`\`\`jsx
const { isDark, toggleTheme, colorTheme, changeColorTheme } = useTheme();
\`\`\`

### Tailwind Integration
Themes work with Tailwind's \`primary\` color:

\`\`\`jsx
<div className="bg-primary text-white">
  Themed content
</div>
\`\`\`

## 🎨 Creating Custom Themes

### Step 1: Add CSS Variables
In \`src/index.css\`, add your theme:

\`\`\`css
[data-theme="custom"] {
  --primary: #your-color;
  --primary-dark: #your-darker-color;
  --primary-light: #your-lighter-color;
}
\`\`\`

### Step 2: Update Theme Picker
In \`src/components/Header.jsx\`, add to the colors array:

\`\`\`jsx
const colors = [
  // existing colors...
  { name: 'custom', class: 'bg-your-color', label: 'Custom' },
];
\`\`\`

## 📞 Theme Support

Common theme-related questions:
- **Q:** How to add more themes?
- **A:** Follow the custom theme creation steps above

- **Q:** Can I remove themes?
- **A:** Yes, remove from the colors array in Header.jsx

- **Q:** How to set a default theme?
- **A:** Modify the initial state in ThemeContext.jsx

**Need help with themes? Email: support@certifysphere.com**

**Make it your own with AdminPro themes! 🎨**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'documentation', 'THEME-GUIDE.md'), themeGuideContent);

// Create Deployment Guide
const deploymentContent = `# 🚀 Deployment Guide - AdminPro Dashboard

## 🎯 Overview

AdminPro is built with Vite and can be deployed to any static hosting service. Here are the most popular options:

## 🏗️ Building for Production

First, build your project:

\`\`\`bash
cd source-code
npm run build
\`\`\`

This creates a \`dist\` folder with optimized files ready for deployment.

## 🌐 Deployment Options

### 1. 🔷 Vercel (Recommended)

**Why Vercel?**
- Free tier available
- Automatic deployments from Git
- Built-in CDN
- Perfect for React apps

**Steps:**
1. Push your code to GitHub
2. Connect GitHub to Vercel
3. Deploy automatically on every push

**Manual Deployment:**
\`\`\`bash
npm install -g vercel
vercel --prod
\`\`\`

### 2. 🟠 Netlify

**Why Netlify?**
- Drag-and-drop deployment
- Form handling
- Serverless functions
- Great for static sites

**Steps:**
1. Build your project: \`npm run build\`
2. Drag the \`dist\` folder to Netlify
3. Your site is live!

**Git Integration:**
1. Connect your GitHub repository
2. Set build command: \`npm run build\`
3. Set publish directory: \`dist\`

### 3. 🔵 GitHub Pages

**Why GitHub Pages?**
- Free hosting
- Direct from GitHub repository
- Custom domains supported

**Steps:**
1. Install gh-pages: \`npm install --save-dev gh-pages\`
2. Add to package.json:
\`\`\`json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/your-repo"
}
\`\`\`
3. Deploy: \`npm run deploy\`

## ⚙️ Environment Variables

For production deployment, you may need environment variables:

### Create .env file:
\`\`\`
VITE_API_URL=https://your-api.com
VITE_ANALYTICS_ID=your-analytics-id
VITE_APP_NAME=Your App Name
\`\`\`

### Platform-specific setup:

**Vercel:**
Add in Vercel dashboard under Settings > Environment Variables

**Netlify:**
Add in Netlify dashboard under Site settings > Environment variables

## 🔒 Security Considerations

### HTTPS
- Always use HTTPS in production
- Most platforms provide free SSL certificates
- Update any HTTP links to HTTPS

### API Keys
- Never commit API keys to Git
- Use environment variables
- Rotate keys regularly

## 📊 Performance Optimization

### Before Deployment
1. **Optimize Images:** Use WebP format when possible
2. **Minimize Bundle:** Remove unused dependencies
3. **Enable Compression:** Gzip/Brotli compression
4. **CDN Setup:** Use a CDN for static assets

### Vite Optimizations
Vite automatically:
- ✅ Minifies JavaScript and CSS
- ✅ Optimizes images
- ✅ Tree-shakes unused code
- ✅ Splits code for better caching

## 📞 Deployment Support

Need help with deployment?
- Email: support@certifysphere.com
- Check platform documentation
- Review build logs for errors

**Your AdminPro dashboard is ready for the world! 🌍🚀**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'documentation', 'DEPLOYMENT.md'), deploymentContent);

// Create FAQ
const faqContent = `# ❓ Frequently Asked Questions - AdminPro Dashboard

## 🚀 Getting Started

### Q: How long does it take to set up AdminPro?
**A:** About 5 minutes! Just extract files, run \`npm install\`, then \`npm run dev\`. You'll be up and running immediately.

### Q: Do I need React experience to use AdminPro?
**A:** Basic React knowledge is helpful, but not required for simple customizations. The documentation guides you through common changes.

### Q: What's included in the download?
**A:** Complete source code, documentation, screenshots, demo accounts, and bonus materials. Everything you need to get started.

## 🎨 Themes and Customization

### Q: How many themes are included?
**A:** 5 color themes (Blue, Green, Purple, Orange, Pink) plus dark mode for each = 10 total combinations!

### Q: Can I create custom themes?
**A:** Yes! The documentation shows exactly how to add your own color themes and integrate them with the theme picker.

### Q: Is it easy to change the logo and branding?
**A:** Absolutely! Just edit a few text strings and replace images. No complex configuration needed.

## 🔐 Authentication

### Q: Are the demo accounts real?
**A:** They're functional demo accounts for testing. You can login and explore all features, but they're not connected to a real backend.

### Q: How do I connect to my own authentication system?
**A:** The customization guide shows how to replace the demo authentication with your own API calls.

### Q: Can I add more user roles?
**A:** Yes! The system is flexible and you can extend it with additional user types and permissions.

## 📱 Responsive Design

### Q: Does it work on mobile devices?
**A:** Yes! AdminPro is mobile-first with a hamburger menu, touch-friendly interactions, and responsive layouts.

### Q: What screen sizes are supported?
**A:** All screen sizes from phones (320px) to large desktops (1920px+). It adapts automatically.

### Q: Can I customize the mobile menu?
**A:** Yes! The mobile navigation is fully customizable in the Sidebar component.

## 🛠️ Technical Questions

### Q: What technologies does AdminPro use?
**A:** React 18, Vite, Tailwind CSS, React Router, Recharts, and Lucide Icons. All modern, well-supported technologies.

### Q: Can I add TypeScript?
**A:** Yes! Vite supports TypeScript out of the box. Just rename files to \`.tsx\` and add type definitions.

### Q: How do I add new pages?
**A:** Create a new component in \`src/pages/\`, add a route in \`App.jsx\`, and add navigation in \`Sidebar.jsx\`. The documentation has step-by-step instructions.

## 📊 Data and Charts

### Q: Can I connect to real data?
**A:** Yes! Replace the demo data with API calls or your data source. The components are designed to work with any data.

### Q: What chart types are included?
**A:** Line charts, bar charts, area charts, pie charts, and radar charts. All interactive and responsive.

### Q: Can I add more chart types?
**A:** Yes! AdminPro uses Recharts, which supports many chart types. Just import and use them.

## 🚀 Deployment

### Q: Where can I deploy AdminPro?
**A:** Anywhere! Vercel, Netlify, GitHub Pages, AWS, Firebase, or any static hosting service. The deployment guide covers all options.

### Q: Is it SEO-friendly?
**A:** Yes! It's a single-page application that can be optimized for SEO with proper meta tags and server-side rendering if needed.

### Q: How do I set up a custom domain?
**A:** The deployment guide shows how to configure custom domains on all major hosting platforms.

## 💰 Licensing and Usage

### Q: Can I use AdminPro for commercial projects?
**A:** Yes! The license allows unlimited personal and commercial use.

### Q: Can I sell websites built with AdminPro?
**A:** Yes! You can create and sell websites/applications built with AdminPro.

### Q: Can I remove the "Created by CertifySphere" attribution?
**A:** The attribution is appreciated but not required. You can customize the footer as needed.

## 📞 Support

### Q: What support is included?
**A:** Installation help, comprehensive documentation, and email support for technical questions.

### Q: How do I get help if I'm stuck?
**A:** Email support@certifysphere.com with your question. Include details about what you're trying to do and any error messages.

### Q: Are updates included?
**A:** Yes! Bug fixes and improvements are included. Major new features may be separate products.

## 🔧 Customization

### Q: How hard is it to customize?
**A:** Very easy! Most customizations involve changing text, colors, or replacing demo data. The documentation guides you through everything.

### Q: Can I add my own components?
**A:** Yes! AdminPro is built with standard React patterns, so you can add any components you need.

### Q: What if I need features that aren't included?
**A:** AdminPro provides a solid foundation. You can add any features you need using the existing patterns and structure.

## 📈 Analytics

### Q: Is Google Analytics included?
**A:** Yes! Google Analytics is pre-configured and tracks user interactions, theme changes, and navigation.

### Q: Can I use other analytics services?
**A:** Yes! You can add any analytics service. The existing Google Analytics can be removed or supplemented.

### Q: What events are tracked?
**A:** Login events, theme changes, navigation, and custom events. The analytics guide has full details.

## 🎯 Business Use

### Q: Is AdminPro suitable for SaaS applications?
**A:** Absolutely! It's perfect for SaaS dashboards, admin panels, and customer portals.

### Q: Can agencies use this for client projects?
**A:** Yes! Many agencies use AdminPro to deliver professional dashboards quickly.

### Q: What industries is it good for?
**A:** Any industry needing admin dashboards: SaaS, e-commerce, healthcare, finance, education, and more.

---

## 📞 Still Have Questions?

**Email:** support@certifysphere.com
**Website:** https://www.certifysphere.com

We're here to help you succeed with AdminPro! 🚀

**Don't see your question? Email us and we'll add it to this FAQ!**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'documentation', 'FAQ.md'), faqContent);

// Create bonus materials
console.log('🎁 Creating bonus materials...');

const analyticsSetupContent = `# 📊 Google Analytics Setup Guide

## 🎯 Overview

AdminPro comes with Google Analytics pre-configured. Here's how to set it up with your own tracking ID.

## 🔧 Setup Steps

### 1. Get Your Google Analytics ID
1. Go to https://analytics.google.com
2. Create a new property for your website
3. Copy your Measurement ID (starts with G-)

### 2. Update AdminPro
Edit \`source-code/index.html\` and replace the tracking ID:

\`\`\`html
<!-- Replace G-TJ5BYVZREG with your ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'YOUR-GA-ID');
</script>
\`\`\`

### 3. What's Tracked
- Page views on all routes
- User login events (with user type)
- Theme changes (color and dark/light mode)
- Navigation clicks
- Custom events you add

### 4. Custom Event Tracking
Use the built-in analytics functions:

\`\`\`javascript
import { trackEvent } from '../utils/analytics';

// Track custom events
trackEvent('button_click', 'ui', 'header_cta');
\`\`\`

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
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'bonus', 'ANALYTICS-SETUP.md'), analyticsSetupContent);

const legalPagesContent = `# ⚖️ Legal Pages Guide

## 📋 Overview

AdminPro includes Privacy Policy and Terms of Service pages. Here's how to customize them for your business.

## 🔧 Customization Steps

### 1. Update Privacy Policy
Edit \`source-code/src/pages/Privacy.jsx\`:

- Replace "CertifySphere" with your company name
- Update contact information
- Add your specific data collection practices
- Include your jurisdiction and governing law

### 2. Update Terms of Service
Edit \`source-code/src/pages/Terms.jsx\`:

- Replace company information
- Update service descriptions
- Add your specific terms and conditions
- Include limitation of liability clauses

### 3. Legal Compliance

**Important:** The included legal pages are templates. You should:
- Consult with a lawyer for your specific needs
- Ensure compliance with local laws (GDPR, CCPA, etc.)
- Update regularly as your service evolves
- Include all required disclosures

## 🌍 International Considerations

### GDPR (European Union)
- Cookie consent banners
- Right to data deletion
- Data processing lawful basis
- Privacy by design

### CCPA (California)
- Consumer rights disclosures
- Opt-out mechanisms
- Data sale notifications
- Third-party sharing details

### Other Jurisdictions
Research requirements for:
- Your business location
- Your customers' locations
- Data storage locations
- Service delivery regions

## 📞 Legal Resources

- Consult qualified legal counsel
- Use legal template services
- Review industry-specific requirements
- Stay updated on changing regulations

**Legal compliance protects your business and users! ⚖️**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'bonus', 'LEGAL-PAGES.md'), legalPagesContent);

const businessTipsContent = `# 💼 Business Tips for AdminPro

## 🎯 Monetization Strategies

### 1. SaaS Applications
- Use AdminPro as your admin dashboard
- Add subscription management
- Implement user analytics
- Create customer portals

### 2. Client Services
- Deliver projects faster
- Impress clients with professional design
- Focus on business logic, not UI
- Increase profit margins

### 3. Product Development
- Rapid prototyping
- MVP development
- User testing platform
- Demo applications

## 🚀 Growth Hacks

### 1. Time to Market
- Launch 3-6 months faster
- Focus on core features
- Professional appearance from day one
- Iterate based on user feedback

### 2. Cost Savings
- No designer needed for initial version
- Reduced development time
- Lower maintenance overhead
- Proven, tested components

### 3. Scalability
- Built with modern tech stack
- Component-based architecture
- Easy to extend and modify
- Performance optimized

## 📈 Marketing Your AdminPro-Based Product

### 1. Highlight Professional Design
- Showcase the clean, modern interface
- Emphasize mobile responsiveness
- Demonstrate theme flexibility
- Show real user interactions

### 2. Technical Credibility
- Modern React 18 + Vite stack
- Performance optimized
- Security best practices
- Scalable architecture

### 3. User Experience
- Intuitive navigation
- Consistent design language
- Accessibility compliant
- Cross-browser compatible

## 🎨 Customization for Different Industries

### Healthcare
- Use green theme for trust
- Add HIPAA compliance features
- Focus on data security
- Include patient management flows

### Finance
- Use blue theme for professionalism
- Add security badges
- Include compliance features
- Focus on data accuracy

### E-commerce
- Use orange theme for energy
- Add sales analytics
- Include inventory management
- Focus on conversion metrics

### Education
- Use purple theme for creativity
- Add student management
- Include progress tracking
- Focus on engagement metrics

## 💰 Pricing Your AdminPro-Based Product

### SaaS Pricing Models
- **Freemium:** Basic features free, premium paid
- **Tiered:** Multiple feature levels
- **Usage-based:** Pay per user/transaction
- **Enterprise:** Custom pricing for large clients

### Service Pricing
- **Fixed Price:** Set price per project
- **Hourly Rate:** Charge for customization time
- **Value-based:** Price based on client value
- **Retainer:** Ongoing maintenance and updates

## 🔧 Technical Best Practices

### 1. Code Organization
- Keep components modular
- Use consistent naming conventions
- Document your customizations
- Maintain clean git history

### 2. Performance
- Optimize images and assets
- Use lazy loading for large datasets
- Implement proper caching
- Monitor performance metrics

### 3. Security
- Validate all user inputs
- Implement proper authentication
- Use HTTPS everywhere
- Regular security updates

## 📊 Success Metrics

### User Engagement
- Daily/Monthly active users
- Session duration
- Feature adoption rates
- User retention

### Business Metrics
- Customer acquisition cost
- Lifetime value
- Churn rate
- Revenue growth

### Technical Metrics
- Page load times
- Error rates
- Uptime percentage
- Mobile usage

## 🎯 Competitive Advantages

### 1. Speed to Market
- Launch faster than competitors
- Iterate quickly based on feedback
- Stay ahead of market trends
- Respond to opportunities rapidly

### 2. Professional Appearance
- Compete with larger companies
- Build trust with professional design
- Attract enterprise customers
- Command premium pricing

### 3. Technical Excellence
- Modern, maintainable codebase
- Scalable architecture
- Performance optimized
- Future-proof technology choices

## 📞 Community and Support

### Building Community
- Share your success stories
- Contribute to open source
- Help other AdminPro users
- Build your personal brand

### Getting Support
- Email: support@certifysphere.com
- Join developer communities
- Share knowledge and learn
- Stay updated on best practices

**Turn AdminPro into your business success story! 💼🚀**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'bonus', 'BUSINESS-TIPS.md'), businessTipsContent);

// Create License
const licenseContent = `# 📄 License - AdminPro Dashboard Template

## 🎯 Commercial License

This AdminPro Dashboard Template is licensed for commercial use through Gumroad.

### ✅ **What You Can Do**

- **Unlimited Use** - Use in unlimited personal and commercial projects
- **Modify and Customize** - Change any part of the code to fit your needs
- **Create Derivative Works** - Build new products based on AdminPro
- **Client Projects** - Use for client work and charge for your services
- **Sell End Products** - Sell websites and applications built with AdminPro
- **Team Usage** - Share with your team members working on the same project

### ❌ **What You Cannot Do**

- **Resell Template** - Cannot resell or redistribute AdminPro itself
- **Share Source Code** - Cannot share the original source code publicly
- **Create Competing Templates** - Cannot create similar templates using this code
- **Mass Distribution** - Cannot distribute to multiple teams/companies without additional licenses

### 📋 **License Details**

**License Type:** Single Commercial License
**Purchased From:** Gumroad
**Valid For:** Lifetime use
**Updates:** Included for purchased version

### 🏢 **Commercial Use Examples**

**✅ Allowed:**
- SaaS application dashboards
- Client admin panels
- E-commerce backends
- CRM systems
- Analytics platforms
- Internal company tools
- Freelance projects
- Agency client work

**❌ Not Allowed:**
- Selling AdminPro as a template
- Creating template marketplaces with AdminPro
- Redistributing source code
- Sublicensing to other developers

### 🤝 **Attribution**

**Optional but Appreciated:**
- Keep "Created by CertifySphere" in footer (not required)
- Link to https://www.certifysphere.com (optional)
- Mention AdminPro in your project credits (appreciated)

**Not Required:**
- No mandatory attribution
- You can remove all CertifySphere branding
- Customize footer as needed

### 🔄 **Updates and Support**

**Included:**
- Bug fixes for current version
- Email support for installation and basic customization
- Documentation updates
- Security patches

**Not Included:**
- Major feature additions (may be separate products)
- Custom development services
- Extended support beyond basic questions

### ⚖️ **Legal Terms**

**Warranty Disclaimer:**
This template is provided "as is" without warranty of any kind, express or implied.

**Limitation of Liability:**
CertifySphere shall not be liable for any damages arising from the use of this template.

**Governing Law:**
This license is governed by the laws of the jurisdiction where CertifySphere operates.

### 🌍 **International Use**

This license is valid worldwide and allows use in any country, subject to local laws and regulations.

### 👥 **Team and Enterprise Use**

**Single License Covers:**
- Individual developer
- Small team (up to 5 developers)
- Single company/organization
- Multiple projects within same organization

**For Larger Teams:**
Contact support@certifysphere.com for enterprise licensing options.

### 🔒 **Security and Compliance**

**Your Responsibilities:**
- Ensure compliance with local laws
- Implement proper security measures
- Handle user data responsibly
- Follow privacy regulations (GDPR, CCPA, etc.)

### 📞 **License Questions**

If you have questions about this license:
- **Email:** support@certifysphere.com
- **Subject:** "AdminPro License Question"
- **Include:** Your Gumroad order number

### 🎉 **Thank You**

Thank you for purchasing AdminPro! This license gives you the freedom to create amazing products while supporting continued development.

**Build something awesome! 🚀**

---

## 📋 **License Summary**

✅ **Commercial use** - Build and sell products
✅ **Modify freely** - Customize as needed  
✅ **Unlimited projects** - No project limits
✅ **Team usage** - Share with your team
✅ **Client work** - Use for client projects

❌ **No reselling** - Cannot sell template itself
❌ **No redistribution** - Cannot share source code
❌ **No sublicensing** - Cannot license to others

**Questions? Email: support@certifysphere.com**

---

**AdminPro Dashboard Template**  
**Licensed by CertifySphere**  
**Purchase Date:** [Your Purchase Date]  
**License Version:** 1.3.0  
**Valid:** Lifetime
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'LICENSE.md'), licenseContent);

// Create Quick Start Guide
const quickStartContent = `# 🚀 AdminPro - Quick Start Guide

## Get Running in 5 Minutes!

### Step 1: Extract Files
You've already done this! 🎉

### Step 2: Install Dependencies
\`\`\`bash
cd source-code
npm install
\`\`\`

### Step 3: Start Development Server
\`\`\`bash
npm run dev
\`\`\`

### Step 4: Open in Browser
Navigate to: \`http://localhost:5173\`

### Step 5: Login with Demo Account
- **Email:** admin@admin.com
- **Password:** admin123

**That's it! You're now running AdminPro! 🎉**

## 🎨 Try Different Themes

1. Look for the palette icon (🎨) in the top-right corner
2. Click to open the color picker
3. Choose from 5 beautiful themes:
   - Blue (Professional)
   - Green (Nature)
   - Purple (Creative)
   - Orange (Energetic)
   - Pink (Modern)

## 🌙 Toggle Dark Mode

1. Look for the sun/moon icon (☀️/🌙) in the top-right corner
2. Click to switch between light and dark modes
3. Works with all 5 color themes!

## 📱 Test Mobile View

1. Resize your browser window to mobile size
2. Or use browser dev tools (F12 → device toolbar)
3. Try the hamburger menu (☰) on mobile

## 🔐 Demo Accounts Available

- **Admin:** admin@admin.com / admin123
- **Demo:** demo@demo.com / demo123
- **User:** user@user.com / user123

## 🏗️ Build for Production

When ready to deploy:
\`\`\`bash
npm run build
\`\`\`

Files will be in the \`dist\` folder, ready for any web server!

## 📞 Need Help?

- Check the \`documentation/\` folder for detailed guides
- Email: support@certifysphere.com
- Website: https://www.certifysphere.com

**Happy coding! 🚀**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'QUICK-START.md'), quickStartContent);

// Create main README
const readmeContent = `# 🚀 AdminPro Dashboard - Professional React Template

**Welcome to AdminPro!** Thank you for your purchase. You now have everything you need to create amazing admin dashboards.

## 🎯 What You've Got

### 📦 **Complete Package**
- ✅ **Full Source Code** - All React components and pages
- ✅ **5 Color Themes** - Blue, Green, Purple, Orange, Pink
- ✅ **Dark Mode** - For all themes (10 total combinations!)
- ✅ **Mobile Responsive** - Perfect on all devices
- ✅ **Demo Accounts** - Ready-to-use login credentials
- ✅ **Documentation** - Comprehensive guides
- ✅ **Screenshots** - Professional preview images
- ✅ **Bonus Materials** - Analytics, legal, business tips

## 🚀 **Quick Start (5 Minutes)**

1. **Navigate to source code:**
   \`\`\`bash
   cd source-code
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser:**
   http://localhost:5173

5. **Login with demo account:**
   - Email: admin@admin.com
   - Password: admin123

**That's it! You're now running AdminPro! 🎉**

## 📚 **Documentation**

### 📖 **Essential Guides**
- **QUICK-START.md** - Get running in 5 minutes
- **documentation/INSTALLATION.md** - Detailed setup instructions
- **documentation/CUSTOMIZATION.md** - Make it your own
- **documentation/THEME-GUIDE.md** - Master the theme system
- **documentation/DEPLOYMENT.md** - Go live with your dashboard
- **documentation/FAQ.md** - Common questions answered

### 🎁 **Bonus Materials**
- **bonus/ANALYTICS-SETUP.md** - Google Analytics integration
- **bonus/LEGAL-PAGES.md** - Privacy policy and terms
- **bonus/BUSINESS-TIPS.md** - Monetization strategies

## 🎨 **Try All Themes**

AdminPro includes 5 beautiful themes:
- 🔵 **Blue** - Professional and trustworthy
- 🟢 **Green** - Natural and harmonious
- 🟣 **Purple** - Creative and innovative
- 🟠 **Orange** - Energetic and friendly
- 🩷 **Pink** - Modern and approachable

**Plus dark mode for each = 10 total combinations!**

Switch themes using the palette icon (🎨) in the top-right corner.

## 🔐 **Demo Accounts**

Test all features with these accounts:
- **Admin:** admin@admin.com / admin123
- **Demo:** demo@demo.com / demo123
- **User:** user@user.com / user123

## 🛠️ **Tech Stack**

AdminPro is built with modern, professional technologies:
- **React 18** - Latest React with hooks
- **Vite** - Lightning-fast development
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Recharts** - Beautiful data visualization
- **Lucide Icons** - Modern icon library
- **Google Analytics** - Built-in tracking

## 📱 **Mobile Responsive**

AdminPro works perfectly on all devices:
- 📱 **Mobile phones** - Touch-friendly hamburger menu
- 📟 **Tablets** - Optimized layouts
- 💻 **Desktops** - Full sidebar navigation
- 🖥️ **Large screens** - Scales beautifully

## 🎯 **Perfect For**

- **SaaS Applications** - Customer dashboards
- **Admin Panels** - Content management
- **Analytics Platforms** - Data visualization
- **E-commerce** - Store management
- **CRM Systems** - Customer management
- **Startups** - MVP development
- **Agencies** - Client projects
- **Freelancers** - Quick delivery

## 📞 **Support**

Need help? We're here for you:
- **Email:** support@certifysphere.com
- **Website:** https://www.certifysphere.com
- **Documentation:** Check the guides in this package

## 🎉 **What's Next?**

1. **Explore** - Try all themes and features
2. **Customize** - Make it match your brand
3. **Deploy** - Launch your dashboard
4. **Succeed** - Build amazing products!

**Happy coding! 🚀**

---

**Created by CertifySphere** | **Professional Templates** | **Enterprise Quality**
`;

fs.writeFileSync(path.join(gumroadPackageDir, 'README.md'), readmeContent);

// Skip production build for Gumroad package (customers will build themselves)
console.log('📦 Skipping production build - customers will build locally');

// Create ZIP file
console.log('📦 Creating ZIP package...');
execSync(`zip -r "${ZIP_NAME}" "${PACKAGE_DIR}" -x "*/node_modules/*" "*/.git/*" "*/.DS_Store"`, { 
    cwd: 'gumroad', 
    stdio: 'inherit' 
});

// Get file size
const stats = fs.statSync(gumroadZipPath);
const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

console.log('\n🎉 Gumroad package created successfully!');
console.log(`📦 Package: ${gumroadZipPath}`);
console.log(`📏 Size: ${fileSizeInMB} MB`);
console.log(`📁 Directory: ${gumroadPackageDir}`);

// Create package info
const packageInfo = {
    name: PACKAGE_NAME,
    version: VERSION,
    platform: 'Gumroad',
    size: `${fileSizeInMB} MB`,
    created: new Date().toISOString(),
    contents: {
        sourceCode: 'Complete React application',
        documentation: 'Comprehensive guides and tutorials',
        screenshots: 'Professional preview images',
        bonusMaterials: 'Analytics, legal, and business guides'
    }
};

fs.writeFileSync(path.join('gumroad', `${PACKAGE_NAME}-v${VERSION}-info.json`), JSON.stringify(packageInfo, null, 2));

console.log('\n📊 Package Contents:');
console.log('   💻 Complete source code');
console.log('   📚 Comprehensive documentation');
console.log('   🎁 Bonus materials');
console.log('   📸 Professional screenshots');
console.log('   🔐 Demo accounts setup');

console.log('\n🚀 Ready for Gumroad upload!');
console.log('\n📝 Next Steps:');
console.log('   1. Upload ZIP file to Gumroad');
console.log('   2. Use marketing content from GUMROAD_LISTING_GUIDE.md');
console.log('   3. Set pricing ($49-79 recommended)');
console.log('   4. Launch and promote!');

console.log('\n✅ Gumroad package creation complete!');