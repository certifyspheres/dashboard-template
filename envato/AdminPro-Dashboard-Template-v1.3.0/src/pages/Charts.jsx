import React from 'react';
import Layout from '../components/Layout';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({ setIsAuthenticated }) => {
  const lineData = [
    { month: 'Jan', value: 4000, target: 3500 },
    { month: 'Feb', value: 3000, target: 3200 },
    { month: 'Mar', value: 5000, target: 4000 },
    { month: 'Apr', value: 4500, target: 4200 },
    { month: 'May', value: 6000, target: 5000 },
    { month: 'Jun', value: 5500, target: 5200 },
  ];

  const barData = [
    { category: 'Product A', sales: 4000, profit: 2400 },
    { category: 'Product B', sales: 3000, profit: 1398 },
    { category: 'Product C', sales: 2000, profit: 9800 },
    { category: 'Product D', sales: 2780, profit: 3908 },
    { category: 'Product E', sales: 1890, profit: 4800 },
  ];

  const areaData = [
    { time: '00:00', users: 100 },
    { time: '04:00', users: 200 },
    { time: '08:00', users: 800 },
    { time: '12:00', users: 1200 },
    { time: '16:00', users: 900 },
    { time: '20:00', users: 600 },
    { time: '24:00', users: 300 },
  ];

  const pieData = [
    { name: 'Desktop', value: 400 },
    { name: 'Mobile', value: 300 },
    { name: 'Tablet', value: 200 },
    { name: 'Other', value: 100 },
  ];

  const radarData = [
    { subject: 'Sales', A: 120, B: 110, fullMark: 150 },
    { subject: 'Marketing', A: 98, B: 130, fullMark: 150 },
    { subject: 'Development', A: 86, B: 130, fullMark: 150 },
    { subject: 'Support', A: 99, B: 100, fullMark: 150 },
    { subject: 'Design', A: 85, B: 90, fullMark: 150 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Charts & Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Visualize your data with beautiful charts</p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Line Chart - Monthly Performance</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Bar Chart - Product Performance</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" />
                <Bar dataKey="profit" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Area Chart - User Activity</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="users" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pie Chart - Device Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Radar Chart - Department Performance</h2>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Team A" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Radar name="Team B" dataKey="B" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
    </Layout>
  );
};

export default Charts;
