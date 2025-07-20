// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import AnimatedNumber from './AnimatedNumber'; // Import the new component
import backgroundVideo from './pookie_video.mp4';
// ... other imports for icons or other components

const HeroSection = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const subtitles = ["Together.", "Towards.", "Tomorrow."]; // Your cycling subtitles
  const [fade, setFade] = useState('fade-in');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust threshold as needed
      setScrolledDown(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setFade('fade-out');
      setTimeout(() => {
        setCurrentSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        setFade('fade-in');
      }, 500); // Duration of fade-out
    }, 3000); // Time each subtitle is visible

    return () => clearInterval(subtitleInterval);
  }, [subtitles.length]);

  return (
    <div className="hero-section-wrapper">
      {/* Video Background Element */}
      <video autoPlay loop muted playsInline className="hero-background-video">
        {/*
          IMPORTANT: Replace '/videos/your-background-video.mp4' with the actual path to your video.
          If your video is in the 'public' folder (e.g., public/videos/my-video.mp4),
          the path here would be '/videos/my-video.mp4'.
          For better browser compatibility, provide multiple source types.
        */}
        <source src={backgroundVideo} type="video/mp4" />
        {/* <source src="/videos/your-background-video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>
      {/* Optional: A subtle overlay for better text readability on top of the video */}
      <div className="video-overlay"></div>

      {/* Existing Content of Hero Section - Now positioned above the video */}
      <h1 className="hero-title">An EVM compatible L-1 chain powered by BPos consensus</h1>
      <p className={`hero-subtitle ${fade}`}>{subtitles[currentSubtitleIndex]}</p>

      <div className={`hero-content ${scrolledDown ? 'scrolled-down' : ''}`}>
        <div className="hero-buttons">
          <button className="white-paper-btn">White Paper</button>
          <button className="buy-now-hero-btn">Buy Now</button>
        </div>
        <div className="security-info-section">
          <div className="security-left-list">
            <p><svg className="tick-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg> KYC'd</p>
            <p><svg className="tick-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg> Verified</p>
            <p><svg className="tick-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17L4 12"/></svg> Secured</p>
          </div>
          <div className="security-right-logo">
            <span className="solidproof-text-container"><span className="solid-bold">SOLID</span>Proof</span>
          </div>
        </div>
      </div>

      {/* Devnet is Live Section (kept as per your request) */}
      <div className="devnet-section-wrapper">
        <h2 className="devnet-title">Devnet is Live</h2>
        <div className="devnet-stats-grid">
          {/* Example Stat Item: No. of Nodes */}
          <div className="devnet-stat-item">
            <svg className="devnet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span className="stat-label">No. of Nodes</span>
            <span className="stat-value">8</span>
          </div>

          {/* Example Stat Item: Avg Block Time */}
          <div className="devnet-stat-item">
            <svg className="devnet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="stat-label">Avg Block Time</span>
            <span className="stat-value">5.00 Sec</span>
          </div>

          {/* Example Stat Item: TPS */}
          <div className="devnet-stat-item">
            <svg className="devnet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 17L18 12L13 7"></path>
                <path d="M6 12H18"></path>
            </svg>
            <span className="stat-label">TPS</span>
            <span className="stat-value">3,200+</span>
          </div>

          {/* THIS IS THE UPDATED ONE: Latest Block */}
          <div className="devnet-stat-item">
            <svg className="devnet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
                <path d="M2 17L12 22L22 17"></path>
                <path d="M2 12L12 17L22 12"></path>
            </svg>
            <span className="stat-label">Latest Block</span>
            {/* Use the AnimatedNumber component here */}
            <AnimatedNumber targetNumber={2720117} duration={1500} delay={100} repeatDelay={5000} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;