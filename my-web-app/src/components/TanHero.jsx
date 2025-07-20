import React from "react";
import "./TanHero.css";
import Coin from "./coin.png"; // Place your coin graphic here

const TanHero = () => (
  <section className="tan-hero">
    <div className="tan-hero-content">
      <h1 className="tan-hero-title">
        An <span className="tan-hero-accent">Inflation Protected</span> Native Coin: TAN
      </h1>
      <p className="tan-hero-subtext">
        TAN is the native cryptocurrency of TAN, offering scalability, low fees, and strong security.
        With a capped supply of 30 billion, TAN powers payments, staking, and ecosystem rewards.
      </p>
      <a href="/learn-more" className="tan-hero-btn">Learn More</a>
    </div>
    <div className="tan-hero-graphic">
      <img src={Coin} alt="TAN Coin" className="tan-hero-coin" />
    </div>
  </section>
);

export default TanHero;
