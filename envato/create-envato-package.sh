#!/bin/bash

# AdminPro Dashboard - Envato Package Creator
# This script creates a production-ready package for Envato ThemeForest

echo "🚀 AdminPro Dashboard - Envato Package Creator"
echo "=============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Check if zip is available
if ! command -v zip &> /dev/null; then
    echo "❌ zip command is not available. Please install zip utility."
    exit 1
fi

echo "✅ All required tools are available"
echo ""

# Run the packaging script
echo "📦 Running package creation script..."
node package-envato.js

# Check if package was created successfully
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Envato package created successfully!"
    echo ""
    echo "📋 Package Contents:"
    echo "   📦 ZIP File: envato/AdminPro-Dashboard-Template-v1.2.0.zip"
    echo "   📁 Directory: envato/AdminPro-Dashboard-Template-v1.2.0/"
    echo "   📊 Info File: envato/AdminPro-Dashboard-Template-v1.2.0-info.json"
    echo ""
    echo "🎯 Ready for ThemeForest Upload!"
    echo ""
    echo "📝 Upload Checklist:"
    echo "   □ Upload the ZIP file to ThemeForest"
    echo "   □ Add screenshots from docs/screenshots/"
    echo "   □ Write compelling item description"
    echo "   □ Set category: Site Templates > Admin Templates"
    echo "   □ Add tags: react, dashboard, admin, responsive, dark-mode"
    echo "   □ Set price tier based on features"
    echo "   □ Add demo URL if available"
    echo ""
    echo "💡 Tips for ThemeForest Success:"
    echo "   • Use high-quality screenshots"
    echo "   • Write detailed feature descriptions"
    echo "   • Highlight responsive design"
    echo "   • Mention modern tech stack (React 18, Vite, Tailwind)"
    echo "   • Emphasize theme system (5 colors + dark mode)"
    echo "   • Show mobile responsiveness"
    echo ""
else
    echo ""
    echo "❌ Package creation failed. Please check the errors above."
    exit 1
fi