#!/bin/bash

# AdminPro Dashboard - Gumroad Package Creator
# Simple wrapper script that calls the Gumroad packaging system

echo "🚀 AdminPro Dashboard - Gumroad Package Creator"
echo "==============================================="
echo ""

# Check if gumroad directory exists
if [ ! -d "gumroad" ]; then
    echo "❌ Gumroad directory not found. Please make sure you're in the project root."
    exit 1
fi

# Run the Gumroad packaging script
echo "📦 Creating Gumroad package..."
echo ""

cd gumroad && ./create-gumroad-package.sh

# Return to root directory
cd ..

echo ""
echo "✅ Gumroad package creation complete!"
echo ""
echo "📁 Package location: gumroad/AdminPro-Dashboard-v1.3.0-Gumroad.zip"
echo "📋 Package info: gumroad/AdminPro-Dashboard-v1.3.0-info.json"
echo ""
echo "🎯 Ready for Gumroad upload!"
echo ""
echo "📝 Marketing materials available in:"
echo "   • gumroad/GUMROAD_LISTING_GUIDE.md"
echo ""
echo "💡 Recommended pricing: $49-79"
echo "🎨 Highlight: 5 themes + dark mode = 10 combinations"
echo "⚡ Selling point: 5-minute setup time"