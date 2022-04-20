import React from "react";

const Environment = () => {
  return (
    <>
      <div className="flex flex-row bg-green-100 p-12">
          <div className="flex flex-col">
              <div className="flex flex-row">
                  <img className="h-8" src="https://www.bbva.mx/content/dam/public-web/global/images/icons/sostenibilidad.svg" alt="" />
                  <span className="ml-2 text-green-500">Medio ambiente</span>
              </div>
              <div>En BBVA, la sostenibilidad significa crear oportunidades para poder conseguirlo.</div>
              <a href="https://www.bbva.mx/empresas/servicios-digitales/migracion-pago-de-servicios-cie.html" className="mr-auto text-blue-400">Saber mas</a>
          </div>
          <div>
              <img src="https://www.bbva.mx/content/dam/public-web/mexico/images/Outstanding_home_personas-sostenibilidad.jpg.img.768.1636740289325.jpg" alt="" />
          </div>
      </div>
    </>
  );
};

export default Environment;
