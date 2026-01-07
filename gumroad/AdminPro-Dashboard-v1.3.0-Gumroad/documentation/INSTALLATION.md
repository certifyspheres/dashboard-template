# 📦 Installation Guide - AdminPro Dashboard

## 🎯 Requirements

- **Node.js:** Version 16 or higher
- **npm:** Version 7 or higher (comes with Node.js)
- **Modern Browser:** Chrome, Firefox, Safari, Edge

## 🚀 Step-by-Step Installation

### 1. Check Node.js Installation
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

### 2. Navigate to Source Code
```bash
cd source-code
```

### 3. Install Dependencies
```bash
npm install
```

This will install all required packages:
- React 18
- Vite
- Tailwind CSS
- Recharts
- React Router
- Lucide Icons

### 4. Start Development Server
```bash
npm run dev
```

You should see:
```
Local:   http://localhost:5173/
Network: http://192.168.x.x:5173/
```

### 5. Open in Browser
Navigate to `http://localhost:5173`

### 6. Login
Use any demo account:
- admin@admin.com / admin123
- demo@demo.com / demo123
- user@user.com / user123

## 🎨 Available Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Troubleshooting

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
Make sure you're using Node.js 16+:
```bash
node --version
```

## 📞 Support

If you need help:
- Email: support@certifysphere.com
- Check FAQ.md for common questions

**Installation complete! Time to build something amazing! 🎉**
