import { Link } from "react-router-dom";

import logo from "/logo.png";
import bg1 from "/cow-bgImg0.png";

import Button from "./ui/Button";

const Knowus = () => {
  return (
    <section className="h-screen max-2xl:h-auto max-sm:h-auto w-full relative bg-calmbg overflow-hidden ">
      <div className="h-screen w-full max-sm:h-auto max-2xl:h-auto flex max-xl:flex-col justify-start items-center max-sm:justify-center gap-1 py-5">
        <div className="w-[50%] max-xl:w-full rounded-md flex flex-col justify-between items-start px-20 max-lg:px-10 max-sm:px-5 py-5">
          <img
            src={logo}
            alt="logo header"
            className="w-[10rem] max-sm:w-[6rem] cursor-pointer"
          />
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">About US</h1>
              <p className="text-start max-xl:text-justify text-xl max-xl:font-thin">
                The Gaushala, situated in Waralegaon, South Solapur, was
                established in year. It five cow sheds, with a combined capacity
                to accommodate 100 cattle. Presently, the Gaushala houses a
                total of 50 cattle, comprising 30 cows, 5 bulls, and 15 calves.
                Additionally, the premises include approximately 0.5 acres of
                land cultivated with lush green grass. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Optio ab molestiae esse
                officia ullam totam quos sint, neque dolores ratione omnis
                delectus tempora fuga ut sapiente eum beatae ea sed. Qui nostrum
                ipsam autem dicta sed reiciendis eveniet numquam eius. Totam
                distinctio ullam numquam quasi id. Adipisci sit possimus vitae
                magnam quasi, earum sapiente, corporis deserunt ea nostrum nemo
                consequuntur. Quas harum numquam nesciunt recusandae animi, fuga
                consequuntur enim maxime necessitatibus, dolor distinctio! Non
                quidem nesciunt neque cumque aperiam nulla itaque.
              </p>
            </div>
            <Link>
              <Button> Know More </Button>
            </Link>
          </div>
        </div>
        <img
          src={bg1}
          alt="bg image"
          className="w-[70%] absolute max-sm:relative -right-96 -bottom-60 max-xl:hidden"
        />
      </div>
    </section>
  );
};

export default Knowus;
