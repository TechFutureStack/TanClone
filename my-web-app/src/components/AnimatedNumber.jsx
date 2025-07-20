// src/components/AnimatedNumber.jsx
import React, { useState, useEffect, useRef } from 'react';
import './AnimatedNumber.css'; // Ensure this CSS file exists

const AnimatedNumber = ({ targetNumber, animationDuration = 1500, initialDelay = 100, loopDelay = 5000 }) => {
  const [displayChars, setDisplayChars] = useState(String(targetNumber).split(''));
  const intervalRefs = useRef([]); // To hold references to setIntervals for cleanup
  const timeoutRefs = useRef([]); // To hold references to setTimeout for cleanup
  const isMounted = useRef(true); // To check if the component is still mounted

  useEffect(() => {
    isMounted.current = true; // Component is mounted

    const startAnimation = () => {
      // Clear any previous intervals and timeouts before starting a new animation cycle
      intervalRefs.current.forEach(clearInterval);
      intervalRefs.current = [];
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];

      const targetDigits = String(targetNumber).split('');
      // Initialize with random numbers or placeholder for the animation start
      const currentAnimationChars = targetDigits.map(char => (char === ',' ? ',' : String(Math.floor(Math.random() * 10))));
      setDisplayChars([...currentAnimationChars]); // Set initial random state

      targetDigits.forEach((targetDigit, index) => {
        if (targetDigit === ',') {
          // Commas don't animate, just set them immediately
          currentAnimationChars[index] = ',';
          setDisplayChars([...currentAnimationChars]); // Update immediately for commas
          return;
        }

        let animationCounter = 0; // Tracks how many times this digit has "scrolled"
        const maxScrolls = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Randomize number of scrolls (10-20)

        const interval = setInterval(() => {
          if (!isMounted.current) { // Prevent state updates if component unmounted
            clearInterval(interval);
            return;
          }

          // Stop animating this digit after it has scrolled enough or time is up
          if (animationCounter >= maxScrolls && (index * 50) > animationDuration) { // Add stagger for stopping
             if (isMounted.current) {
                clearInterval(interval);
                currentAnimationChars[index] = targetDigit; // Settle on the target digit
                setDisplayChars([...currentAnimationChars]);
             }
             return;
          }

          // Keep scrolling randomly
          if (isMounted.current) {
            currentAnimationChars[index] = String(Math.floor(Math.random() * 10));
            setDisplayChars([...currentAnimationChars]);
            animationCounter++;
          }
        }, 50); // Fast interval for rapid scrolling effect

        intervalRefs.current.push(interval);

        // Schedule the final digit to settle at its target after the animation duration
        const settleTimeout = setTimeout(() => {
            if (isMounted.current) {
                clearInterval(interval); // Ensure interval for this digit is cleared
                currentAnimationChars[index] = targetDigit; // Set the final digit
                setDisplayChars([...currentAnimationChars]);

                // If this is the last digit to settle, schedule the next loop
                if (index === targetDigits.length - 1) {
                    const loopTimeout = setTimeout(() => {
                        if (isMounted.current) {
                            startAnimation(); // Restart the animation
                        }
                    }, loopDelay);
                    timeoutRefs.current.push(loopTimeout);
                }
            }
        }, animationDuration + (index * 20)); // Stagger settling slightly

        timeoutRefs.current.push(settleTimeout);
      });
    };

    // Initial start of the animation after an initial delay
    const initialStartTimeout = setTimeout(() => {
      if (isMounted.current) {
        startAnimation();
      }
    }, initialDelay);
    timeoutRefs.current.push(initialStartTimeout);

    // Cleanup function: Clear all intervals and timeouts when component unmounts
    return () => {
      isMounted.current = false; // Mark component as unmounted
      intervalRefs.current.forEach(clearInterval);
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, [targetNumber, animationDuration, initialDelay, loopDelay]); // Dependencies

  return (
    <div className="animated-number-wrapper">
      {displayChars.map((char, index) => (
        <span key={index} className="animated-digit">
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedNumber;