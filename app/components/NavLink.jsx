import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <a
      onClick={onClick}
      className="block py-3 pl-3 pr-4  text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;
