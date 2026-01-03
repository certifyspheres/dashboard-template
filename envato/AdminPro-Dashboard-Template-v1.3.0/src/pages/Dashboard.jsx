import React from 'react';
import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import { Users, DollarSign, ShoppingCart, TrendingUp, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = ({ setIsAuthenticated }) => {
  const stats = [
    { title: 'Total Users', value: '12,543', change: 12.5, icon: Users, color: 'bg-blue-500' },
    { title: 'Revenue', value: '$45,231', change: 8.2, icon: DollarSign, color: 'bg-green-500' },
    { title: 'Orders', value: '3,842', change: -3.1, icon: ShoppingCart, color: 'bg-purple-500' },
    { title: 'Growth', value: '23.5%', change: 15.3, icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const salesData = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
    { name: 'Apr', sales: 2780, revenue: 3908 },
    { name: 'May', sales: 1890, revenue: 4800 },
    { name: 'Jun', sales: 2390, revenue: 3800 },
    { name: 'Jul', sales: 3490, revenue: 4300 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Food', value: 200 },
    { name: 'Books', value: 100 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', product: 'Laptop', amount: '$1,299', status: 'Completed', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop' },
    { id: '#12346', customer: 'Jane Smith', product: 'Smartphone', amount: '$899', status: 'Pending', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop' },
    { id: '#12347', customer: 'Bob Johnson', product: 'Headphones', amount: '$199', status: 'Completed', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop' },
    { id: '#12348', customer: 'Alice Brown', product: 'Tablet', amount: '$599', status: 'Shipped', image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=100&h=100&fit=crop' },
  ];

  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sales Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Category Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Order ID</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Customer</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Product</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-600 dark:text-gray-400 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">{order.id}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <img src={order.image} alt={order.customer} className="w-8 h-8 rounded-full mr-3 object-cover" />
                        <span className="text-gray-900 dark:text-white">{order.customer}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-900 dark:text-white">{order.product}</td>
                    <td className="py-4 px-4 text-gray-900 dark:text-white font-semibold">{order.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </Layout>
  );
};

export default Dashboard;
