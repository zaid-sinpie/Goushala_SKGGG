import Hero from "../components/Hero";
import Contact from "./Contact";
import Filler1 from "../components/Filler1";
import Filler2 from "../components/Filler2";

const Homepage = () => {
  return (
    <section className="w-full flex flex-col items-center justify-around">
      <Hero />
      {/* <Knowus /> */}
      <Filler1 />
      {/* <Events /> */}
      <Filler2 />
      {/* <Tasks /> */}
      <Contact />
    </section>
  );
};

export default Homepage;
