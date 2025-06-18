import React from "react";

const PoliticaDePrivacidad = () => {
  const politicaDePrivacidad = [
    "En GENERA DIGITAL SERVICES SL  respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. Recopilamos información personal como nombre, dirección, correo electrónico y número de teléfono solo cuando la proporcionamos voluntariamente para ACTIVIDADES DE CONSULTORIA EMPRESARIAL",
    "Uso de los Datos Personales",
    "Utilizamos tus datos personales solo para los fines para los que fueron proporcionados. No compartiremos tus datos con terceros sin tu consentimiento.",
    "Seguridad de los Datos",
    "Tomamos medidas de seguridad para proteger tus datos personales y garantizar su confidencialidad.",
    "Derechos de Acceso, Rectificación y Eliminación",
    "Tienes derecho a acceder, rectificar o eliminar tus datos personales. Si deseas ejercer estos derechos, contáctanos en info@genera.net",
    "Cambios en la Política de Privacidad",
    "Nos reservamos el derecho de actualizar nuestra política de privacidad en el futuro. Cualquier cambio se publicará en esta página.",
    "Fecha de la última actualización: [05 Enero del 2025]",
  ];
  return (
    <div className="font-campton-medium">
      <div className="bg-black pt-[13%] pb-[5%] px-[5%] text-[109px] text-white leading-[1] md:text-[54px]">
        Política de privacidad
      </div>
      <div className="pt-[2%] pr-[5%] pb-[4%] pl-[7%]">
        {politicaDePrivacidad.map((text, index) => (
          <p key={index} className="text-[16px] text-[#797c7f] mb-[1.77em]">
            {text}
          </p>
        ))}
        <p></p>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidad;
