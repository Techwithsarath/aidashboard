import React from 'react';

const CreateAvatarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Avatar</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input type="text" className="input-field" placeholder="Enter name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Avatar</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer">
              <div className="text-gray-500">Drop your image here, or click to select</div>
            </div>
          </div>
          <div className="flex gap-3 justify-end mt-8">
            <button onClick={onClose} className="px-6 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="btn-primary">
              Create Avatar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAvatarModal;