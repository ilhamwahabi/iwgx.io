import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const icons = [
  { icon: faTwitter, label: 'twitter', url: 'https://twitter.com/ilhamwahabigx' },
  { icon: faLinkedin, label: 'linkedin', url: 'https://www.linkedin.com/in/ilham-wahabi' },
  { icon: faReddit, label: 'reddit', url: 'https://www.reddit.com/user/ilhamwahabi' },
  { icon: faGithub, label: 'github', url: 'https://github.com/iwgx' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-quarternary p-12 border-t border-gray-300 flex flex-col items-center">
      <div className="w-full md:w-1/3 lg:w-1/6 flex justify-around">
        {icons.map(({ icon, label, url }, index) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={index} aria-label={label}>
            <FontAwesomeIcon className="text-xl" icon={icon} />
          </a>
        ))}
      </div>
      <div className="text-sm md:text-base mt-6 text-center">© {currentYear} Ilham Wahabi. All Rights Reserved.</div>
    </footer>
  );
};
