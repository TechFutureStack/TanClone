import React, { useEffect, useRef, useState } from 'react';
import './DeepDiveIntoTAN.css';
import { motion, useAnimation } from 'framer-motion';
import { FaNodeJs, FaReact, FaDatabase, FaCloud, FaCodeBranch, FaProjectDiagram } from 'react-icons/fa';

const nodes = [
  { id: 'center', label: 'Core Engine', icon: <FaProjectDiagram />, layer: 0 },
  { id: 'n1', label: 'React UI', icon: <FaReact />, layer: 1 },
  { id: 'n2', label: 'Node API', icon: <FaNodeJs />, layer: 1 },
  { id: 'n3', label: 'Database', icon: <FaDatabase />, layer: 1 },
  { id: 'n4', label: 'Cloud Sync', icon: <FaCloud />, layer: 1 },
  { id: 'n5', label: 'Version Control', icon: <FaCodeBranch />, layer: 1 },
  { id: 'n6', label: 'Auth Service', icon: <FaCloud />, layer: 2 },
  { id: 'n7', label: 'Notification', icon: <FaCloud />, layer: 2 },
  { id: 'n8', label: 'Logging', icon: <FaCloud />, layer: 2 },
  { id: 'n9', label: 'Analytics', icon: <FaCloud />, layer: 2 },
  { id: 'n10', label: 'Cache', icon: <FaCloud />, layer: 2 },
  { id: 'n11', label: 'Monitoring', icon: <FaCloud />, layer: 2 },
  { id: 'n12', label: 'Backup', icon: <FaCloud />, layer: 2 },
  { id: 'n13', label: 'Queue', icon: <FaCloud />, layer: 2 },
  { id: 'n14', label: 'Security', icon: <FaCloud />, layer: 2 },
  { id: 'n15', label: 'Billing', icon: <FaCloud />, layer: 2 },
  { id: 'n16', label: 'Search', icon: <FaCloud />, layer: 2 },
];

const DeepDiveIntoTAN = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
          controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls, inView]);

  const center = 400;
  const radius = [0, 180, 300];
  const nodePositions = nodes.map((node, i) => {
    const angle = (2 * Math.PI * i) / (node.layer === 0 ? 1 : 8 * node.layer);
    return {
      ...node,
      x: center + radius[node.layer] * Math.cos(angle),
      y: center + radius[node.layer] * Math.sin(angle),
    };
  });

  return (
    <div className="web-container" ref={containerRef}>
      <svg width="800" height="800">
        {nodePositions.map((node, index) => {
          if (node.layer === 0) return null;
          return (
            <motion.path
              key={index}
              d={`M${center},${center} Q${(center + node.x) / 2},${(center + node.y) / 2 - 40} ${node.x},${node.y}`}
              stroke="rgba(255, 255, 255, 0.4)"
              fill="transparent"
              className="animated-path"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { pathLength: 0 },
                visible: {
                  pathLength: 1,
                  transition: { delay: 0.2 * index, duration: 1 },
                },
              }}
            />
          );
        })}
        {nodePositions.map((node, index) => (
          <motion.g
            key={node.id}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2 * index, duration: 0.6 },
              },
            }}
          >
            <foreignObject
              x={node.x - 40}
              y={node.y - 40}
              width={80}
              height={80}
              className="node-block"
            >
              <div className="node-tooltip">
                <div className="node-icon">{node.icon}</div>
                <div className="node-label">{node.label}</div>
              </div>
            </foreignObject>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default DeepDiveIntoTAN;
