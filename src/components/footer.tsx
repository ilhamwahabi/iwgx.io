import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-lg bg-white p-12 border-t border-gray-300 flex justify-center">
      <span>© {currentYear} Ilham Wahabi. All Rights Reserved.</span>
    </footer>
  );
};
