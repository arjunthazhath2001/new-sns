"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

export default function Leader1() {
  return (
    <div className='bg-transparent max-w-full max-h-screen rounded-md flex flex-col items-center justify-start relative overflow-hidden mx-auto pt-28 text-black dark:text-white'>
      
      {/* Heading with fade-in effect */}
      <motion.h1 
        className='z-200 font-extrabold text-7xl'
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 1.5 }} // Duration of fade-in
      >
        OUR LEADERS
      </motion.h1>

      <div className="relative w-full flex items-center justify-center">
        
        {/* Image with fade-in and slide-up effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start with fade and slide from below
          animate={{ opacity: 1, y: 0 }}  // Fade in and slide up
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
    </div>
  );
}

 
