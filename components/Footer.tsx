import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 mt-12">
      <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Gemini Voyage. All rights reserved.</p>
        <p className="text-sm text-gray-500 mt-1">Powered by AI, designed for the modern explorer.</p>
      </div>
    </footer>
  );
};

export default Footer;