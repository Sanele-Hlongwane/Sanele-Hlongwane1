import React from "react";
import { motion } from "framer-motion";

// Define the props interface for the TabButton
interface TabButtonProps {
  active: boolean; // Specify that 'active' is a boolean
  selectTab: () => void; // Specify that 'selectTab' is a function
  children: React.ReactNode; // Specify that 'children' can be any valid React node
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black dark:text-white" : "text-gray-700 dark:text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-black dark:hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1  mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
