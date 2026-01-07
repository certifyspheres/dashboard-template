import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Globe } from 'lucide-react';

const Footer = ({ sidebarCollapsed }) => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">AdminPro</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Professional admin dashboard template with advanced features and beautiful design.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Globe className="w-4 h-4" />
              <a 
                href="https://www.certifysphere.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                www.certifysphere.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/users" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/tables" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Tables
                </Link>
              </li>
              <li>
                <Link to="/charts" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Charts
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@certifysphere.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2024 AdminPro. All rights reserved.</p>
            <p className="flex items-center mt-2 sm:mt-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by{' '}
              <a 
                href="https://www.certifysphere.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 font-semibold hover:text-primary transition-colors"
              >
                CertifySphere
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
