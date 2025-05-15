import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/avatars', label: 'Avatars', icon: '👤' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 
                    md:w-64 w-16 z-10">
      <div className="mb-8 p-4 md:block hidden">
        <Logo />
      </div>
      <div className="md:hidden p-4 text-center">
        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg 
                        flex items-center justify-center mx-auto">
          <span className="text-white text-sm font-bold">AI</span>
        </div>
      </div>
      <nav className="space-y-2 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
              ${location.pathname === item.path 
                ? 'bg-brand-50 dark:bg-indigo-900/50 text-brand-600 dark:text-indigo-300' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium md:block hidden">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
