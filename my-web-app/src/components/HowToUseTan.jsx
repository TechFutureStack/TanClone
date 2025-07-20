import React from "react";
import "./HowToUseTan.css";
import InfoIcon from "./info.png";
import WalletIcon from "./wallet.png";
import DownloadIcon from "./download.png";
import SpendIcon from "./spend.png";

const steps = [
  {
    icon: InfoIcon,
    label: "Inform yourself",
  },
  {
    icon: WalletIcon,
    label: "Choose your wallet",
  },
  {
    icon: DownloadIcon,
    label: "Get TAN",
  },
  {
    icon: SpendIcon,
    label: "Spend TAN",
  },
];

const HowToUseTan = () => (
  <div className="tan-process-section">
    <h2 className="tan-process-title">How To Use TAN</h2>
    <div className="tan-process-flow">
      {steps.map((step, idx) => (
        <React.Fragment key={step.label}>
          <div className="tan-process-step">
            <div className="tan-process-icon-wrap">
              <img
                src={step.icon}
                alt={step.label}
                className="tan-process-icon"
              />
            </div>
            <span className="tan-process-label">{step.label}</span>
          </div>
          {idx !== steps.length - 1 && (
            <div className="tan-process-arrow">
              <span />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default HowToUseTan;
