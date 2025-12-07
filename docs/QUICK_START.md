# Quick Start Guide - AdminPro Dashboard

## 🚀 Get Started in 3 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: `http://localhost:5173`

---

## 🔐 Login to Dashboard

Click the "Login" button and use any of these credentials:

```
Email: admin@admin.com
Password: admin123
```

Or try:
- demo@demo.com / demo123
- user@user.com / user123

---

## 🎨 Customize Themes

### Change Color Theme
1. Look at the top-right corner of the dashboard
2. Click the **palette icon** (🎨)
3. Choose from 5 colors: Blue, Green, Purple, Orange, Pink

### Toggle Dark/Light Mode
1. Look at the top-right corner of the dashboard
2. Click the **sun/moon icon** (☀️/🌙)
3. Switch between light and dark modes instantly

---

## 📱 Explore Features

### Dashboard Page
- View key statistics (Users, Revenue, Orders, Growth)
- Interactive charts (Line, Pie)
- Recent orders table

### Tables Page
- User management table
- Search functionality
- Filter and export options
- Edit/Delete actions

### Charts Page
- Line Chart - Monthly performance
- Bar Chart - Product comparison
- Area Chart - User activity
- Pie Chart - Device distribution
- Radar Chart - Department performance

### Profile Page
- View user information
- Edit profile details
- Activity statistics

---

## 🛠️ Customization Tips

### Change Primary Color
Edit `src/index.css` and modify the CSS variables:
```css
[data-theme="blue"] {
  --color-primary: 59 130 246;
}
```

### Add New Pages
1. Create component in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`
3. Add menu item in `src/components/Sidebar.jsx`

### Modify Data
Update the data arrays in each page component with your own data.

---

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 🎯 Key Files

- `src/App.jsx` - Main app with routing
- `src/components/Layout.jsx` - Common layout wrapper
- `src/components/Header.jsx` - Top navigation with theme controls
- `src/components/Sidebar.jsx` - Side navigation menu
- `src/components/Footer.jsx` - Footer component
- `src/context/ThemeContext.jsx` - Theme management
- `src/pages/` - All page components

---

## 💡 Pro Tips

1. **Theme Persistence:** Your theme choices are saved in localStorage
2. **Responsive Design:** Works perfectly on mobile, tablet, and desktop
3. **Real Images:** Uses Unsplash for professional placeholder images
4. **Clean Code:** Well-organized and commented for easy customization
5. **Fast Development:** Vite provides instant hot module replacement

---

## 🆘 Troubleshooting

### Port Already in Use?
```bash
npm run dev -- --port 3000
```

### Dependencies Issues?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors?
Make sure you're using Node.js version 16 or higher:
```bash
node --version
```

---

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review CREDENTIALS.md for all login options
- See MARKETPLACE_DESCRIPTION.md for feature details

---

**Enjoy building with AdminPro! 🎉**
