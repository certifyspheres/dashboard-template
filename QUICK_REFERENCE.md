# AdminPro Dashboard - Quick Reference Card

## 🚀 Installation (30 seconds)
```bash
npm install && npm run dev
```
Open: `http://localhost:5173`

---

## 🔐 Demo Login
```
Email:    admin@admin.com
Password: admin123
```

**Other Accounts:**
- demo@demo.com / demo123
- user@user.com / user123

---

## 🎨 Change Themes

### Color Theme
1. Click **palette icon** (🎨) in top-right
2. Choose: Blue, Green, Purple, Orange, or Pink

### Dark/Light Mode
1. Click **sun/moon icon** in top-right
2. Toggle between light and dark

---

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Landing | `/` | Marketing page |
| Login | `/login` | Authentication |
| Register | `/register` | Sign up |
| Dashboard | `/dashboard` | Main admin |
| Tables | `/tables` | User management |
| Charts | `/charts` | Data visualization |
| Profile | `/profile` | User profile |

---

## 🎨 Color Themes

| Theme | Primary Color | Best For |
|-------|--------------|----------|
| Blue | #3B82F6 | Professional, Corporate |
| Green | #22C55E | Eco, Health |
| Purple | #8B5CF6 | Creative, Modern |
| Orange | #F97316 | Energetic, Warm |
| Pink | #EC4899 | Playful, Vibrant |

---

## 📊 Charts Included

- **Line Chart** - Performance tracking
- **Bar Chart** - Product comparison
- **Area Chart** - User activity
- **Pie Chart** - Distribution
- **Radar Chart** - Multi-dimensional

---

## 🛠️ Key Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Key Files

```
src/
├── App.jsx                 # Main app + routing
├── components/
│   ├── Layout.jsx         # Common layout
│   ├── Header.jsx         # Top nav + themes
│   ├── Sidebar.jsx        # Side menu
│   └── Footer.jsx         # Bottom bar
├── context/
│   └── ThemeContext.jsx   # Theme management
├── pages/
│   ├── Dashboard.jsx      # Main dashboard
│   ├── Login.jsx          # Auth page
│   └── ...                # Other pages
└── index.css              # Theme styles
```

---

## 🎯 Quick Customization

### Change Default Theme
**File:** `src/context/ThemeContext.jsx`
```javascript
const [colorTheme, setColorTheme] = useState('purple');
```

### Add New Color
**File:** `src/index.css`
```css
[data-theme="red"] {
  --color-primary: 239 68 68;
}
```

**File:** `src/components/Header.jsx`
```javascript
{ name: 'red', class: 'bg-red-500', label: 'Red' }
```

### Add New Page
1. Create: `src/pages/NewPage.jsx`
2. Add route in: `src/App.jsx`
3. Add menu in: `src/components/Sidebar.jsx`

---

## 🐛 Troubleshooting

### Port in use?
```bash
npm run dev -- --port 3000
```

### Theme not working?
```javascript
localStorage.clear()
// Then refresh
```

### Build errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| README.md | Main docs |
| QUICK_START.md | Setup guide |
| THEME_GUIDE.md | Theme usage |
| CUSTOMIZATION_GUIDE.md | How to customize |
| FEATURES.md | Feature list |
| CREDENTIALS.md | Login info |

---

## 🎨 Theme Locations

### Color Picker
- **Location:** Header, top-right
- **Icon:** 🎨 Palette
- **Action:** Click to open dropdown

### Dark/Light Toggle
- **Location:** Header, top-right
- **Icon:** ☀️ Sun / 🌙 Moon
- **Action:** Click to toggle

---

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Mobile */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large Desktop */
```

---

## 🔧 Tech Stack

- **React** 18.2.0
- **Vite** 5.0.8
- **Tailwind CSS** 3.3.6
- **React Router** 6.20.0
- **Recharts** 2.10.3
- **Lucide Icons** 0.294.0

---

## ✅ Feature Checklist

- [x] 7 Pages
- [x] 5 Color Themes
- [x] Dark/Light Mode
- [x] 5 Chart Types
- [x] User Tables
- [x] Authentication
- [x] Responsive Design
- [x] Professional Images

---

## 🎯 Quick Stats

- **Pages:** 7
- **Components:** 5+
- **Themes:** 5 colors × 2 modes = 10 combinations
- **Charts:** 5 types
- **Demo Accounts:** 3
- **Documentation:** 10 files

---

## 🚀 Production Build

```bash
npm run build
```

**Output:**
- `dist/` folder
- Optimized bundle
- ~656 KB total
- Ready to deploy

---

## 📞 Quick Help

### Can't login?
Use: `admin@admin.com` / `admin123`

### Can't find theme controls?
Look top-right corner: 🎨 and ☀️/🌙

### Need to customize?
Read: `CUSTOMIZATION_GUIDE.md`

### Want to sell?
Read: `MARKETPLACE_DESCRIPTION.md`

---

## 🎉 Quick Start (3 Steps)

```bash
# 1. Install
npm install

# 2. Run
npm run dev

# 3. Login
# Use: admin@admin.com / admin123
```

**Done! 🎉**

---

## 💡 Pro Tips

1. **Themes persist** - Your choice is saved
2. **All pages responsive** - Works on any device
3. **Real images** - Professional Unsplash photos
4. **Clean code** - Easy to customize
5. **Fast build** - Vite is lightning quick

---

## 🔗 Quick Links

- **Main Docs:** README.md
- **Setup:** QUICK_START.md
- **Themes:** THEME_GUIDE.md
- **Customize:** CUSTOMIZATION_GUIDE.md
- **Features:** FEATURES.md

---

**Print this page for quick reference! 📄**
