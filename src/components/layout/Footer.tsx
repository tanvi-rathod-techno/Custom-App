import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 bg-gray-100 mt-8">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Blog App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
