import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div id="mobile-menu" className="text-white">
        <nav>
          <ul className="hover:bg-white hover:text-black text-center py-2">
            Inicio
          </ul>
          <ul className="hover:bg-white hover:text-black text-center py-2">
            Información
          </ul>
          <ul className="hover:bg-white hover:text-black text-center py-2">
            Seguimiento
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
