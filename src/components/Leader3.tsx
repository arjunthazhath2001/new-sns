"use client";
import React, { useEffect, useState, useRef } from 'react';
import { TracingBeamDemo } from './TracingBeamDemo';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

export default function Leader3() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }} // Start with fade and slide from below
      animate={isVisible ? { opacity: 1, y: 0 } : {}}  // Animate to visible and slide up
      transition={{ duration: 1, ease: 'easeOut' }}  // Smooth easing
      className="w-full"
    >
      <TracingBeamDemo />
    </motion.div>
  );
}
