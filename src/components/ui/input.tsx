"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// Define proper input props typing, extending from HTML input element
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // Adjust this for the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    // Using `const` as these values are not reassigned
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Define proper typing for the event
    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = e.currentTarget.getBoundingClientRect(); // Use `const` here
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              var(--yellow-500),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm 
            file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 
            dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] 
            focus-visible:ring-yellow-400 dark:focus-visible:ring-yellow-500 disabled:cursor-not-allowed 
            disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none 
            transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export { Input };
