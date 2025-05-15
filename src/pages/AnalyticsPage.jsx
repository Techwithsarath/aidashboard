import React from 'react';
import Header from '../components/Header';

const AnalyticsPage = () => {
  const monthlyStats = [
    { month: 'Jan', interactions: 2500, accuracy: 88 },
    { month: 'Feb', interactions: 3200, accuracy: 90 },
    { month: 'Mar', interactions: 4100, accuracy: 92 },
    { month: 'Apr', interactions: 3800, accuracy: 91 },
    { month: 'May', interactions: 4500, accuracy: 94 },
  ];

  const topPerformers = [
    { name: 'AI Assistant 1', score: 98, tasks: 1234 },
    { name: 'Support Bot', score: 95, tasks: 987 },
    { name: 'Chat Helper', score: 92, tasks: 876 },
  ];

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

        {/* Performance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl shadow-md text-white">
            <h3 className="text-sm opacity-80">Total Users</h3>
            <p className="text-3xl font-bold">12.5k</p>
            <p className="text-sm mt-2">↑ 12% from last month</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl shadow-md text-white">
            <h3 className="text-sm opacity-80">Avg Response Time</h3>
            <p className="text-3xl font-bold">1.2s</p>
            <p className="text-sm mt-2">↓ 0.3s improvement</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl shadow-md text-white">
            <h3 className="text-sm opacity-80">Success Rate</h3>
            <p className="text-3xl font-bold">94.2%</p>
            <p className="text-sm mt-2">↑ 2.1% increase</p>
          </div>
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-xl shadow-md text-white">
            <h3 className="text-sm opacity-80">Active Sessions</h3>
            <p className="text-3xl font-bold">847</p>
            <p className="text-sm mt-2">↑ 24 more than usual</p>
          </div>
        </div>

        {/* Monthly Performance Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-lg font-semibold mb-4">Monthly Performance</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {monthlyStats.map((stat) => (
              <div key={stat.month} className="flex flex-col items-center flex-1">
                <div className="w-full bg-indigo-100 rounded-t-lg" 
                     style={{ height: `${stat.interactions/50}px` }}>
                  <div className="bg-indigo-500 w-full h-full rounded-t-lg opacity-80"></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{stat.month}</p>
                <p className="text-xs text-gray-500">{stat.interactions}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Top Performing AIs</h2>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={performer.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-indigo-600">#{index + 1}</span>
                  <div>
                    <h3 className="font-medium">{performer.name}</h3>
                    <p className="text-sm text-gray-500">{performer.tasks} tasks completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ width: `${performer.score}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium">{performer.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsPage;
