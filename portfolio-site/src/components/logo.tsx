// components/Logo.js
"use client"

import { motion } from 'framer-motion';
import "./logo.css";

const Logo = () => {
  return (
    <motion.div
      className='circle'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.span
        className="text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Enrico
      </motion.span>
    </motion.div>
  );
};

export default Logo;
