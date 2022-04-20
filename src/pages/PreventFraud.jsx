// import Slider from "components/preventFraud/Slider";
import React, { useState } from "react";
import Header from "../components/global/Header";
import {
  Home,
  Information,
  Form,
  Slider,
  Services,
  Environment,
  Cards,
  Footer,
} from "../components/preventFraud";

const PreventFraud = () => {
  const [acces, setAcces] = useState(false);
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="bg-bbvaBlueDark">
          <Header acces={acces} setAcces={setAcces} />
        </div>
        {acces ? <Form /> : null}
        <div className="bg-gray-200 basis-auto grow">
          <div className="flex flex-col">
            <Slider />
            <Services />
            <Environment />
            <Cards />
            <Home />
            {/* <Information /> */}

            {/* <Form /> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreventFraud;
