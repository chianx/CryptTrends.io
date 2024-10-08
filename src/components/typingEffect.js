// components/TypingEffect.js
"use client"
import React, { useEffect, useState } from 'react';
import styles from './typingEffect.module.css'; // Import your CSS module

const TypingEffect = () => {
  const tagline = "Innovating Your Crypto Experience.";
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"]; // Add more colors as needed
  const [text, setText] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < tagline.length -1) {
        setText((prev) => prev + tagline[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Typing speed, adjust as needed

    return () => clearInterval(interval);
  }, [tagline]);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 500); // Color change speed, adjust as needed

    return () => clearInterval(colorInterval);
  }, [tagline]);

  return (
    <h1 className={styles.typingText} style={{ color: colors[colorIndex] }}>
      {text}
      {/* <span className={styles.cursor}>|</span> */}
    </h1>
  );
};

export default TypingEffect;
