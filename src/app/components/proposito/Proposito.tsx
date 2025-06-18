"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimation from "./LottieAnimation";

gsap.registerPlugin(ScrollTrigger);

const Proposito = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      {
        backgroundColor: "white",
        color: "#010101",
      },
      {
        backgroundColor: "black",
        color: "white",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 25%",
          end: "top 30%",
          scrub: 1.5,
          // markers: true,
          toggleActions: "restart none reverse restart",
        },
      }
    );
  }, []);
  return (
    <div
      ref={containerRef}
      className="py-[10%] px-[3%]  transition-colors bg-white text-black "
    >
      <p className="  text-[7rem] md:text-[2.5rem] font-semibold uppercase">
        Propósito
      </p>
      <div className="flex items-center gap-[6%] pr-[100px] md:pr-0 md:px-[6%] md:flex-col tab:flex-col tab:px-[6%]">
        <LottieAnimation />
        <div className="text-[26px] w-[40%] md:w-full tab:w-full ">
          <p className="mb-[1.77em]">
            Genera nace para democratizar la revolución de la Inteligencia
            Artificial en el ámbito empresarial con soluciones prácticas,
            innovadoras y a medida.
          </p>
          <p>
            La razón de nuestra existencia es implementar la IA hoy haciéndola
            asequible a todo tipo de empresas para contribuir a su éxito,
            competitividad y sostenibilidad en el mañana digital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proposito;
