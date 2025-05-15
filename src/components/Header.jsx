import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-700 dark:text-gray-200">
            Welcome back, <span className="font-semibold text-indigo-600 dark:text-indigo-400">User</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;