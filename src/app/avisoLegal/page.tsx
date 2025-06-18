import React from "react";

const AvigoLegas = () => {
  const avisoLegal = [
    "Responsable de la Web: GENERA DIGITAL SERVICES SL",
    "NIF/CIF: B16494890",
    "Dirección: CALLE DE LA CALENDULA, 93 – ED E, MINIPARC III, SOTO D",
    "Teléfono:  623 46 39 87",
    "Correo electrónico: info@genera.net",
    "Genera IA  una plataforma en línea propiedad de  GENERA DIGITAL SERVICES SL , dedicada a ACTIVIDADES DE CONSULTORIA EMPRESARIAL y fue creada el día 08/05/2024.",
    "Propiedad Intelectual e Industrial",
    "Los derechos de propiedad intelectual e industrial de la web, así como los contenidos que alberga, son propiedad de GENERA DIGITAL SERVICES SL o de terceros. Queda prohibida la reproducción, distribución o modificación de los contenidos sin el permiso expreso de los propietarios.",
    "Política de Privacidad",
    "Puedes consultar nuestra política de privacidad en el siguiente enlace: Política de privacidad",
    "Ley Aplicable y Jurisdicción",
    "Estas condiciones se rigen por la legislación española y cualquier controversia se someterá a los juzgados y tribunales de Mataró de acuerdo con la legislación aplicable.",
  ];
  return (
    <div className="font-campton-medium">
      <div className="bg-black pt-[13%] pb-[5%] px-[5%] text-[200px] text-white leading-[1] md:text-[54px]">
        Aviso legal
      </div>
      <div className="pt-[2%] pr-[5%] pb-[4%] pl-[7%]">
        {avisoLegal.map((text, index) => (
          <p key={index} className="text-[16px] text-[#797c7f] mb-[1.77em]">
            {text}
          </p>
        ))}
        <p></p>
      </div>
    </div>
  );
};

export default AvigoLegas;
