// ScrollReveal.jsx
// Lightweight wrapper that fades + slides up any section when it enters the viewport.
// • opacity 0 → 1, y 30 → 0, duration 0.6s, no bounce
// • once: false  → re-animates each time you scroll past (up or down)
// • amount: 0.1  → triggers when just 10% of the section is visible (fast feel)

import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
