import { Link } from "react-router-dom";

import logo from "/logo.png";
import Button from "../ui/Button";

const Card = () => {
  return (
    <div className="flex flex-col justify-between bg-blur w-[60%] max-xl:w-auto max-xl:h-auto max-xl:gap-10 px-10 max-sm:px-5 max-sm:pr-[1rem] py-16 max-sm:py-5 rounded-2xl text-text text-lg font-thin border-text border-[0.5 px] shadow-md h-[80%] max-sm:h-[100%] backdrop-blur-sm">
      <div className="flex flex-col items-start justify-between gap-5">
        <img src={logo} alt="logo" className="w-[10rem]" />
        <div className="flex flex-col justify-between items-start gap-2">
          <h1>
            {" "}
            <strong>Humanity</strong> is the only religion
          </h1>
          <h1 className="text-4xl font-bold">
            Shri Krushna <br />
            Gokuldam Goushala
          </h1>
          <p className="">
            Life is too much hard for us <strong>Humans</strong>,<br />
            Just Think About <strong>Animals</strong>,
            <br />
          </p>
          <h1 className="font-semibold text-dullText">
            They also have Feelings !!
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="underline font-thin text-text">
          Bring colors to there life’s
        </h1>
        <div className="flex gap-4">
        <Link to='/root/donate'><Button>Donate</Button></Link>
          <Button>Adopt</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
