"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./NavLink";
import { Bars3Icon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleSmoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setNavbarOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex conatiner lg:py-4 flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-primary-400  font-semibold"
        >
          JDEV
        </Link>
        <div className="mobile-menu  block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2  border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="closeNavbutton"
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 ">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Navlink
                  title={link.title}
                  onClick={() => handleSmoothScroll(link.path)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navlinks}  handleMenuClose={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
