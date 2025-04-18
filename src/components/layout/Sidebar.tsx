// components/layout/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 p-4">
      <h3 className="font-semibold">Suggestions</h3>
      <div className="mt-4">
        <div className="flex items-center space-x-2 mb-4">
          <img
            src="/profile.jpg"
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <span className="font-semibold">User Name</span>
            <p className="text-sm text-gray-500">Suggestion</p>
          </div>
        </div>
        {/* Repeat the above for more users */}
      </div>
    </div>
  );
};

export default Sidebar;
