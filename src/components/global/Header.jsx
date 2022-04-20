import React from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import BBVA from "../../assets/img/bbva.svg";

const Header = (props) => {
  const { setAcces, acces } = props;
  const openMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  };
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between my-2 px-4">
        <div onClick={() => setAcces(!acces)} className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-user"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <p className="text-white my-auto ml-2 font-bold">Acceso</p>
        </div>

        <img className="h-6 my-auto" src={BBVA} alt="" />
        <div onClick={() => openMobileMenu()} className="my-auto flex flex-row">
          <p className="text-white my-auto ml-2 font-bold mr-2">Menú</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>
      <div>
        <Menu />
        <MobileMenu />
      </div>
    </>
  );
};

export default Header;
