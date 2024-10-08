// components/SocialMediaIcons.js
"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialMediaIcons = () => {
  // Inline styles for the icon container and links
  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px auto',
    position:"fixed",
    bottom:0,
  };

  const iconLinkStyle = {
    color: '#fff', // White font color
    fontSize: '24px', // Icon size
    margin: '0 10px',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  };

  const iconLinkHoverStyle = {
    color: '#00aced', // Color on hover
  };

  // State for hover effect
  const [hoveredIcon, setHoveredIcon] = React.useState(null);

  return (
    <div style={iconContainerStyle}>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        style={hoveredIcon === 'facebook' ? { ...iconLinkStyle, ...iconLinkHoverStyle } : iconLinkStyle}
        onMouseEnter={() => setHoveredIcon('facebook')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        style={hoveredIcon === 'instagram' ? { ...iconLinkStyle, ...iconLinkHoverStyle } : iconLinkStyle}
        onMouseEnter={() => setHoveredIcon('instagram')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
        style={hoveredIcon === 'twitter' ? { ...iconLinkStyle, ...iconLinkHoverStyle } : iconLinkStyle}
        onMouseEnter={() => setHoveredIcon('twitter')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noreferrer"
        style={hoveredIcon === 'youtube' ? { ...iconLinkStyle, ...iconLinkHoverStyle } : iconLinkStyle}
        onMouseEnter={() => setHoveredIcon('youtube')}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
