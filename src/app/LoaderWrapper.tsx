"use client";

import { useState, useEffect } from "react";

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50  ">
      <video autoPlay loop muted>
        <source
          src="/assets/loaderAnimation/loader_animation_video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  ) : (
    children
  );
};

export default LoaderWrapper;
