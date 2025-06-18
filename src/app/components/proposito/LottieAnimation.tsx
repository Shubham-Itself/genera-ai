"use client";
import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";
import animationData from "../../../animation_proposito.json";

const LottieAnimation = () => {
  const container = useRef<HTMLDivElement>(null);
  const animationInstanceRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => {
      if (container.current && !animationInstanceRef.current) {
        animationInstanceRef.current = Lottie.default.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData,
        });
      }
    });

    return () => {
      if (animationInstanceRef.current) {
        animationInstanceRef.current.destroy();
        animationInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-[720px] h-full md:w-full md:h-full" ref={container} />
  );
};

export default LottieAnimation;
