// FlowChart.jsx
import React, { useEffect, useRef, useState } from 'react';
import './HowToUseTan.css';

const steps = [
  { id: 1, title: 'Start', content: 'Begin the TAN journey' },
  { id: 2, title: 'User Registers', content: 'Sign up securely' },
  { id: 3, title: 'Select Wallet', content: 'Choose your digital wallet' },
  { id: 4, title: 'Get TAN Token', content: 'Receive TAN tokens' },
  { id: 5, title: 'Transaction Processing', content: 'Securely handle transactions' },
  { id: 6, title: 'Success ', content: 'You are done!' },
];

const FlowChart = () => {
  const chartRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (visible && activeStep < steps.length) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, visible]);

  return (
    <div className="flowchart-wrapper" ref={chartRef}>
      <h2 className="flowchart-title">TAN Flow</h2>
      <div className="flowchart-horizontal">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`node-box ${activeStep > index ? 'active' : ''}`}>
              <div className="bow-shape">
                {activeStep > index && (
                  <div className="box-content">
                    <h3>{step.title}</h3>
                    <p>{step.content}</p>
                  </div>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`connector ${activeStep > index ? 'active-line' : ''}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FlowChart;