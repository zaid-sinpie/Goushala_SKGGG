import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";

const Root = () => {
  return (
    <section className="relative">
      <Navigation />
      <Outlet />
    </section>
  );
};

export default Root;
