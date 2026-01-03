# Installation Guide - AdminPro Dashboard

## 📋 Requirements

- **Node.js**: Version 16 or higher
- **npm**: Version 7 or higher (comes with Node.js)
- **Modern Browser**: Chrome, Firefox, Safari, Edge

## 🚀 Installation Steps

### Step 1: Extract Files
Extract the downloaded ZIP file to your desired location.

### Step 2: Install Dependencies
```bash
cd AdminPro-Dashboard-Template-v1.3.0
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Navigate to: `http://localhost:5173`

### Step 5: Login
Use any of these demo accounts:
- **Admin**: admin@admin.com / admin123
- **Demo**: demo@demo.com / demo123
- **User**: user@user.com / user123

## 🎨 Using Themes

### Change Color Theme
1. Look for the palette icon (🎨) in the top-right corner
2. Click to open color picker
3. Choose from 5 colors: Blue, Green, Purple, Orange, Pink

### Toggle Dark/Light Mode
1. Look for the sun/moon icon (☀️/🌙) in the top-right corner
2. Click to switch between light and dark modes

## 📱 Mobile Testing

### Browser DevTools
1. Open Chrome DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Test different screen sizes
4. Try the hamburger menu on mobile sizes

## 🏗️ Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready for deployment.

## 🔧 Customization

See `CUSTOMIZATION_GUIDE.md` for detailed instructions on:
- Adding new pages
- Changing colors
- Modifying components
- Adding features

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Make sure you're using Node.js version 16 or higher:
```bash
node --version
```

## 📞 Support

If you need help:
1. Check the documentation files
2. Review the troubleshooting section
3. Contact support: support@certifysphere.com

---

**Happy coding! 🚀**
