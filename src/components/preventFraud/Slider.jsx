import React from "react";
import SliderImg from "../../assets/img/slider1.png";

const Slider = () => {
  return (
    <>
    <a href="https://www.bbva.mx/personas/productos/seguros.html">
      <div className="">
        <div className="flex flex-col">
          <img className="w-full m-auto" src={SliderImg} alt="" />
        </div>
      </div>
      </a>
    </>
  );
};

export default Slider;
