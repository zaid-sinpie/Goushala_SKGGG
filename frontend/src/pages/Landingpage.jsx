import Card from "../components/ui/Card";
import Navbar from "../components/Navbar";

const Landingpage = () => {
  return (
    <section className="bg-divider h-dvh w-screen flex max-xl:flex-col max-xl:justify-center max-xl:items-center justify-between gap-5 bg-img1 bg-center bg-no-repeat bg-cover px-2">
      <div className="w-[50%] max-xl:w-full flex items-center justify-center pl-[2rem] max-sm:p-0 max-sm:pt-[2rem]">
        <Card />
      </div>
      <div className="w-[50%] max-sm:w-screen flex items-end justify-center xl:py-[5rem]">
        <Navbar />
      </div>
    </section>
  );
};

export default Landingpage;
