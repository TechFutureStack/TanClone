// src/App.jsx
import React from 'react';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    // You can directly return FrontPage if App doesn't need specific styling
    // that isn't handled by FrontPage itself or the global reset.
    // This reduces one unnecessary DOM node.
    <FrontPage />
  );
}

export default App;