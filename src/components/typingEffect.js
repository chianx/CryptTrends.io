// components/TypingEffect.js
"use client"
import React, { useEffect, useState } from 'react';
import styles from './typingEffect.module.css'; // Import your CSS module

const TypingEffect = ({size}) => {
  const tagline = "Innovating Your Crypto Experience.";
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < tagline.length -1) {
        setText((prev) => prev + tagline[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Typing speed, adjust as needed

    return () => clearInterval(interval);
  }, [tagline]);


  return (
    <h1 className={styles.typingText} style={{ color: "white", fontSize: size }}>
      {text}
      <span className={styles.cursor}>|</span>
    </h1>
  );
};

export default TypingEffect;
