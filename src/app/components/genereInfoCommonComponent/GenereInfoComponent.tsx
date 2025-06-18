import { GeneraInfoComponentType } from "@/app/types/type";
import React from "react";

const GenereInfoComponent = ({
  heading,
  details,
  backgroundColor,
  color,
  position,
  textAlignment,
  detailColor,
}: GeneraInfoComponentType) => {
  return (
    <div>
      <div
        className={`py-[5%] px-[4%] flex flex-col  ${backgroundColor} ${color} h-[700px] tab:h-[650px] md:h-[600px]`}
      >
        <p
          className={`text-[7em] leading-[1] md:text-[2.5rem] tab:text-[5rem] tab:w-full font-semibold ${textAlignment}  w-[60%] md:w-[100%]   ${position}`}
        >
          {heading}
        </p>
        {details !== "" && (
          <p
            className={`text-[30px] md:text-[22px] tab:text-[32px] tab:leading-[42px] leading-[55px] md:leading-[1.3em] px-[5%] ${detailColor} mt-[80px] md:mt-[20px] tab:mt-[40px]`}
          >
            {details}
          </p>
        )}
      </div>
    </div>
  );
};

export default GenereInfoComponent;
