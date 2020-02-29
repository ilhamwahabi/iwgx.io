import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faReddit, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const icons = [
  { icon: faFacebookF, url: 'https://www.facebook.com/wahabi.gx' },
  { icon: faTwitter, url: 'https://twitter.com/ilhamwahabigx' },
  { icon: faLinkedin, url: 'https://www.linkedin.com/in/ilham-wahabi' },
  { icon: faReddit, url: 'https://www.reddit.com/user/ilhamwahabi' },
  { icon: faGithub, url: 'https://github.com/iwgx' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white p-12 border-t border-gray-300 flex flex-col items-center">
      <div className="w-full md:w-1/3 lg:w-1/6 flex justify-around">
        {icons.map(({ icon, url }, index) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
            <FontAwesomeIcon className="text-xl" icon={icon} />
          </a>
        ))}
      </div>
      <div className="text-sm md:text-base mt-6 text-center">© {currentYear} Ilham Wahabi. All Rights Reserved.</div>
    </footer>
  );
};
