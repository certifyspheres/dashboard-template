import React, { useState } from 'react';
import Layout from '../components/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Users, Eye, MousePointer, Clock, Calendar, Download } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Analytics = ({ setIsAuthenticated }) => {
  const [dateRange, setDateRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('pageviews');

  // Sample analytics data
  const pageViewsData = [
    { date: '2024-01-09', pageviews: 1200, users: 800, sessions: 950 },
    { date: '2024-01-10', pageviews: 1350, users: 900, sessions: 1100 },
    { date: '2024-01-11', pageviews: 1100, users: 750, sessions: 850 },
    { date: '2024-01-12', pageviews: 1500, users: 1000, sessions: 1200 },
    { date: '2024-01-13', pageviews: 1800, users: 1200, sessions: 1400 },
    { date: '2024-01-14', pageviews: 1650, users: 1100, sessions: 1300 },
    { date: '2024-01-15', pageviews: 1900, users: 1300, sessions: 1500 }
  ];

  const topPagesData = [
    { page: '/dashboard', views: 2500, percentage: 35 },
    { page: '/analytics', views: 1800, percentage: 25 },
    { page: '/users', views: 1200, percentage: 17 },
    { page: '/settings', views: 900, percentage: 13 },
    { page: '/profile', views: 700, percentage: 10 }
  ];

  const deviceData = [
    { name: 'Desktop', value: 65, color: '#3B82F6' },
    { name: 'Mobile', value: 25, color: '#10B981' },
    { name: 'Tablet', value: 10, color: '#F59E0B' }
  ];

  const trafficSourcesData = [
    { source: 'Direct', visitors: 3200, percentage: 45 },
    { source: 'Google Search', visitors: 2100, percentage: 30 },
    { source: 'Social Media', visitors: 980, percentage: 14 },
    { source: 'Referrals', visitors: 560, percentage: 8 },
    { source: 'Email', visitors: 210, percentage: 3 }
  ];

  const realtimeData = [
    { time: '12:00', users: 45 },
    { time: '12:05', users: 52 },
    { time: '12:10', users: 48 },
    { time: '12:15', users: 61 },
    { time: '12:20', users: 55 },
    { time: '12:25', users: 67 },
    { time: '12:30', users: 72 }
  ];

  const handleExport = (type) => {
    trackEvent('analytics_export', 'admin', type);
    alert(`Exporting ${type} data...`);
  };

  const StatCard = ({ title, value, change, changeType, icon: Icon, color }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
          <div className="flex items-center mt-2">
            {changeType === 'increase' ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              changeType === 'increase' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {change}% vs last period
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <Layout setIsAuthenticated={setIsAuthenticated}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Track your website performance and user behavior</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="1d">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button
              onClick={() => handleExport('pdf')}
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Page Views"
            value="12.5K"
            change={15.3}
            changeType="increase"
            icon={Eye}
            color="bg-blue-500"
          />
          <StatCard
            title="Unique Visitors"
            value="8.2K"
            change={8.7}
            changeType="increase"
            icon={Users}
            color="bg-green-500"
          />
          <StatCard
            title="Avg. Session Duration"
            value="4m 32s"
            change={-2.1}
            changeType="decrease"
            icon={Clock}
            color="bg-purple-500"
          />
          <StatCard
            title="Bounce Rate"
            value="32.4%"
            change={-5.2}
            changeType="increase"
            icon={MousePointer}
            color="bg-orange-500"
          />
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Page Views Trend */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Overview</h3>
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="pageviews">Page Views</option>
                <option value="users">Users</option>
                <option value="sessions">Sessions</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={pageViewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="date" 
                  stroke="#6B7280"
                  fontSize={12}
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey={selectedMetric} 
                  stroke="#3B82F6" 
                  fill="#3B82F6" 
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Real-time Users */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Real-time Users</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Live</span>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-primary">72</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active users right now</p>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={realtimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Device Breakdown */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Device Types</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {deviceData.map((device, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: device.color }}
                    ></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{device.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{device.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Top Pages</h3>
            <div className="space-y-4">
              {topPagesData.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{page.page}</p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${page.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{page.views.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{page.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Traffic Sources</h3>
            <div className="space-y-4">
              {trafficSourcesData.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{source.source}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{source.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {source.visitors.toLocaleString()} visitors
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals and Conversions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Goals & Conversions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">2.4%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">+0.3% vs last month</p>
            </div>
            <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">156</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Goal Completions</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">+12 vs last week</p>
            </div>
            <div className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">$4,250</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
              <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">+8.5% vs last month</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;