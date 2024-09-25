import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LinkProps } from "next/link"; // Import the LinkProps type

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {/* Wrap the dropdown content with AnimatePresence */}
      <AnimatePresence>
        {active === item && (
          <motion.div
            key={item} // Important for AnimatePresence to track the key
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }} // Smooth exit animation
            transition={transition}
          >
            {children && (
              <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-0">
                <motion.div
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="bg-white border dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden dark:border-white/[0.2]"
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    className="w-max h-full p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full dark:border dark:bg-black dark:border-white/[0.2] bg-white shadow-sm flex justify-center space-x-9 px-2 py-3"
    >
      {children}
    </nav>
  );
};


export const ProductItem = ({
  title,
  description,
  href,
  src,
  setActive,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
  setActive: (item: string | null) => void; // Pass setActive function as a prop
}) => {
  return (
    <Link href={href}>
      <motion.div
        className="flex space-x-2 cursor-pointer"
        onClick={() => setActive(null)} // Close dropdown when an item is clicked
        whileTap={{ scale: 0.95 }} // Optional: Add a tap effect for interaction feedback
      >
        <Image
          src={src}
          width={140}
          height={70}
          alt={title}
          className="flex-shrink-0 rounded-md shadow-md"
        />
        <div>
          <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
            {title}
          </h4>
          <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: LinkProps & { children: React.ReactNode }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
