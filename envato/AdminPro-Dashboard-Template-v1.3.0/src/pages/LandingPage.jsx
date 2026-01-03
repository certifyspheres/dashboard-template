import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Shield, Zap, Users, ArrowRight, Check, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LandingPage = () => {
  const { isDark, toggleTheme, colorTheme, changeColorTheme } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef(null);

  const colors = [
    { name: 'blue', class: 'bg-blue-500', label: 'Blue' },
    { name: 'green', class: 'bg-green-500', label: 'Green' },
    { name: 'purple', class: 'bg-purple-500', label: 'Purple' },
    { name: 'orange', class: 'bg-orange-500', label: 'Orange' },
    { name: 'pink', class: 'bg-pink-500', label: 'Pink' },
  ];

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const features = [
    { icon: BarChart3, title: 'Advanced Analytics', description: 'Powerful charts and data visualization' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security features' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized for peak performance' },
    { icon: Users, title: 'Team Collaboration', description: 'Work together seamlessly' },
  ];

  const pricingPlans = [
    { name: 'Starter', price: '$29', features: ['5 Users', 'Basic Analytics', 'Email Support', '10GB Storage'] },
    { name: 'Professional', price: '$79', features: ['25 Users', 'Advanced Analytics', 'Priority Support', '100GB Storage'], popular: true },
    { name: 'Enterprise', price: '$199', features: ['Unlimited Users', 'Custom Analytics', '24/7 Support', 'Unlimited Storage'] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">AdminPro</h1>
            </div>
            <div className="flex items-center space-x-2">
              {/* Color Theme Picker */}
              <div className="relative" ref={colorPickerRef}>
                <button
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Change Color Theme"
                >
                  <Palette className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </button>
                
                {showColorPicker && (
                  <div className="absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 min-w-[200px]">
                    <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Choose Color Theme</p>
                    <div className="space-y-2">
                      {colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => {
                            changeColorTheme(color.name);
                            setShowColorPicker(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                            colorTheme === color.name ? 'bg-gray-100 dark:bg-gray-700' : ''
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full ${color.class} ${
                            colorTheme === color.name ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-offset-gray-800' : ''
                          }`} />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{color.label}</span>
                          {colorTheme === color.name && (
                            <span className="ml-auto text-primary">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <Link to="/login" className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                Login
              </Link>
              <Link to="/register" className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Manage Your Business
            <span className="text-primary block mt-2">Like a Pro</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            The most powerful admin dashboard template with advanced analytics, beautiful UI, and seamless user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="px-8 py-4 bg-primary text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity flex items-center">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/login" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-primary transition-colors">
              View Demo
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to manage your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-4 bg-primary rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Simple Pricing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-4 ring-primary transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">{plan.name}</h3>
                <div className="mt-4 mb-8">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`block w-full py-3 text-center rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary text-white hover:opacity-90'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">AdminPro</h2>
              <p className="text-gray-400 mb-4">
                Professional Admin Dashboard Template with advanced features, beautiful design, 
                and seamless user experience. Built with modern technologies for optimal performance.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Created by</span>
                <a 
                  href="https://www.certifysphere.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-primary transition-colors"
                >
                  CertifySphere
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                    Register
                  </Link>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://www.certifysphere.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:support@certifysphere.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p className="text-gray-500">© 2024 AdminPro. All rights reserved.</p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a 
                  href="https://www.certifysphere.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  www.certifysphere.com
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="mailto:info@certifysphere.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@certifysphere.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
