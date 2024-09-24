"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SignupFormDemo } from "./SignupFormDemo";

export function SignupModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Smooth fade-in and fade-out for the background
        >
          {/* Semi-transparent background */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} // Smooth transition for the background
            onClick={onClose} // Close the modal when the background is clicked
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Start invisible and small
            animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
            exit={{ opacity: 0, scale: 0.8 }} // Animate back to small size and invisible on exit
            transition={{ duration: 0.3 }} // Smooth transition for the modal
            className="relative bg-white dark:bg-black rounded-lg p-6 shadow-lg"
          >
            {/* Close button inside the form */}
            <button 
              onClick={onClose} 
              className="absolute top-10 right-11 text-red-500 dark:text-red-500 font-bold text-4xl"
            >
              &times; {/* Close icon */}
            </button>

            <SignupFormDemo />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
