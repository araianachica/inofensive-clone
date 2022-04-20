import React, { useState } from "react";

const MobileMenu = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <div id="mobile-menu" className="text-white hidden">
        <div className="flex flex-row w-full">
          <div className="w-1/2 mx-auto text-center p-8 text-xl font-bold border-b-4 border-white">
            Personas
          </div>
          <a
            href="https://www.bbva.mx/empresas.html"
            className="w-1/2 mx-auto text-center p-8 text-xl font-bold hover:border-b-4 border-white"
          >
            Empresas y Gobierno
          </a>
        </div>
        <nav className="bg-bbvaBlueMedium px-8 py-4">
          <ul className="text-left py-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home"
              width="33"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#00abfb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <div className="my-auto ml-2">Inicio</div>
          </ul>
          <ul
            onClick={() => setState(!state)}
            className="text-left py-2 text-lg flex flex-row justify-between"
          >
            <div> Targetas de crédito</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-down"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="15" x2="12" y2="19" />
              <line x1="8" y1="15" x2="12" y2="19" />
            </svg>
          </ul>
          {state ? (
            <div className="bg-bbvaBlueDark pl-12">
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
            </div>
          ) : null}
          <ul
            onClick={() => setState(!state)}
            className="text-left py-2 text-lg flex flex-row justify-between"
          >
            <div> Targetas de crédito</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-down"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="15" x2="12" y2="19" />
              <line x1="8" y1="15" x2="12" y2="19" />
            </svg>
          </ul>
          {state ? (
            <div className="bg-bbvaBlueDark pl-12">
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
            </div>
          ) : null}
          <ul
            onClick={() => setState(!state)}
            className="text-left py-2 text-lg flex flex-row justify-between"
          >
            <div> Targetas de crédito</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-down"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="15" x2="12" y2="19" />
              <line x1="8" y1="15" x2="12" y2="19" />
            </svg>
          </ul>
          {state ? (
            <div className="bg-bbvaBlueDark pl-12">
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
            </div>
          ) : null}
          <ul
            onClick={() => setState(!state)}
            className="text-left py-2 text-lg flex flex-row justify-between"
          >
            <div> Targetas de crédito</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-down"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="15" x2="12" y2="19" />
              <line x1="8" y1="15" x2="12" y2="19" />
            </svg>
          </ul>
          {state ? (
            <div className="bg-bbvaBlueDark pl-12">
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
            </div>
          ) : null}
          <ul
            onClick={() => setState(!state)}
            className="text-left py-2 text-lg flex flex-row justify-between"
          >
            <div> Targetas de crédito</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-down"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="15" x2="12" y2="19" />
              <line x1="8" y1="15" x2="12" y2="19" />
            </svg>
          </ul>
          {state ? (
            <div className="bg-bbvaBlueDark pl-12">
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
            </div>
          ) : null}
          <ul
            onClick={() => setState(!state)}
            className="text-left py-2 text-lg flex flex-row justify-between"
          >
            <div> Targetas de crédito</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-down"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="15" x2="12" y2="19" />
              <line x1="8" y1="15" x2="12" y2="19" />
            </svg>
          </ul>
          {state ? (
            <div className="bg-bbvaBlueDark pl-12">
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
            </div>
          ) : null}
          <ul
            onClick={() => setState(!state)}
            className="text-left py-2 text-lg flex flex-row justify-between"
          >
            <div> Targetas de crédito</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-down"
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
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="16" y1="15" x2="12" y2="19" />
              <line x1="8" y1="15" x2="12" y2="19" />
            </svg>
          </ul>
          {state ? (
            <div className="bg-bbvaBlueDark pl-12">
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
              <ul className="text-left py-2 text-lg">
                Todas las tarjetas de crédito
              </ul>
            </div>
          ) : null}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
