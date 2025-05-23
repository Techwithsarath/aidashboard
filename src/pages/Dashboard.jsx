import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AvatarCard from '../components/AvatarCard';
import CreateAvatarModal from '../components/CreateAvatarModal';

const Dashboard = () => {
  const [avatars, setAvatars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Static fallback avatars (no fetch)
    setAvatars([
      { id: 1, first_name: 'Sarah', last_name: 'Wilson', avatar: '/image1.png' },
      { id: 2, first_name: 'Vanyaa', last_name: 'Dhishi', avatar: '/image3.png' },
      { id: 3, first_name: 'Emma', last_name: 'Taylor', avatar: '/image4.png' },
    ]);
    setLoading(false);
  }, []);

  const handleAvatarUpdate = (updatedAvatar) => {
    const updatedAvatarWithImage = {
      ...updatedAvatar,
      avatar: updatedAvatar.newImage instanceof File
        ? URL.createObjectURL(updatedAvatar.newImage)
        : updatedAvatar.newImage || updatedAvatar.avatar
    };

    setAvatars(prevAvatars =>
      prevAvatars.map(avatar =>
        avatar.id === updatedAvatar.id ? updatedAvatarWithImage : avatar
      )
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-2xl text-brand-600 animate-pulse-slow dark:text-brand-300">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {avatars.slice(0, 3).map(avatar => (
            <AvatarCard
              key={avatar.id}
              avatar={avatar}
              onUpdate={handleAvatarUpdate}
            />
          ))}
        </div>
      </main>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 btn-primary rounded-full p-4 flex items-center gap-2"
      >
        <span className="text-2xl">+</span>
        <span>Create Avatar</span>
      </button>

      <CreateAvatarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Dashboard;
