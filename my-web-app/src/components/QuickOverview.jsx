import React, { useState } from "react";
import "./QuickOverview.css";
import Employee from "./employee.png";
import Skyscrapers from "./skyscrapers.png";
import Coding from "./coding.png";

const cardData = [
  {
    title: "Individuals",
    description: "Learn more",
    image: Employee,
    link: "/home/individuals",
  },
  {
    title: "Businesses",
    description: "Learn more",
    image: Skyscrapers,
    link: "/home/businesses",
  },
  {
    title: "Developers",
    description: "Learn more",
    image: Coding,
    link: "/home/developers",
  },
];

const QuickOverview = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="quick-container">
      <h2 className="quick-title">Get A Quick Overview</h2>
      <div className="quick-grid">
        {cardData.map((card, idx) => (
          <a
            href={card.link}
            key={idx}
            className={`quick-card${activeIdx === idx ? " quick-card--active" : ""}`}
            onMouseEnter={() => setActiveIdx(idx)}
            onMouseLeave={() => setActiveIdx(null)}
            tabIndex={0}
            aria-label={`Learn more about ${card.title}`}
            onFocus={() => setActiveIdx(idx)}
            onBlur={() => setActiveIdx(null)}
          >
            <div className="glow-ring"></div>
            <img
              src={card.image}
              alt={card.title}
              className={`quick-icon${activeIdx === idx ? " quick-icon--active" : ""}`}
            />
            <div className="quick-label">{card.title}</div>
            <div className="quick-sub">{card.description}</div>
            {activeIdx === idx && (
              <>
                <div className="glow-label">{card.title.toLowerCase()}</div>
                <div className="glow-line"></div>
              </>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickOverview;
