// Preloader.jsx
// Full-screen overlay shown briefly while the page loads, then fades out.
// Props: { onComplete } — called after the exit animation finishes.

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData.js';

export default function Preloader({ onComplete }) {
  // Split the brand name into first name and the rest
  const firstName = personalInfo.firstName;                        // "Shrilali"
  const lastName = personalInfo.brandName.replace(firstName, '').trim(); // "M N Gowda"

  // Call onComplete after the total animation duration (2s hold + ~0.6s exit ≈ 2.6s)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      /* Outer container — covers the whole viewport */
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}            // slight scale-up on exit for polish
      transition={{ duration: 0.6, ease: 'easeInOut', delay: 2 }} // start exit at 2 s
    >
      {/* ── Brand name ── */}
      <div className="flex flex-col items-center gap-1 select-none">
        {/* First name — large, bold, white */}
        <motion.span
          className="text-4xl sm:text-5xl font-bold text-white tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          {firstName}
        </motion.span>

        {/* Last name — slightly smaller, dimmer */}
        <motion.span
          className="text-xl sm:text-2xl font-medium text-white/60 tracking-[0.3em] uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
        >
          {lastName}
        </motion.span>
      </div>

      {/* ── Red progress bar — fixed at the bottom of the screen ── */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10">
        <motion.div
          className="h-full bg-[#ff2a2a]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
