import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Search, Filter, Download, Edit, Trash2 } from 'lucide-react';

const Tables = ({ setIsAuthenticated }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop', joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', joined: '2024-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', joined: '2024-03-10' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', joined: '2024-04-05' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', joined: '2024-05-12' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', role: 'Manager', status: 'Active', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', joined: '2024-06-18' },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">User Management</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Manage and organize your users</p>
      </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">User</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Role</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Joined</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                        <span className="text-gray-900 dark:text-white font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        user.role === 'Admin' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                        user.role === 'Manager' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        user.status === 'Active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{user.joined}</td>
                    <td className="py-4 px-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredUsers.length} of {users.length} users
              </p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
                  Previous
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Tables;
