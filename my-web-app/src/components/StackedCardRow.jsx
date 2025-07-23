import React, { useEffect, useState } from "react";
import {
  FaRocket, FaLock, FaGasPump, FaEthereum,
  FaShieldAlt, FaChartLine, FaBolt, FaMoneyBill
} from "react-icons/fa";
import "./StackedCardRow.css";

const features = [
  { title: "Inflation Protection", description: "TAN ensures sustainability and long-term value.", icon: <FaMoneyBill />, },
  { title: "Fast", description: "Transact in seconds. Get confirmed in minutes.", icon: <FaRocket />, },
  { title: "Secure", description: "World's most robust blockchain technology.", icon: <FaLock />, },
  { title: "Low Gas Fee", description: "TAN's deflationary model protects purchasing power and incentivizes long-term adoption.", icon: <FaGasPump />, },
  { title: "EVM compatible", description: "TAN ensures seamless Ethereum EVM compatibility.", icon: <FaEthereum />, },
  { title: "Decentralized", description: "TAN uses BPoS for secure decentralization.", icon: <FaShieldAlt />, },
  { title: "Scalable", description: "TAN scales seamlessly, handling millions instantly.", icon: <FaChartLine />, },
  { title: "60% Fault Tolerance", description: "TAN's BPoS ensures security and scalability.", icon: <FaBolt />, }
];

const INTERVAL = 2400;

const StackedCardRow = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(idx => (idx + 1) % features.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // Calculate visible cards: previous, current, next (circular)
  const prevIdx = (activeIdx - 1 + features.length) % features.length;
  const nextIdx = (activeIdx + 1) % features.length;
  const visible = [prevIdx, activeIdx, nextIdx];

  return (
    <div className="features-carousel-centered">
      <h2 className="features-title">Features</h2>
      <div className="carousel-window">
        {visible.map((idx, position) => (
          <div
            key={idx}
            className={`carousel-card-clipped ${
              idx === activeIdx
                ? "active"
                : position === 0
                ? "left"
                : "right"
            }`}
          >
            <div className="card-icon">{features[idx].icon}</div>
            <div className="card-title">{features[idx].title}</div>
            <div className="card-description">{features[idx].description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCardRow;
