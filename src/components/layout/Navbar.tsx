// components/layout/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" alt="BlogApp" className="w-15 h-10" />
      
        
      </div>
      <div className="flex space-x-4">
        <button>Home</button>
        <button>Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
