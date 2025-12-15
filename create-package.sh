#!/bin/bash

# AdminPro Dashboard - Package Creator
# Simple wrapper script that calls the Envato packaging system

echo "🚀 AdminPro Dashboard - Package Creator"
echo "======================================"
echo ""

# Check if envato directory exists
if [ ! -d "envato" ]; then
    echo "❌ Envato directory not found. Please make sure you're in the project root."
    exit 1
fi

# Run the Envato packaging script
echo "📦 Creating Envato ThemeForest package..."
echo ""

cd envato && ./create-envato-package.sh

# Return to root directory
cd ..

echo ""
echo "✅ Package creation complete!"
echo ""
echo "📁 Package location: envato/AdminPro-Dashboard-Template-v1.2.0.zip"
echo "📋 Package info: envato/AdminPro-Dashboard-Template-v1.2.0-info.json"
echo ""
echo "🎯 Ready for ThemeForest upload!"