import React from "react";
import Header from "../components/global/Header";
import { Home, Information, Form } from "../components/preventFraud";

const PreventFraud = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="bg-bbvaBlueDark">
          <Header />
        </div>
        <div className="bg-gray-200 basis-auto grow">
          <div className="flex flex-col">
            <Home />
            <Information />
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreventFraud;
