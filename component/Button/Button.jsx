"use client"
import React, { useState } from 'react';
import styles from './Button.module.css';

const Button = ({ backgroundColor, textColor, border, padding, children }) => {
  // Hover state to toggle styles
  const [isHovered, setIsHovered] = useState(false);

  // Default button style
  const buttonStyle = {
    backgroundColor: isHovered ? '#4158EE' : backgroundColor || '#fff',
    color: isHovered ? '#fff' : textColor || '#4158EE',
    border: border || 'none',
    padding: padding || '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s' // Smooth hover transition
  };

  return (
    <button
      className={styles.container}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
