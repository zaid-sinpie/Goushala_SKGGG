import { Link } from "react-router-dom";

import Button from "./ui/Button";

import logo from "/logo.png";

const Hero = () => {
  return (
    <div className="h-dvh w-full bg-img1 bg-center bg-fixed bg-cover flex items-end justify-start max-xl:justify-center max-sm:items-center py-5 max-xl:py-20 max-sm:py-20 px-10 max-sm:p-0 overflow-hidden">
      <article className="w-[50%] h-fit max-sm:h-auto py-20 max-2xl:py-10 max-xl:py-10 max-sm:py-5 px-10 rounded-lg max-sm:w-[90%] max-xl:w-[90%] flex flex-col justify-center items-start text-center gap-[5rem] max-lg:gap-[3rem] max-2xl:gap-[3rem] max-sm:gap-5 text-4xl max-sm:text-xl bg-blur backdrop-blur-md shadow-xl animate-slideInFromLeft">
        <div className="max-lg:text-xl max-xl:text-lg w-full flex flex-col justify-center items-center">
          <img src={logo} alt="" className="w-25 max-sm:w-[40%]" />
          <h1 className="font-bold">Shri Krushna Gokuldam Goushala</h1>
          <h1 className="font-bold text-text">
            Your contribution matters, Donate to support our mission.
          </h1>
        </div>
        {/* <div>
            <h1 className="font-cursive">text</h1>
          </div> */}
        <div>
          <p className="text-xl text-dullText max-sm:text-sm text-justify font-thin">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id cumque
            perferendis inventore at optio magni et qui? Optio laudantium ipsa
            illo impedit quisquam iure voluptas! Blanditiis esse ratione nemo
            voluptatem! Sit, alias velit? Ut magnam quaerat ratione cupiditate
            obcaecati! Magni, non iste. Aspernatur quasi laborum, iste pariatur
            expedita deserunt tempore magni non incidunt unde praesentium quis
            sit, adipisci, sint beatae!
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
    </div>
  );
};

export default Hero;
