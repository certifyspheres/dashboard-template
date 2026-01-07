# 🎨 Customization Guide - AdminPro Dashboard

## 🎯 Overview

AdminPro is built to be easily customizable. This guide shows you how to make it your own!

## 🎨 Changing Colors

### Method 1: Use Built-in Themes
The easiest way! Just click the palette icon (🎨) in the header and choose from 5 themes.

### Method 2: Create Custom Colors
Edit `src/index.css` and modify the CSS variables:

```css
:root {
  --primary: #your-color;
  --primary-dark: #your-darker-color;
}

[data-theme="custom"] {
  --primary: #your-custom-color;
  --primary-dark: #your-custom-darker-color;
}
```

Then add your theme to the theme picker in `src/components/Header.jsx`.

## 🏠 Adding New Pages

### Step 1: Create Page Component
Create a new file in `src/pages/YourPage.jsx`:

```jsx
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
```

### Step 2: Add Route
In `src/App.jsx`, add your route:

```jsx
import YourPage from './pages/YourPage';

// Add to Routes
<Route path="/your-page" element={
  <ProtectedRoute>
    <YourPage setIsAuthenticated={setIsAuthenticated} />
  </ProtectedRoute>
} />
```

### Step 3: Add to Navigation
In `src/components/Sidebar.jsx`, add to menuItems:

```jsx
const menuItems = [
  // existing items...
  { path: '/your-page', icon: YourIcon, label: 'Your Page' },
];
```

## 🖼️ Changing Logo and Branding

### Sidebar Logo
Edit `src/components/Sidebar.jsx`:
```jsx
<h1 className="text-2xl font-bold text-primary">YourBrand</h1>
```

### Page Titles
Edit `index.html`:
```html
<title>Your Dashboard - Your Company</title>
```

### Footer
Edit `src/components/Footer.jsx` to update company information.

## 📊 Adding New Charts

AdminPro uses Recharts. Add new charts in `src/pages/Charts.jsx`:

```jsx
import { YourChartType } from 'recharts';

// Add your chart component
<YourChartType data={yourData} />
```

## 🗃️ Connecting Real Data

### Replace Demo Data
1. Find demo data in page components
2. Replace with API calls or your data source
3. Update data structures as needed

### Example API Integration
```jsx
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
```

## 🔐 Authentication

### Replace Demo Authentication
Edit `src/pages/Login.jsx` to connect to your auth system:

```jsx
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
```

## 📞 Need Help?

- Check existing components for examples
- Review Tailwind CSS documentation
- Email: support@certifysphere.com

**Happy customizing! 🎨**
