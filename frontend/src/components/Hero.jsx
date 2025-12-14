import { Link } from "react-router-dom";

import Button from "./ui/Button";

import logo from "/logo.png";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-img1 bg-center bg-fixed bg-cover flex justify-start items-end pl-10 overflow-hidden pb-5">
      <article className="w-[50%] h-fit max-sm:h-auto max-2xl:py-10 max-xl:py-10 max-sm:py-5 px-10 rounded-lg max-sm:w-[90%] flex flex-col justify-center items-start gap-5 max-sm:text-xl bg-blur backdrop-blur-md shadow-xl animate-slideInFromLeft">
        <div className="max-lg:text-xl max-xl:text-lg w-full flex flex-col justify-center items-start text-start text-[20px]">
          <img src={logo} alt="" className="w-[100px] max-sm:w-[40%]" />
          <h1 className="font-bold">Shri Krushna Gokuldam Goushala</h1>
          <h1 className="font-bold text-text">
            Your contribution matters, Donate to support our mission.
          </h1>
        </div>
        <div>
          <p className="text-sm text-dullText max-sm:text-sm text-justify font-thin">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id cumque
            perferendis inventore at optio magni et qui? Optio laudantium ipsa
            illo impedit quisquam iure voluptas! Blanditiis esse ratione nemo
            voluptatem! Sit, alias velit? Ut magnam quaerat ratione cupiditate
            obcaecati! Magni, non iste.
          </p>
        </div>
        <span className="text-sm flex gap-4 items-center justify-center">
          <Link to="/root/donate">
            <Button>DONATE</Button>
          </Link>
          <Link to="#">
            <Button>ADOPT</Button>
          </Link>
        </span>
      </article>
    </section>
  );
};

export default Hero;
