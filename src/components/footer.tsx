import React from 'react';
import { FaTwitter, FaLinkedin, FaReddit, FaGithub } from 'react-icons/fa';

const icons = [
  { Icon: FaTwitter, label: 'twitter', url: 'https://twitter.com/ilhamwahabigx' },
  { Icon: FaLinkedin, label: 'linkedin', url: 'https://www.linkedin.com/in/ilham-wahabi' },
  { Icon: FaReddit, label: 'reddit', url: 'https://www.reddit.com/user/ilhamwahabi' },
  { Icon: FaGithub, label: 'github', url: 'https://github.com/iwgx' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-quarternary p-12 border-t border-gray-300 flex flex-col items-center">
      <div className="w-full md:w-1/3 lg:w-1/6 flex justify-around">
        {icons.map(({ Icon, label, url }, index) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={index} aria-label={label}>
            <Icon className="text-xl" />
          </a>
        ))}
      </div>
      <div className="text-sm md:text-base mt-6 text-center">© {currentYear} Ilham Wahabi. All Rights Reserved.</div>
    </footer>
  );
};
