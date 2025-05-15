import React, { useState } from 'react';
import Header from '../components/Header';
import { useTheme } from '../context/ThemeContext';

const SettingsPage = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    language: 'english',
    privacy: 'public'
  });

  const handleChange = (key, value) => {
    if (key === 'darkMode') {
      setDarkMode(value);
    } else {
      setSettings(prev => ({
        ...prev,
        [key]: value
      }));
    }
  };

  return (
    <div className="dark:bg-gray-800 min-h-screen transition-colors duration-200">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Settings</h1>
        
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">General Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium dark:text-white">Dark Mode</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Enable dark theme for the dashboard</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => handleChange('darkMode', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Other settings remain the same but add dark mode classes */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium dark:text-white">Notifications</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Receive notifications about updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications}
                    onChange={(e) => handleChange('notifications', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Updates</h3>
                  <p className="text-sm text-gray-500">Receive email notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailUpdates}
                    onChange={(e) => handleChange('emailUpdates', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;