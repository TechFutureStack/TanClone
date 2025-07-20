// src/components/AnimatedWin50KLink.jsx
import React, { useState, useRef } from 'react';
import './AnimatedWin50KLink.css';

const AnimatedWin50KLink = () => {
  const [coins, setCoins] = useState([]);
  const linkRef = useRef(null);
  let coinId = useRef(0);

  const handleMouseEnter = () => {
    const newCoins = [];
    for (let i = 0; i < 8; i++) {
      coinId.current += 1;
      const startX = (Math.random() - 0.5) * 40; // -20px to +20px horizontal offset
      const startY = (Math.random() - 0.5) * 20; // -10px to +10px vertical offset

      // Calculate the END position in JavaScript
      // This logic replaces the problematic CSS calc() line
      const endX = startX + (startX > 0 ? 60 : -60); // Move further right if startX is positive, else further left
      const endY = startY + 50; // Move further downwards

      newCoins.push({
        id: coinId.current,
        x: startX,
        y: startY,
        endX: endX, // Pass calculated end X to CSS
        endY: endY, // Pass calculated end Y to CSS
        delay: Math.random() * 0.3,
      });
    }
    setCoins(newCoins);
  };

  const handleAnimationEnd = (id) => {
    setCoins(prevCoins => prevCoins.filter(coin => coin.id !== id));
  };

  return (
    <a
      href="#win50k"
      className="win-50k-link-animated"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setCoins([])} // Optional: Clear coins immediately if mouse leaves
      ref={linkRef}
    >
      Win $50K
      {coins.map(coin => (
        <div
          key={coin.id}
          className="coin-splash"
          style={{
            '--start-x': `${coin.x}px`,
            '--start-y': `${coin.y}px`,
            '--end-x': `${coin.endX}px`, // Pass calculated end X
            '--end-y': `${coin.endY}px`, // Pass calculated end Y
            '--animation-delay': `${coin.delay}s`,
          }}
          onAnimationEnd={() => handleAnimationEnd(coin.id)}
        ></div>
      ))}
    </a>
  );
};

export default AnimatedWin50KLink;