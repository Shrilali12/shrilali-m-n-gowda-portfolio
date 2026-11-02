// Preloader.jsx — Full-screen animated preloader that slides away after 2.2 s
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData.js';

export default function Preloader() {
  // Controls whether the preloader is visible
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after 2 200 ms
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        /* Outer panel — slides upward to reveal the page beneath */
        <motion.div
          key="preloader"
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Brand name container */}
          <motion.div
            className="relative text-5xl md:text-7xl font-black tracking-tighter select-none"
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background copy — faint dark-red, always visible */}
            <span className="text-red-900/30" aria-hidden="true">
              {personalInfo.brandName}.
            </span>

            {/* Foreground copy — white text with "." in black,
                revealed bottom-to-top via clip-path water-fill animation */}
            <motion.span
              className="absolute inset-0 text-white overflow-hidden"
              aria-hidden="true"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </motion.span>

            {/* Screen-reader accessible label */}
            <span className="sr-only">{personalInfo.brandName}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
