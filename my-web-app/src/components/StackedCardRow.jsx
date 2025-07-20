import React from "react";
import "./StackedCardRow.css";
import { FaRocket, FaLock, FaGasPump, FaEthereum, FaShieldAlt, FaChartLine, FaBolt, FaMoneyBill } from "react-icons/fa";

const features = [
  {
    title: "Inflation Protection",
    description: "TAN ensures sustainability and long-term value.",
    icon: <FaMoneyBill />
  },
  {
    title: "Fast",
    description: "Transact in seconds. Get confirmed in minutes.",
    icon: <FaRocket />
  },
  {
    title: "Secure",
    description: "World's most robust blockchain technology.",
    icon: <FaLock />
  },
  {
    title: "Low Gas Fee",
    description: "TAN's deflationary model protects purchasing power and incentivizes long-term adoption.",
    icon: <FaGasPump />
  },
  {
    title: "EVM compatible",
    description: "TAN ensures seamless Ethereum EVM compatibility.",
    icon: <FaEthereum />
  },
  {
    title: "Decentralized",
    description: "TAN uses BPoS for secure decentralization.",
    icon: <FaShieldAlt />
  },
  {
    title: "Scalable",
    description: "TAN scales seamlessly, handling millions instantly.",
    icon: <FaChartLine />
  },
  {
    title: "60% Fault Tolerance",
    description: "TAN's BPoS ensures security and scalability.",
    icon: <FaBolt />
  }
];

const StackedCardRow = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">Features</h2>
      <div className="scroll-wrapper">
        <div className="card-row">
          {[...features, ...features].map((feature, index) => (
            <div className="card" key={index}>
              <div className="card-icon">{feature.icon}</div>
              <div className="card-title">{feature.title}</div>
              <div className="card-description">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedCardRow;
