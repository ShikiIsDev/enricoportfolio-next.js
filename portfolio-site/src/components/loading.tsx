"use client";
import "./loading.css";
import { motion, useScroll, useSpring } from "framer-motion";


const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

const loading = () => {
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
    </>
  );
};

export default loading