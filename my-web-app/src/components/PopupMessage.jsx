// src/components/PopupMessage.jsx
import React from 'react';
import './PopupMessage.css';

export default function PopupMessage({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>×</button>
        <p>🚀 <strong>Super Sale is Live!</strong><br />Why waiting? Join us soon.</p>
      </div>
    </div>
  );
}
