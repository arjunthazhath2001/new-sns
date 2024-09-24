"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const institutions = [
  "SNS Academy: An International CBSE fingerprint school",
  "Dr.SNS Rajalakshmi College of Arts and Sciences",
  "SNS College of Technology",
  "SNS College of Engineering",
  "SNS College of Pharmacy and Health Sciences",
  "SNS College of Allied Health Sciences",
  "SNS College of Education",
  "SNS B-SPINE: Business School",
  "SNS College of Nursing",
  "SNS College of Physiotherapy",
];

export function SignupFormDemo() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleSelect = (institution: string) => {
    setSelectedInstitution(institution);
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-sm w-full mx-auto rounded-none md:rounded-lg p-3 md:p-6 shadow-input border border-yellow-500 bg-white dark:bg-black">
      <h2 className="font-bold text-lg text-neutral-800 dark:text-neutral-200">
        Admission Enquiry Form
      </h2>
      <p className="text-neutral-600 text-xs max-w-xs mt-1 dark:text-neutral-300">
        Please select an institution of your choice and fill in your details.
      </p>

      <form className="my-6" onSubmit={handleSubmit}>

        {/* Custom Dropdown - Moved to the top */}
        <LabelInputContainer className="mb-3 relative">
          <Label>Select your school/college</Label>
          <div
        className="h-14 w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md text-sm dark:text-white cursor-pointer relative z-20 flex items-center"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
        {selectedInstitution || "Select an institution"}
        </div>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-50 mt-4 w-full bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-md overflow-y-auto overflow-x-hidden shadow-lg"
                style={{ maxHeight: '50vh', marginTop: '70px' }} // Added margin to push it down and show the select box
              >
                {institutions.map((institution, idx) => (
                  <motion.li
                    key={idx}
                    className="px-4 py-2 text-xs hover:bg-yellow-500 text-black dark:text-white dark:hover:text-black cursor-pointer"
                    onClick={() => handleSelect(institution)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {institution}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </LabelInputContainer>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-3">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="" type="text" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-9 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]  transition-all duration-500"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-400 dark:via-yellow-400 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-red-600 dark:via-orange-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-1 w-full", className)}>{children}</div>;
};
