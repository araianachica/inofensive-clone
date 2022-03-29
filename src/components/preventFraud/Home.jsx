import React from "react";
import Safe from "../../assets/img/safe.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        <img className="w-32 mx-auto" src={Safe} alt="" />
        <div className="flex flex-col bg-bbvaBlue px-4 py-8">
          <p className="font-bold text-lg text-white">Protégete de mensajes fraudulentos</p>
          <span className="text-white mt-2">
            Revisa de qué se trata este tipo de ataque y mantente a salvo de los
            ciberdelincuentes.
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
