import React, { useEffect, useState } from "react";
import TanLogo from "./tan.png";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  const [bgGone, setBgGone] = useState(false);

  useEffect(() => {
    // Step 1: Begin fade after 1.2s
    const bgFade = setTimeout(() => setBgGone(true), 1200);
    // Step 2: Hide splash after 2.0s
    const endSplash = setTimeout(() => onFinish && onFinish(), 2000);
    return () => {
      clearTimeout(bgFade);
      clearTimeout(endSplash);
    };
  }, [onFinish]);

  return (
    <div className={`splash-root${bgGone ? " bg-gone" : ""}`}>
      <img
        src={TanLogo}
        alt="TAN Logo"
        className={`splash-logo${bgGone ? " logo-fly" : ""}`}
      />
    </div>
  );
}
