import Card from "../components/ui/Card";
import Navbar from "../components/Navbar";

const Landingpage = () => {
  return (
    <section className="bg-divider h-dvh w-screen flex max-xl:flex-col max-xl:justify-center max-xl:items-center justify-between gap-5 bg-img1 bg-center bg-no-repeat bg-cover px-2">
      <div className="w-1/2 h-full max-xl:w-full flex items-center justify-start pl-[50px] z-10">
        <Card />
      </div>
      <div className="w-1/2 max-sm:w-screen flex items-end justify-center py-[5rem] z-10">
        <Navbar />
      </div>
    </section>
  );
};

export default Landingpage;
