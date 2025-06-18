"use client";
import { div, p } from "framer-motion/client";
import React from "react";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const FooterDetails = [
    {
      title: "Dirección",
      information: [
        "Torre dAra Av. Cabrera 36, Planta Baixa 08302 Mataró, Barcelona",
      ],
    },
    {
      title: "Email",
      information: ["info@generaconsulting.ai", "+34 623 46 39 87"],
    },
    {
      title: "Redes Sociales",
      information: ["Facebook", "Twitter", "Instagram"],
    },
  ];
  return (
    <div className="pt-[5%] px-[4%] pb-[20px] bg-[#101010] text-white font-campton-medium ">
      <div className="pb-[54px] border-b border-b-[#2d2d2d]">
        <h1 className="text-[3.563em] font-medium mb-[48px]  md:mb-[20px] tab:mb-[48px] md:text-[2.5rem] tab:text-[5rem] tab:w-full">
          GENERA
        </h1>
        <div className="flex justify-between md:flex-col flex-wrap md:gap-[20px]">
          {FooterDetails.map((item, index) => (
            <div key={index} className="w-[25%] md:w-full">
              <p className="text-[1.188em] font-medium mb-[10px]">
                {item.title}
              </p>
              <ul>
                {item.information.map((information, index) => (
                  <li
                    key={index}
                    className="w-[70%] text-[16px] mb-[10px] text-[#C5C7C1]"
                  >
                    {information}{" "}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-[21.67%] md:w-full">
            <p className="text-[1.188em] font-medium mb-[10px]">Newsletter</p>
            <div className="flex justify-between border-b pb-[10px] border-b-[#2d2d2d] items-center">
              <div className="flex gap-[10px] items-center">
                <img
                  src="/assets/footerAssets/email_icon.svg"
                  alt=""
                  className="w-[19px]"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="bg-[#101010] text-[17px]"
                />
              </div>

              <img
                src="/assets/footerAssets/right_arrow.svg"
                alt=""
                className="w-[15px]"
              />
            </div>
            <div className="flex items-center gap-[10px] pt-[10px]">
              <label className="flex">
                <input type="checkbox" className="input" />
                <span className="custom-checkbox"></span>
              </label>
              <p className="text-[16px]  text-[#C5C7C1]">
                I agree to the Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[16px]  text-[#C5C7C1] mt-[20px]">
          Genera Consulting © 2025. Todos los derechos reservados. |{" "}
          <span
            onClick={() => router.push("/politica-de-privacidad/")}
            className="cursor-pointer"
          >
            Politica De Privacidad
          </span>{" "}
          |{" "}
          <span
            onClick={() => router.push("/aviso-legal/")}
            className="cursor-pointer"
          >
            Aviso Legal
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
