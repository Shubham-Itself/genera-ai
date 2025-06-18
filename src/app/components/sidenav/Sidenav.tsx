"use client";
import React from "react";
import { SidenavType } from "@/app/types/type";
import CrossIconAnimation from "./CrossIconAnimation";

const items = [
  { label: "HOME", id: "home" },
  { label: "PROPÓSITO", id: "proposito" },
  { label: "GENERA CONSULTING", id: "genera-consulting" },
  { label: "GENERA DIGITALIZACION", id: "genera-digitalizacion" },
  { label: "GENERA LAB", id: "genera-lab" },
  { label: "CONTACTO", id: "contacto" },
];

const Sidenav = ({
  setIsSidenavOpen,
  isSidenavOpen,
  intialRenderForAnimation,
  setInitialRenderForAnimation,
}: SidenavType) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsSidenavOpen(false);
      setInitialRenderForAnimation("close");
    }
  };

  return (
    <div
      className={`fixed w-full h-screen top-0 left-0 z-[100] bg-[#000000cc] ${
        intialRenderForAnimation == "open"
          ? "sidenavElement"
          : intialRenderForAnimation == "close"
          ? "sidenavElementReverse "
          : "hidden"
      } flex justify-end`}
    >
      <div
        className={`bg-white w-[40%] md:w-full tab:w-[60%] h-screen overflow-y-auto ${
          isSidenavOpen ? "sidenavTransalteAnimation" : ""
        } relative`}
      >
        {isSidenavOpen && (
          <div
            className="absolute top-[10%] right-[6%] cursor-pointer"
            onClick={() => {
              setIsSidenavOpen(false);
              setInitialRenderForAnimation("close");
            }}
          >
            <CrossIconAnimation />
          </div>
        )}
        {isSidenavOpen && (
          <div className="pr-[4%] h-full flex flex-col justify-center items-end">
            <ul className={`text-[30px] font-semibold w-full listItems`}>
              {items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(item.id)}
                  className={`text-[#898989] hover:text-[#000] cursor-pointer transition-colors  font-campton-bold text-right mt-[20px] mr-[4%] ${
                    isSidenavOpen ? "sidenavListAnimation" : "hidden"
                  }`}
                  style={{
                    animationDelay: isSidenavOpen ? `${index * 0.5}s` : "0s",
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidenav;
