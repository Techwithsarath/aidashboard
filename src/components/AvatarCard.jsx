import React, { useState } from 'react';
import EditAvatarModal from './EditAvatarModal';

const AvatarCard = ({ avatar, onUpdate }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // Randomly assign status for demo purposes
  const isActive = Math.random() > 0.5;

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <img
            src={avatar.avatar}
            alt={avatar.first_name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary/20"
          />
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${isActive ? 'bg-green-500' : 'bg-gray-400'} text-white px-4 py-1 rounded-full text-sm font-medium shadow-md`}>
            {isActive ? 'Active' : 'Offline'}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mt-6">
          {avatar.first_name} {avatar.last_name}
        </h3>
        <p className="text-gray-500 text-sm mt-1">AI Assistant</p>
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Edit Profile
        </button>
      </div>

      <EditAvatarModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        avatar={avatar}
        onSave={onUpdate}
      />
    </>
  );
};

export default AvatarCard;