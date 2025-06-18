"use client";
import React, { useEffect, useState } from "react";

import HamburgurToLeftArrow from "./HamburgurToLeftArrow";
import Sidenav from "../sidenav/Sidenav";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [intialRenderForAnimation, setInitialRenderForAnimation] = useState("");

  useEffect(() => {
    if (isSidenavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidenavOpen]);

  return (
    <>
      <div className="flex justify-between h-[81.52px] shadow-header-box-shadow items-center px-[1%] sticky top-0 z-50 bg-white">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <img
            src="/assets/headerLogo/logo.png"
            alt="header logo"
            className="md:w-[60%] w-[35%] "
          />
        </div>

        <div className="flex items-center space-x-12">
          {/* I.A. Button */}
          <div className="relative group cursor-pointer">
            <div className="w-16 h-16 md:w-12 md:h-12 relative flex items-center justify-center">
              {/* Top Left Corner */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full"></div>
              {/* Top Right Corner */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full"></div>
              {/* Bottom Left Corner */}
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full"></div>
              {/* Bottom Right Corner */}
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-full group-hover:h-full"></div>
              {/* Text */}
              <span className="text-black font-medium tracking-[0.2em] md:tracking-[0.05em] relative z-10 transition-colors duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-black">
                I. A.
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              setIsSidenavOpen(true);
              setInitialRenderForAnimation("open");
            }}
          >
            <HamburgurToLeftArrow />
          </div>
        </div>
      </div>
      <Sidenav
        setIsSidenavOpen={setIsSidenavOpen}
        isSidenavOpen={isSidenavOpen}
        intialRenderForAnimation={intialRenderForAnimation}
        setInitialRenderForAnimation={setInitialRenderForAnimation}
      />
    </>
  );
};

export default Header;
