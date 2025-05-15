import React, { useState, useEffect } from 'react';

const EditAvatarModal = ({ isOpen, onClose, avatar, onSave }) => {
  const [editedAvatar, setEditedAvatar] = useState({
    first_name: '',
    last_name: '',
    avatar: '',
    newImage: null
  });

  const [imagePreview, setImagePreview] = useState('');

  // Sync avatar prop with local state when modal opens
  useEffect(() => {
    if (avatar && isOpen) {
      setEditedAvatar({
        first_name: avatar.first_name || '',
        last_name: avatar.last_name || '',
        avatar: avatar.avatar || '',
        newImage: null
      });
      setImagePreview(avatar.avatar || '');
    }
  }, [avatar, isOpen]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setEditedAvatar(prev => ({
          ...prev,
          newImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Avatar</h2>
        <div className="space-y-4">
          {/* Image Upload */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 rounded-full object-cover ring-4 ring-indigo-50"
              />
              <label className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                📷
              </label>
            </div>
          </div>

          {/* Name Inputs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              value={editedAvatar.first_name}
              onChange={(e) =>
                setEditedAvatar({ ...editedAvatar, first_name: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              value={editedAvatar.last_name}
              onChange={(e) =>
                setEditedAvatar({ ...editedAvatar, last_name: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSave(editedAvatar);
                onClose();
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAvatarModal;
