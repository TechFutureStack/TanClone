import React from "react";
import "./TanAppSection.css";

const TANAppSection = () => (
  <section className="tan-app-section">
    <div className="tan-app-info">
      <h2 className="tan-app-title">
        Launch the <span className="tan-app-highlight">TAN App</span>
      </h2>
      <p className="tan-app-desc">
        Experience the full TAN ecosystem through a secure, easy-to-use application.
        Manage your assets, stake TAN, and access all DeFi features from one dashboard.
      </p>
      <a className="tan-app-btn" href="/launch-app">
        Launch App
      </a>
    </div>
  </section>
);

export default TANAppSection;
