# AdminPro - Professional Admin Dashboard Template

A modern, feature-rich admin dashboard template built with React, Vite, and Tailwind CSS. Perfect for selling on Envato and other marketplaces.

## Features

✨ **Complete Dashboard Solution**
- Beautiful landing page with pricing sections
- Login and registration pages
- Comprehensive dashboard with statistics
- Advanced data tables with search and filters
- Multiple chart types (Line, Bar, Area, Pie, Radar)
- User profile management

🎨 **Customization Options**
- 5 color themes (Blue, Green, Purple, Orange, Pink)
- Light and dark mode support
- Fully responsive design
- Professional UI components

📊 **Data Visualization**
- Recharts integration for beautiful charts
- Real-time data updates
- Interactive tooltips and legends

🔐 **Authentication**
- Login page with social auth options
- Registration page
- Protected routes
- Session management

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful icon library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser and go to `http://localhost:5173`

4. Click "Login" and use demo credentials:
   - **Email:** admin@admin.com
   - **Password:** admin123

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## Demo Credentials

| Role  | Email              | Password  |
|-------|-------------------|-----------|
| Admin | admin@admin.com   | admin123  |
| Demo  | demo@demo.com     | demo123   |
| User  | user@user.com     | user123   |

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Top navigation bar
│   │   ├── Sidebar.jsx         # Side navigation menu
│   │   └── StatCard.jsx        # Statistics card component
│   ├── context/
│   │   └── ThemeContext.jsx    # Theme management
│   ├── pages/
│   │   ├── LandingPage.jsx     # Marketing landing page
│   │   ├── Login.jsx           # Login page
│   │   ├── Register.jsx        # Registration page
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   ├── Tables.jsx          # Data tables page
│   │   ├── Charts.jsx          # Charts page
│   │   └── Profile.jsx         # User profile page
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Features Overview

### Landing Page
- Hero section with CTA buttons
- Feature highlights
- Pricing plans
- Responsive navigation

### Dashboard
- 4 statistics cards with trend indicators
- Sales overview line chart
- Category distribution pie chart
- Recent orders table
- Real-time data updates

### Tables
- User management table
- Search functionality
- Filter and export options
- Pagination
- Edit and delete actions

### Charts
- Line chart for performance tracking
- Bar chart for product comparison
- Area chart for user activity
- Pie chart for distribution
- Radar chart for multi-dimensional data

### Profile
- User information display
- Editable profile form
- Activity statistics
- Avatar upload

### Theme System
- 5 color themes (Blue, Green, Purple, Orange, Pink)
- Dark/Light mode toggle (click sun/moon icon in header)
- Color theme picker (click palette icon in header)
- Persistent theme selection
- CSS custom properties

### How to Change Themes
1. **Color Theme:** Click the palette icon (🎨) in the top-right header
2. **Dark/Light Mode:** Click the sun/moon icon in the top-right header
3. Your preferences are saved automatically!

## Customization

### Changing Colors
Click the palette icon in the header to choose from 5 pre-built color themes.

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Sidebar.jsx`

### Modifying Data
Update the data arrays in each page component to display your own content.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is available for commercial use. Perfect for selling on:
- Envato Market
- ThemeForest
- Creative Market
- Your own website

## Support

For support and questions, please contact the developer.

## Credits

- Icons: Lucide React
- Charts: Recharts
- Images: Unsplash
- UI Framework: Tailwind CSS
