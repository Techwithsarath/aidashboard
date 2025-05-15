import React, { useState } from 'react';
import Header from '../components/Header';

const AvatarsPage = () => {
  const [avatars] = useState([
    { id: 1, name: 'AI Assistant 1', status: 'Active', interactions: 1234, accuracy: 95, lastActive: '2h ago' },
    { id: 2, name: 'AI Helper', status: 'Training', interactions: 856, accuracy: 88, lastActive: '1h ago' },
    { id: 3, name: 'Support Bot', status: 'Offline', interactions: 2341, accuracy: 92, lastActive: '5m ago' },
    { id: 4, name: 'Chat Assistant', status: 'Active', interactions: 543, accuracy: 89, lastActive: '1d ago' },
    { id: 5, name: 'Task Bot', status: 'Maintenance', interactions: 1567, accuracy: 94, lastActive: '30m ago' },
  ]);

  return (
    <div className="dark:bg-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-6 dark:text-white">Avatar Management</h1>
          
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-gray-500 text-sm">Total Avatars</h3>
              <p className="text-2xl font-bold text-indigo-600">5</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-gray-500 text-sm">Active Now</h3>
              <p className="text-2xl font-bold text-green-600">2</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-gray-500 text-sm">Avg. Accuracy</h3>
              <p className="text-2xl font-bold text-blue-600">91.6%</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-gray-500 text-sm">Total Interactions</h3>
              <p className="text-2xl font-bold text-purple-600">6.5k</p>
            </div>
          </div>

          {/* Avatar Table */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Avatar Details</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interactions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {avatars.map((avatar) => (
                    <tr key={avatar.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{avatar.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${avatar.status === 'Active' ? 'bg-green-100 text-green-800' : 
                            avatar.status === 'Offline' ? 'bg-gray-100 text-gray-800' :
                            avatar.status === 'Training' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'}`}>
                          {avatar.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {avatar.interactions.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-gray-900">{avatar.accuracy}%</span>
                          <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 rounded-full h-2" style={{ width: `${avatar.accuracy}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {avatar.lastActive}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AvatarsPage;