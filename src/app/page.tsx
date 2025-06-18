import React from "react";
import "./globals.css";
import HeroSection from "./components/herosection/HeroSection";
import Proposito from "./components/proposito/Proposito";
import GenereInfoComponent from "./components/genereInfoCommonComponent/GenereInfoComponent";
import WeAreGenera from "./components/weAreGenera/WeAreGenera";

const Home = () => {
  const generaCommonInfo = [
    {
      id: 1,
      heading: "GENERA CONSULTING",
      details:
        "Genera Consulting te acompaña en la digitalización y el crecimiento de tu negocio de forma ágil y rentable.\n A través de un enfoque estratégico y la posibilidad de acceder a subvenciones como Kit Consulting, diseñamos planes personalizados que facilitan la adopción de tecnología y aseguran resultados tangibles.",
      backgroundColor: "bg-white",
      color: "text-black font-campton-medium",
      position: "self-end md:self-start",
      textAligment: "text-end md:text-start",
      detailColor: "text-[#797C7F]",
    },
    {
      id: 2,
      heading: "GENERA DIGITALIZACION",
      details: "",
      backgroundColor: "bg-black",
      color: "text-white font-campton-medium",
      position: "self-start",
      textAligment: "text-start",
      detailColor: "",
    },

    {
      id: 3,
      heading: "GENERA LAB",
      details:
        "Espacio donde la creatividad y la tecnología convergen para abordar los desafíos contemporáneos. En nuestro lab de innovación, transformamos la dualidad entre lo existente y lo posible en ideas disruptivas, desarrollando soluciones digitales que responden a las necesidades de hoy.",
      backgroundColor: "bg-white",
      color: "text-black font-campton-medium",
      position: "self-end md:self-start",
      textAligment: "text-end md:text-start",
      detailColor: "text-[#797C7F]",
    },
  ];
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="proposito">
        <Proposito />
      </section>
      {generaCommonInfo.map((information) => (
        <section id={information.heading.toLowerCase().replace(/\s+/g, '-')} key={information.id}>
          <GenereInfoComponent
            heading={information.heading}
            details={information.details}
            backgroundColor={information.backgroundColor}
            color={information.color}
            position={information.position}
            textAlignment={information.textAligment}
            detailColor={information.detailColor}
          />
        </section>
      ))}
      <section id="contacto">
        <WeAreGenera />
      </section>
    </>
  );
};

export default Home;
