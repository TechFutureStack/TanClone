import React from 'react';
import './SmarterConsensusSection.css';

const SmarterConsensusSection = () => {
  const features = [
    {
      title: 'Block Per Reward',
      description: 'Block Reward Proof of Stake powers TAN, combining PoS benefits with unique reward distribution for unparalleled scalability and efficient validation.',
      link: '#',
    },
    {
      title: 'Validator Incentive',
      description: 'Validators in BPoS earn rewards through a share of block rewards, not just transaction fees, receiving a portion of each block\'s TAN rewards.',
      link: '#',
    },
    {
      title: 'Subsidy and Incentives',
      description: 'Rewards are distributed for subsidy against burning of TAN and incentives for stakers, validators and hodlers.',
      link: '#',
    },
    {
      title: 'Transaction Fee Burning',
      description: 'Transaction fees in TAN are fully burned, reducing supply over time, creating deflationary pressure, and enhancing the value of tokens for holders.',
      link: '#',
    },
    {
      title: 'Halving',
      description: 'Every four years, block rewards halve, creating a deflationary model that steadily reduces new token supply, ensuring controlled and predictable inflation rates.',
      link: '#',
    },
  ];

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`feature-${index}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className="smarter-consensus-section">
      <h2 className="smarter-consensus-title">The Smarter Consensus BPoS</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            id={`feature-${index}`}
            className="feature-card"
            onMouseMove={(e) => handleMouseMove(e, index)}
          >
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <a href={feature.link} className="view-more-btn">View More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmarterConsensusSection;
