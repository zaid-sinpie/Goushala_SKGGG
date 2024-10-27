import { NavLink } from "react-router-dom";

import { useState } from "react";

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
  // {
  //   name: "Contact",
  //   id: 3,
  //   url: "contact",
  // },
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
  const [curr, setCurr] = useState(false);
  const toggleNav = () => {
    setCurr((prev) => !prev);
  };
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
        <i
          onClick={toggleNav}
          className="fa-solid fa-bars relative hover:bg-blur p-2 rounded-sm hidden max-sm:block"
        >
          <div className={`${curr ? 'flex ' : 'hidden '} flex-col items-center justify-center px-10 py-4 gap-4 z-10 absolute right-0 rounded-sm text-sm bg-darkTextBtnBg`}>
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
                  <hr />
                </NavLink>
              );
            })}
          </div>
        </i>
      </div>
    </nav>
  );
};

export default Navigation;
