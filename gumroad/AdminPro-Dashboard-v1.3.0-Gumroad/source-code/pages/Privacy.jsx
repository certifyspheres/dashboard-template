import React from 'react';
import Layout from '../components/Layout';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy = ({ setIsAuthenticated }) => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, including name, email address, and usage data to improve our services.'
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'Your information is used to provide, maintain, and improve our services, communicate with you, and ensure security.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.'
    },
    {
      icon: Eye,
      title: 'Information Sharing',
      content: 'We do not sell your personal information. We may share data with service providers who assist in operating our platform.'
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information at any time through your account settings.'
    },
    {
      icon: FileText,
      title: 'Cookies and Tracking',
      content: 'We use cookies and similar technologies to enhance your experience, analyze usage, and remember your preferences.'
    }
  ];

  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: December 6, 2024
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            At AdminPro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you use our dashboard application. Please read this privacy policy 
            carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary rounded-lg mr-3">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GDPR Compliance</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We are committed to ensuring that our application complies with the General Data Protection Regulation (GDPR). 
            If you are a resident of the European Economic Area (EEA), you have certain data protection rights.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate data</li>
            <li>The right to erasure of your data</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us:
          </p>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p><strong>Email:</strong> privacy@certifysphere.com</p>
            <p><strong>Website:</strong>{' '}
              <a 
                href="https://www.certifysphere.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.certifysphere.com
              </a>
            </p>
            <p><strong>Company:</strong> CertifySphere</p>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Changes to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy 
            Policy periodically for any changes.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
