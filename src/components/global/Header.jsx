import React from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import BBVA from "../../assets/img/bbva.svg";

const Header = () => {
  const openMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  };
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between my-4 px-4">
        <img className="h-10" src={BBVA} alt="" />
        <div className="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            onClick={() => openMobileMenu()}
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
