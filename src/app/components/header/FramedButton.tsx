import React from "react";

const FramedButton = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200 dark:bg-gray-800">
      <button className="relative flex h-12 w-40 items-center justify-center border border-gray-800 bg-transparent font-cinzel text-lg text-gray-800 transition-all duration-500 hover:bg-white dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 overflow-hidden">
        <span className="relative z-10">Framed</span>

        {/* Background layers for hover effect */}
        <span className="absolute inset-0 bg-gray-200 dark:bg-gray-800 transition-all duration-500 scale-x-100 scale-y-100 hover:scale-x-0"></span>
        <span className="absolute inset-0 bg-gray-200 dark:bg-gray-800 transition-all duration-500 scale-x-100 scale-y-100 hover:scale-y-0"></span>
      </button>
    </div>
  );
};

export default FramedButton;
