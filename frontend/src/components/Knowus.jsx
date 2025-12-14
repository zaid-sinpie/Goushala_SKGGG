import { Link } from "react-router-dom";

import logo from "/logo.png";
import bg1 from "/cow-bgImg0.png";

import Button from "./ui/Button";

const Knowus = ({ knowUs }) => {
  return (
    <section className="h-screen w-full relative bg-calmbg overflow-hidden">
      <div className="h-screen w-full max-sm:h-auto flex max-xl:flex-col justify-start items-center max-sm:justify-center gap-1">
        <div className="w-[50%] max-xl:w-full rounded-md flex flex-col justify-between items-start px-10 max-lg:px-10 max-sm:px-5 z-10">
          <img
            src={logo}
            alt="logo header"
            className="w-[150px] max-sm:w-[6rem] cursor-pointer"
          />
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h1 className="text-[24px] font-bold">About US</h1>
              <p className="text-start max-xl:text-justify text-sm max-xl:font-thin">
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
            {!knowUs ? (
              <Link to="/root/about">
                <Button> Know More </Button>
              </Link>
            ) : null}
          </div>
        </div>
        <img
          src={bg1}
          alt="bg image"
          className="w-[45%] absolute max-sm:relative right-[0px] bottom-[0px]"
        />
      </div>
    </section>
  );
};

export default Knowus;
