import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ProductSection() {
  const text = "What we make ?";
  const [displayedText, setDisplayedText] = useState("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      setDisplayedText("");
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setDisplayedText(""); // reset when scrolling out of view so it types again
    }
  }, [isInView]);

  return (
    <section className="relative w-full flex flex-col items-center pt-8 pb-48 bg-[#fdfbf7] overflow-hidden -mt-10 md:-mt-20 z-30">
      {/* Liquid / Jelly Transition Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20" style={{ transform: 'translateY(-99%)' }}>
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+2px)] h-[120px] md:h-[200px]"
          fill="#fdfbf7"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.69,32.22,118.82,60.89,190.17,68A367.6,367.6,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div
        ref={containerRef}
        className="w-full relative flex items-center justify-center -mt-16 py-10"
      >
        <h2 className="text-[50px] md:text-[90px] font-sans font-bold text-[#1a1a1a] flex items-center">
          {displayedText}
          {/* Blinking Cursor */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 0.6, repeatType: "reverse" }}
            className="inline-block ml-3 w-[6px] md:w-[12px] h-[50px] md:h-[90px] bg-[#1a1a1a]"
          />
        </h2>
      </div>
    </section>
  );
}
