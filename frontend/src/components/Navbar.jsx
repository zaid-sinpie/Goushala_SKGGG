import { NavLink } from "react-router-dom";

const navigatiionLinks = [
  {
    name: "Home",
    path: "/root",
    id: 1,
  },
  {
    name: "About Us",
    path: "/root/about",
    id: 2,
  },
  {
    name: "Contact",
    path: "/root/contact",
    id: 3,
  },
];

const Navbar = () => {
  return (
    <nav className="flex gap-4 bg-blur w-fit px-5 py-2 rounded-md backdrop-blur-md text-text shadow-md">
      {navigatiionLinks.map((item) => {
        let isTrue = false;
        if (item.id !== navigatiionLinks.length) {
          isTrue = true;
        } else {
          isTrue = false;
        }

        return (
          <ul key={item.id} className="flex gap-4 items-center justify-around">
            <NavLink
              to={item.path}
              className="hover:underline underline-offset-4"
            >
              {item.name}
            </NavLink>
            {isTrue ? <div className="border-l-2 h-5 text-dullText"></div> : ""}
          </ul>
        );
      })}
    </nav>
  );
};

export default Navbar;
