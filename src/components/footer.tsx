import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <h5 className="text-lg">
      <span>© {currentYear} Ilham Wahabi. All Rights Reserved.</span>
    </h5>
  );
};
