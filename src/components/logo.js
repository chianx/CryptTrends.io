// components/CryptTrendLogo.js
import React from 'react';

const CryptTrendLogo = () => {
  return (
    <div style={styles.logoContainer}>
      <span style={styles.crypt}>CryptTrend</span>
      <span style={styles.io}>.io</span>
    </div>
  );
}

const styles = {
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: '"Arial", sans-serif',
    margin:10,
  },
  crypt: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#FFFFFF',  // White for "Crypt"
  },
  trend: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#FFFFFF',  // White for "Trend"
    marginLeft: '5px',
  },
  io: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#2AA29F',  // Teal for ".io"
    marginLeft: '5px',
  },
};

export default CryptTrendLogo;
