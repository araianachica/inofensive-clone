import React from "react";
import BBVA from "../../assets/img/bbva.svg";

export const Footer = () => {
  return (
    <div className="bg-bbvaBlueDark p-16 flex flex-col">
      <img className="h-12 m-auto " src={BBVA} alt="" />
      <div className="flex flex-row mt-8">
        <a
          className="text-blue-500 text-lg mr-2"
          href="https://www.bbva.mx/personas/aviso-legal.html"
        >
          Aviso legal
        </a>
        <a
          className="text-blue-500 text-lg mr-2"
          href="https://www.bbva.mx/personas/aviso-legal.html"
        >
          Mapa del sitio
        </a>
        <a
          className="text-blue-500 text-lg mr-2"
          href="https://www.bbva.mx/personas/aviso-legal.html"
        >
          Avisos de privacidad
        </a>
        <a
          className="text-blue-500 text-lg mr-2"
          href="https://www.bbva.mx/personas/aviso-legal.html"
        >
          Consulta los costos y las comisiones de nuestros productos
        </a>
      </div>
      <div className="flex flex-row mx-auto mt-8">
        <div className="flex flex-row mx-auto bg-bbvaBlue rounded-full mr-2">
          <a href="https://www.facebook.com/bbvaenmexico/?1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00abfb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
        </div>
        <div className="flex flex-row mx-auto bg-bbvaBlue rounded-full mr-2">
          <a href="https://www.facebook.com/bbvaenmexico/?1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00abfb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
        </div>
        <div className="flex flex-row mx-auto bg-bbvaBlue rounded-full mr-2">
          <a href="https://www.facebook.com/bbvaenmexico/?1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00abfb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
        </div>
        <div className="flex flex-row mx-auto bg-bbvaBlue rounded-full mr-2">
          <a href="https://www.facebook.com/bbvaenmexico/?1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-facebook"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00abfb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mx-auto text-gray-400 text-xsm mt-8">
        © 2022 BBVA México, S.A., Institución de Banca Múltiple, Grupo
        Financiero BBVA México. Avenida Paseo de la Reforma 510, colonia Juárez,
        código postal 06600, alcaldía Cuauhtémoc, Ciudad de México.
      </div>
      <div className="mt-8 text-blue-500 mx-auto">Creando Oportunidades</div>
    </div>
  );
};
