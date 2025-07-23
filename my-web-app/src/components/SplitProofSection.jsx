import React, { useEffect, useState } from "react";
import "./SplitProofSection.css";

const leftBoxes = [
  { title: "No. of Nodes", value: "8" },
  { title: "Avg Block Time", value: "5.00 Sec" },
  { title: "TPS", value: "3,200+" },
  { title: "Latest Block", value: "2791032" }
];

const proofBadges = ["KYC'd", "Verified", "Secured"];

const SplitProofSection = () => {
  const [activeBox, setActiveBox] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox(idx => (idx + 1) % leftBoxes.length);
    }, 1900);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="split-section-root">
      {/* LEFT PANEL */}
      <div className="split-section-left">
        <div className="devnet-title">Devnet is Live</div>
        <div className="devnet-boxes">
          {leftBoxes.map((box, idx) => (
            <div
              key={box.title}
              className={`devnet-box${idx === activeBox ? " active" : ""}`}
              style={{
                opacity: idx === activeBox ? 1 : 0,
                zIndex: idx === activeBox ? 1 : 0
              }}
            >
              <div className="devnet-box-title">{box.title}</div>
              <div className="devnet-box-value">{box.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="split-section-right">
        <div className="solidproof-logo">SOLID<span>Proof</span></div>
        <div className="proof-badges">
          {proofBadges.map(label => (
            <span className="proof-badge" key={label}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SplitProofSection;
