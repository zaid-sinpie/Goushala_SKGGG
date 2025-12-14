import { Link } from "react-router-dom";

import logo from "/logo.png";
import Button from "../ui/Button";

const Card = () => {
  return (
    <figure className="flex flex-col justify-between bg-blur w-[60%] max-xl:w-auto max-xl:h-auto gap-5 px-5 py-5 rounded-md text-text text-lg font-thin border-text shadow-md max-sm:h-[100%] backdrop-blur-sm">
      <div className="flex flex-col items-start justify-between gap-5">
        <img src={logo} alt="logo" className="w-[10rem]" />
        <div className="flex flex-col justify-between items-start gap-2">
          <h1 className="text-[24px] font-bold">
            Shri Krushna <br />
            Gokuldam Goushala
          </h1>
          <p className="text-[14px]">
            Life is too much hard for us <strong>Humans</strong>,<br />
            Just Think About <strong>Animals</strong>,
            <br />
          </p>
          <h1 className="font-semibold text-dullText text-[16px]">
            They also have Feelings !!
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="underline font-thin text-[14px]">
          Bring colors to there life’s
        </h1>
        <div className="flex gap-4">
          <Link to="/root/donate">
            <Button>Donate</Button>
          </Link>
          <Button>Adopt</Button>
        </div>
      </div>
    </figure>
  );
};

export default Card;
