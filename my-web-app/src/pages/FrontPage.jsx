// src/pages/FrontPage.jsx
import React from 'react';
import SuperSeedBanner from '../components/SuperSeedBanner';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SmarterConsensusSection from '../components/SmarterConsensusSection';
import StackedCardRow from '../components/StackedCardRow';
import QuickOverview from '../components/QuickOverview';
import TanHero from '../components/TanHero';
import HowToUseTan from '../components/HowToUseTan';
import TANAppSection from '../components/TanAppSection';
import '../pages/FrontPage.css'; // Make sure this import is present

const FrontPage = () => {
  return (
    <div className="front-page-layout">
      <SuperSeedBanner />
      <Header />
      
      {/* This new div will take up the remaining vertical space and center its content */}
      <div className="main-content-area">
        <HeroSection />
      </div>
      <SmarterConsensusSection />
      <StackedCardRow />
      <TanHero />
      <QuickOverview />
      <HowToUseTan />
      <TANAppSection />
      {/* ... Add other components for different sections of your page here */}
    </div>
  );
};

export default FrontPage;