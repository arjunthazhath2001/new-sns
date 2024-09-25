"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Image from 'next/image';

export default function Leader1() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to track when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set the state to true when the section is in the viewport
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold to control when the animation triggers
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
      transition={{ duration: 1.5, ease: 'easeOut' }} // Smooth easing
      className='bg-transparent max-w-full max-h-screen rounded-md flex flex-col items-center justify-start relative overflow-hidden mx-auto pt-28 text-black dark:text-white'
    >
      {/* Heading with fade-in effect */}
      <motion.span 
        className='z-200 font-extrabold text-8xl'
        initial={{ opacity: 0 }} // Start invisible
        animate={isVisible ? { opacity: 1 } : {}} // Fade in when visible
        transition={{ duration: 1.5 }} // Duration of fade-in
      >
        OUR <span className='text-yellow-500'> LEADERS </span>
      </motion.span>

      <div className="relative w-full flex items-center justify-center">
        
        {/* Image with fade-in and slide-up effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with fade and slide from below
          animate={isVisible ? { opacity: 1, y: 0 } : {}}  // Fade in and slide up when visible
          transition={{ duration: 1.5, ease: 'easeOut' }} // Smooth easing
          className="z-20 mt-14"
        >
          <Image 
            src="/images/leaders.png" // Path to your image
            alt="Our Leaders" 
            width={1000} // Image width
            height={200} // Image height
            layout="intrinsic" // Maintain natural dimensions
            className="object-contain"
            priority={true}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
