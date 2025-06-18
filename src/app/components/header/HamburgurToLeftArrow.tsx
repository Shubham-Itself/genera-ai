"use client";
import React, { useState } from "react";
import { Menu, ArrowLeft } from "lucide-react";

const HamburgurToLeftArrow = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-8 h-8">
        <div
          className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${isHovered ? "opacity-0 translate-x-2" : "opacity-100"
            }`}
        >
          <Menu className="h-6 w-6 text-gray-500" />
        </div>
        <div
          className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${isHovered ? "opacity-100" : "opacity-0 -translate-x-2"
            }`}
        >
          <ArrowLeft className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default HamburgurToLeftArrow;
