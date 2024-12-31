"use client";
import React from "react";
import Logo from "./logo";
// import DropList from "./drop/dropList";
import Link from "next/link";
import BurgerIcon from "@/public/burgerIcon";

const Navbar = () => {
  const onMenuClick = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("-translate-x-full");
  };
  const menu: string[] = ["Home", "About", "Features"];

  return (
    <>
      {/* Mobile */}
      <nav className="bg-pink text-dark-blue md:hidden">
        <div className="flex justify-between p-4">
          <Logo />
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-0.5 w-10 h-10  text-dark-blue rounded-lg hover:bg-grey focus:outline-none focus:ring-2 focus:ring-grey"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            onClick={onMenuClick}
          >
            <BurgerIcon />
          </button>
        </div>
      </nav>
      {/* Desktop */}
      <div className="sidebar bg-dark-blue text-pink w-64 space-y-6 p-4 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-300 ease-in-out -translate-x-full">
        <Logo />
        <nav>
          {menu.map((m: string) => {
            return (
              <Link
                key={m}
                href="#"
                className="block py-2.5 px-4 rounded hover:bg-grey hover:text-dark-blue"
              >
                {m}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
