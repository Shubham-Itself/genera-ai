import React from "react";

const WeAreGenera = () => {
  return (
    <div className="relative w-full h-[612px] md:h-[400px] tab:h-[500px] overflow-hidden py-[5%] px-[4%] h-[700px] tab:h-[650px] md:h-[600px]">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="/assets/weAreGeneraAssets/weAreGenraVideo.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-[1] leading-[1] text-white text-[7em] md:text-[2.5rem] font-semibold font-campton-medium flex gap-[200px] md:flex-col md:gap-[30px] ">
        {/* Add your content here */}
        <h1>
          WE ARE <br />
          GENERE,
        </h1>
        <div className="bg-white h-[1px] w-[40%] self-end md:w-[90%] md:self-start"></div>
      </div>
    </div>
  );
};

export default WeAreGenera;
