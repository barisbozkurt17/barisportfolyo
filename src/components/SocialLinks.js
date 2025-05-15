import React from 'react';
import { FaGithub, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/barisbozkurt17',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-6 h-6" />,
      url: 'https://x.com/barisbozkurt17',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/barisbozkurt/',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube className="w-6 h-6" />,
      url: 'https://www.youtube.com/@barisbozkurt',
    },
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 