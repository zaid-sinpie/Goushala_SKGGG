import { NavLink } from "react-router-dom";

import logo from "/logo.png";

const naviagtionLinks = [
  {
    name: "Home",
    id: 1,
    url: "/root",
  },
  {
    name: "About",
    id: 2,
    url: "about",
  },
  {
    name: "Contact",
    id: 3,
    url: "contact",
  },
  {
    name: "Donate",
    id: 4,
    url: "donate",
  },
  {
    name: "Adopt",
    id: 5,
    url: "adopt",
  },
];

const Navigation = () => {
  return (
    <nav className="w-full bg-blur backdrop-blur-md max-sm:py-0 px-8 flex text-text fixed top-0 left-0 shadow-lg z-20">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="logo header"
            className="w-[5rem] max-sm:w-[4rem] cursor-pointer"
          />
          <p className="pointer-events-none select-none max-lg:hidden">
            Shri Krushna Gokuldam Gouseva Goushala
          </p>
        </div>
        <div className="flex gap-8 max-sm:hidden">
          {naviagtionLinks.map((item) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-dark underline underline-offset-4"
                    : "hover:underline underline-offset-4"
                }
                key={item.id}
                to={item.url}
                end
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
