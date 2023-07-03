import React from "react";
import { Link } from "react-router-dom";
import { SiStreamlit } from "react-icons/si";

const NavLogo = () => {
  return (
    <Link className="flex sm:inline-flex items-center justify-center" to="/">
      <SiStreamlit className="w-9 h-9 fill-yellow-700 sm:w-10 sm:h-10" />
      <span className="ms-2 text-2xl sm:text-3xl">Streamer Spotlight</span>
    </Link>
  );
};

export default NavLogo;
