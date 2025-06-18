"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.to(textRef.current, {
      scale: 5,
      opacity: 0,

      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 43.8%",
        end: "30% top",
        scrub: true,

        // markers: true,
      },
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <div className="w-full h-[calc(100vh-81.52px)] flex justify-center px-[3%] flex-col overflow-hidden  md:flex-col-reverse tab:flex-col-reverse ">
      <p className="text-[40px] mb-[50px] font-metaplus md:text-[30px] font-bold">
        Reimagina los límites de tu empresa con soluciones avanzadas de IA.
      </p>
      <p
        ref={textRef}
        className="scale text-[25vw] font-campton-medium leading-[0.8em] relative bannerText w-fit md:hidden tab:hidden "
      >
        Genera
      </p>
      <p className="scale text-[25vw] font-campton-medium leading-[0.8em] relative bannerText w-fit md:block md:text-[23vw] md:mb-[20px] hidden tab:text-[23vw] tab:block tab:mb-[20px]">
        Genera
      </p>
    </div>
  );
};

export default HeroSection;
