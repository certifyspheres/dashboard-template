# Customization Guide - AdminPro Dashboard

## 🎨 Theme Customization

### Changing Color Themes

The dashboard includes 5 pre-built color themes. To add more:

1. Open `src/index.css`
2. Add a new theme:

```css
[data-theme="red"] {
  --color-primary: 239 68 68;
  --color-secondary: 220 38 38;
}
```

3. Open `src/components/Header.jsx`
4. Add to the colors array:

```javascript
const colors = [
  // ... existing colors
  { name: 'red', class: 'bg-red-500', label: 'Red' },
];
```

### Customizing Existing Colors

Edit the RGB values in `src/index.css`:

```css
:root {
  --color-primary: 59 130 246;      /* Blue */
  --color-secondary: 139 92 246;    /* Purple */
  --color-success: 34 197 94;       /* Green */
  --color-warning: 251 146 60;      /* Orange */
  --color-danger: 239 68 68;        /* Red */
}
```

---

## 📄 Adding New Pages

### Step 1: Create Page Component

Create `src/pages/NewPage.jsx`:

```javascript
import React from 'react';
import Layout from '../components/Layout';

const NewPage = ({ setIsAuthenticated }) => {
  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          New Page
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Your content here
        </p>
      </div>

      {/* Your page content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p>Page content goes here</p>
      </div>
    </Layout>
  );
};

export default NewPage;
```

### Step 2: Add Route

In `src/App.jsx`, add the import and route:

```javascript
import NewPage from './pages/NewPage';

// In the Routes section:
<Route 
  path="/newpage" 
  element={
    <ProtectedRoute>
      <NewPage setIsAuthenticated={setIsAuthenticated} />
    </ProtectedRoute>
  } 
/>
```

### Step 3: Add Menu Item

In `src/components/Sidebar.jsx`, add to menuItems:

```javascript
import { YourIcon } from 'lucide-react';

const menuItems = [
  // ... existing items
  { path: '/newpage', icon: YourIcon, label: 'New Page' },
];
```

---

## 🔐 Authentication Customization

### Adding Real Authentication

Replace the dummy login in `src/pages/Login.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('YOUR_API_ENDPOINT/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    
    if (data.success) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('token', data.token);
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};
```

### Adding User Roles

1. Store user role in localStorage after login
2. Create a role-based route guard
3. Conditionally show/hide menu items based on role

---

## 📊 Customizing Charts

### Changing Chart Colors

In any chart component, modify the colors:

```javascript
const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];
```

### Adding New Chart Types

Recharts supports many chart types. Example:

```javascript
import { ComposedChart, Area, Bar, Line } from 'recharts';

<ComposedChart data={data}>
  <Area dataKey="area" fill="#8884d8" />
  <Bar dataKey="bar" fill="#82ca9d" />
  <Line dataKey="line" stroke="#ffc658" />
</ComposedChart>
```

---

## 🎯 Customizing Components

### Modifying the Header

Edit `src/components/Header.jsx`:

- Add new buttons
- Change search functionality
- Modify user profile section
- Add notifications dropdown

### Customizing the Sidebar

Edit `src/components/Sidebar.jsx`:

- Change logo
- Add sub-menus
- Modify menu icons
- Add footer section

### Updating the Footer

Edit `src/components/Footer.jsx`:

- Add links
- Change copyright text
- Add social media icons

---

## 📱 Responsive Design

### Breakpoints

Tailwind CSS breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Making Components Responsive

```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Responsive grid */}
</div>
```

---

## 🖼️ Replacing Images

### Profile Images

Replace Unsplash URLs with your own:

```javascript
// Before
src="https://images.unsplash.com/photo-..."

// After
src="/assets/images/profile.jpg"
```

### Adding Local Images

1. Create `public/assets/images/` folder
2. Add your images
3. Reference them: `/assets/images/your-image.jpg`

---

## 🎨 Styling Guidelines

### Using Tailwind Classes

```javascript
// Background colors
className="bg-white dark:bg-gray-800"

// Text colors
className="text-gray-900 dark:text-white"

// Hover effects
className="hover:bg-gray-100 dark:hover:bg-gray-700"

// Transitions
className="transition-colors duration-200"
```

### Custom CSS

Add custom styles in `src/index.css`:

```css
.custom-class {
  /* Your custom styles */
}
```

---

## 📦 Adding New Dependencies

### Install Package

```bash
npm install package-name
```

### Common Useful Packages

```bash
# Form validation
npm install react-hook-form yup

# Date picker
npm install react-datepicker

# Toast notifications
npm install react-hot-toast

# State management
npm install zustand

# API calls
npm install axios
```

---

## 🔧 Configuration Files

### Tailwind Config

`tailwind.config.js` - Customize Tailwind settings:
- Add custom colors
- Extend spacing
- Add custom fonts
- Configure plugins

### Vite Config

`vite.config.js` - Build configuration:
- Add aliases
- Configure proxy
- Optimize build

---

## 🚀 Performance Optimization

### Code Splitting

```javascript
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));

<Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>
```

### Image Optimization

- Use WebP format
- Lazy load images
- Optimize image sizes

### Bundle Size

```bash
npm run build
npm run preview
```

Check the build output for bundle sizes.

---

## 📝 Best Practices

1. **Keep components small** - One responsibility per component
2. **Use Layout component** - Consistent header/footer/sidebar
3. **Follow naming conventions** - PascalCase for components
4. **Comment complex logic** - Help future developers
5. **Test responsiveness** - Check all breakpoints
6. **Optimize images** - Compress before using
7. **Use semantic HTML** - Better accessibility
8. **Keep dependencies updated** - Regular maintenance

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Recharts Documentation](https://recharts.org)
- [Lucide Icons](https://lucide.dev)
- [Vite Guide](https://vitejs.dev)

---

**Happy Customizing! 🎨**
