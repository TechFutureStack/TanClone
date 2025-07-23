import React, { useState, useEffect, useRef } from 'react';
import SplashScreen from '../components/SplashScreen';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SmarterConsensusSection from '../components/SmarterConsensusSection';
import StackedCardRow from '../components/StackedCardRow';
import QuickOverview from '../components/QuickOverview';
import TanHero from '../components/TanHero';
import HowToUseTan from '../components/HowToUseTan';
import TANAppSection from '../components/TanAppSection';
import SplitProofSection from '../components/SplitProofSection';
import DeepDiveIntoTAN from '../components/DeepDiveIntoTAN';
import '../pages/FrontPage.css';

export default function FrontPage() {
  const [splashDone, setSplashDone] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const popupTimerRef = useRef(null);

  // Function to start/reset the 30s timer
  const startPopupTimer = () => {
    clearTimeout(popupTimerRef.current);
    popupTimerRef.current = setTimeout(() => {
      setShowPopup(true);
    }, 15000); // 30 seconds
  };

  useEffect(() => {
    // Start the first timer on load
    startPopupTimer();
    return () => clearTimeout(popupTimerRef.current);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    startPopupTimer(); // Restart the timer when closed
  };

  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}

      <div className="front-page-layout">
        <Header />
        <div className="main-content-area">
          <HeroSection />
        </div>
        <SplitProofSection />
        <DeepDiveIntoTAN />
        <SmarterConsensusSection />
        <StackedCardRow />
        <TanHero />
        <QuickOverview />
        <HowToUseTan />
        <TANAppSection />
      </div>

      {showPopup && (
        <div className="sale-popup">
          <span>🚀 Super Sale is Live! Why Waiting? Join us soon!</span>
          <button className="close-popup" onClick={handleClosePopup}>×</button>
        </div>
      )}
    </>
  );
}
