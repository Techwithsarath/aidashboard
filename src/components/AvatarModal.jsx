import React from 'react';

const AvatarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-100">
        <h2 className="text-2xl font-bold mb-6 font-poppins text-gray-800">Create New Avatar</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Avatar</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors duration-200">
              <input
                type="file"
                className="hidden"
                id="avatar-upload"
              />
              <label htmlFor="avatar-upload" className="cursor-pointer text-gray-600">
                Click to upload or drag and drop
              </label>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-8">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-poppins"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200 font-poppins">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;