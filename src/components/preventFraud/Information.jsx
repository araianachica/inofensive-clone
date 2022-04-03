import React from "react";
import Scam from "../../assets/img/scam.png";
import Suport from "../../assets/img/suport.png";

const Information = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-300">
        <img className="w-32 mx-auto" src={Suport} alt="" />
        <div className="flex flex-col px-4 py-8">
          <span className="font-bold text-xl">Aclaraciones</span>
          <p className="font-semibold text-lg pt-2">
            BBVA pone a tu disposición un centro especializado para atender tus
            solicitudes de aclaraciones.
          </p>
          <span className="mt-2">
            Una aclaración será el medio por el cual solicitas la revisión de
            las operaciones o movimientos que aparezcan con algún problema o te
            generen dudas, en tu estado de cuenta y requieres sean analizados,
            recibiendo posteriormente una respuesta ante ello.
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <img className="w-32 mx-auto" src={Scam} alt="" />
        <div className="flex flex-col bg-bbvaBlueMedium px-4 py-8">
          <p className="font-bold text-lg text-white">
            Que no te invada la angustia o el miedo
          </p>
          <span className="mt-2 text-white">
            Recuerda que los ciberdelincuentes utilizan tus emociones para
            aprovecharse del momento y hacerte caer en sus engaños.
          </span>
        </div>
      </div>
    </>
  );
};

export default Information;
