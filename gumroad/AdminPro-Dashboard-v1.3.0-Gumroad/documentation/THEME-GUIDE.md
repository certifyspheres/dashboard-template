# 🎨 Theme Guide - AdminPro Dashboard

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
Themes are controlled by the `ThemeContext` in `src/context/ThemeContext.jsx`.

## 🔧 Technical Implementation

### CSS Variables
Themes use CSS custom properties defined in `src/index.css`:

```css
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
```

### Theme Context
The theme system uses React Context for state management:

```jsx
const { isDark, toggleTheme, colorTheme, changeColorTheme } = useTheme();
```

### Tailwind Integration
Themes work with Tailwind's `primary` color:

```jsx
<div className="bg-primary text-white">
  Themed content
</div>
```

## 🎨 Creating Custom Themes

### Step 1: Add CSS Variables
In `src/index.css`, add your theme:

```css
[data-theme="custom"] {
  --primary: #your-color;
  --primary-dark: #your-darker-color;
  --primary-light: #your-lighter-color;
}
```

### Step 2: Update Theme Picker
In `src/components/Header.jsx`, add to the colors array:

```jsx
const colors = [
  // existing colors...
  { name: 'custom', class: 'bg-your-color', label: 'Custom' },
];
```

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
