import React, { useEffect, useState } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const [sloganActive, setSloganActive] = useState(false);
  const [titleReady, setTitleReady] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setTitleReady(true), 1200); // Delay typing start
    const timer2 = setTimeout(() => setSloganActive(true), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const titleText = "An EVM compatible L-1 chain powered by BPos consensus";

  return (
    <div className={`hero-section-wrapper${shrink ? ' is-shrunk' : ''}`}>
      <div className="hero-cloud-glow"></div>
      <h1 className={`hero-title ${titleReady ? 'show' : ''}`}>
        {titleText.split("").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.04}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <div className={`hero-slogan${sloganActive ? ' show' : ''}`}>
        <span>Together</span>
        <span>Towards</span>
        <span>Tomorrow</span>
      </div>
    </div>
  );
}
