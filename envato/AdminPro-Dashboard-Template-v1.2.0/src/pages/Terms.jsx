import React from 'react';
import Layout from '../components/Layout';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, Users } from 'lucide-react';

const Terms = ({ setIsAuthenticated }) => {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: 'By accessing and using AdminPro, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.'
    },
    {
      icon: Users,
      title: 'User Accounts',
      content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.'
    },
    {
      icon: Scale,
      title: 'Acceptable Use',
      content: 'You agree to use the service only for lawful purposes and in accordance with these Terms. You must not use the service in any way that violates any applicable laws or regulations.'
    },
    {
      icon: XCircle,
      title: 'Prohibited Activities',
      content: 'You may not attempt to gain unauthorized access, interfere with the service, transmit malicious code, or engage in any activity that could harm the service or other users.'
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: 'The service and its original content, features, and functionality are owned by CertifySphere and are protected by international copyright, trademark, and other intellectual property laws.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: 'In no event shall AdminPro or CertifySphere be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.'
    }
  ];

  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: December 6, 2024
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6">
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Welcome to AdminPro. These Terms of Service ("Terms") govern your access to and use of our dashboard 
            application and services. By using AdminPro, you agree to comply with and be bound by these Terms. 
            Please read them carefully before using our service.
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

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Service Availability</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We strive to provide reliable service, but we do not guarantee that the service will be uninterrupted, 
            timely, secure, or error-free. We reserve the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Modify or discontinue the service at any time</li>
            <li>Refuse service to anyone for any reason</li>
            <li>Terminate or suspend accounts that violate these Terms</li>
            <li>Update these Terms with or without notice</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data and Privacy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Your use of the service is also governed by our Privacy Policy. We collect and use information as 
            described in our Privacy Policy. By using the service, you consent to such collection and use.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            You retain all rights to your data. We will not sell or share your data with third parties except 
            as described in our Privacy Policy.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Termination</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may terminate or suspend your account and access to the service immediately, without prior notice 
            or liability, for any reason, including if you breach these Terms.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Upon termination, your right to use the service will immediately cease. If you wish to terminate your 
            account, you may simply discontinue using the service or contact us to delete your account.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Governing Law</h2>
          <p className="text-gray-700 dark:text-gray-300">
            These Terms shall be governed and construed in accordance with applicable laws, without regard to its 
            conflict of law provisions. Any disputes arising from these Terms or your use of the service shall be 
            resolved through binding arbitration.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p><strong>Email:</strong> legal@certifysphere.com</p>
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

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Changes to Terms</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
            provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material 
            change will be determined at our sole discretion. By continuing to access or use our service after 
            those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
