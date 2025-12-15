# File Structure - AdminPro Dashboard

## 📁 Project Structure

```
AdminPro-Dashboard-Template-v1.2.0/
├── 📁 src/                          # Source code
│   ├── 📁 components/               # React components
│   │   ├── Header.jsx              # Top navigation
│   │   ├── Sidebar.jsx             # Side navigation
│   │   ├── Footer.jsx              # Bottom footer
│   │   ├── Layout.jsx              # Common layout
│   │   └── StatCard.jsx            # Statistics card
│   ├── 📁 context/                 # React context
│   │   └── ThemeContext.jsx        # Theme management
│   ├── 📁 pages/                   # Page components
│   │   ├── LandingPage.jsx         # Homepage
│   │   ├── Login.jsx               # Login page
│   │   ├── Register.jsx            # Registration
│   │   ├── Dashboard.jsx           # Main dashboard
│   │   ├── Tables.jsx              # Data tables
│   │   ├── Charts.jsx              # Charts page
│   │   ├── Profile.jsx             # User profile
│   │   ├── Privacy.jsx             # Privacy policy
│   │   └── Terms.jsx               # Terms of service
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── 📁 docs/                        # Documentation
│   └── 📁 screenshots/             # Preview images
├── 📁 public/                      # Static assets
├── 📄 package.json                 # Dependencies
├── 📄 vite.config.js              # Build configuration
├── 📄 tailwind.config.js          # Tailwind setup
├── 📄 postcss.config.js           # PostCSS setup
├── 📄 index.html                  # HTML template
├── 📄 README.md                   # Main documentation
├── 📄 INSTALLATION.md             # Setup guide
├── 📄 QUICK_START.md              # Quick start
├── 📄 CREDENTIALS.md              # Demo accounts
├── 📄 THEME_GUIDE.md              # Theme usage
├── 📄 CUSTOMIZATION_GUIDE.md     # Customization
├── 📄 RESPONSIVE_DESIGN.md       # Mobile guide
├── 📄 CHANGELOG.md               # Version history
└── 📄 LICENSE.md                 # License terms
```

## 🎯 Key Files

### Essential Files
- **src/App.jsx** - Main application with routing
- **src/main.jsx** - Application entry point
- **src/index.css** - Global styles and theme variables
- **package.json** - Project dependencies and scripts

### Components
- **Layout.jsx** - Common layout wrapper for all pages
- **Header.jsx** - Top navigation with theme controls
- **Sidebar.jsx** - Side navigation menu
- **Footer.jsx** - Footer with links and branding

### Pages
- **Dashboard.jsx** - Main admin dashboard
- **Tables.jsx** - Data table management
- **Charts.jsx** - Data visualization
- **Profile.jsx** - User profile settings

### Configuration
- **vite.config.js** - Vite build configuration
- **tailwind.config.js** - Tailwind CSS setup
- **postcss.config.js** - PostCSS configuration

## 🔧 Important Directories

### /src/components/
Contains all reusable React components. These are the building blocks of your application.

### /src/pages/
Contains all page-level components. Each file represents a different route/page.

### /src/context/
Contains React Context providers for global state management (themes, auth, etc.).

### /docs/screenshots/
Contains preview images for documentation and marketing purposes.

## 📝 Documentation Files

### For Users
- **README.md** - Complete overview and setup
- **INSTALLATION.md** - Step-by-step installation
- **QUICK_START.md** - Get running quickly
- **CREDENTIALS.md** - Demo login accounts

### For Developers
- **CUSTOMIZATION_GUIDE.md** - How to customize
- **THEME_GUIDE.md** - Theme system usage
- **RESPONSIVE_DESIGN.md** - Mobile responsiveness

### Reference
- **CHANGELOG.md** - Version history
- **LICENSE.md** - License terms
- **FILE_STRUCTURE.md** - This file

## 🎨 Styling System

### Global Styles
- **src/index.css** - Contains theme variables and global styles
- Uses CSS custom properties for theme colors
- Tailwind CSS for utility classes

### Theme System
- **ThemeContext.jsx** - Manages theme state
- **CSS Variables** - Dynamic color switching
- **localStorage** - Persistent theme settings

## 🚀 Getting Started

1. **Install**: `npm install`
2. **Develop**: `npm run dev`
3. **Build**: `npm run build`
4. **Preview**: `npm run preview`

## 💡 Tips

- Start with **README.md** for complete overview
- Check **QUICK_START.md** for fastest setup
- Use **CUSTOMIZATION_GUIDE.md** for modifications
- Reference **THEME_GUIDE.md** for theme usage

---

**Happy coding! 🚀**
