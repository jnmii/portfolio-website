import React from "react";
import NavLink from "./NavLink";

const handleSmoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    // setNavbarOpen(false); // Close the mobile menu after clicking a link
  };
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
       {links.map((link, index) => (
              <li key={index}>
                 <NavLink
                  title={link.title}
                  onClick={() => handleSmoothScroll(link.path)}
                />
              </li>
            ))}
    </ul>
  );
};

export default MenuOverlay;
