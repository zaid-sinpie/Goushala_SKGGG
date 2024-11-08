import { Text } from "./Button";

import cowBg from "/cow-img2.png";

const EventCard = ({ img, title, paragraph, link }) => {
  return (
    <figure className="w-[20%] max-sm:w-full max-xl:w-[45%] max-2xl:w-[40%] h-fit flex flex-col gap-2 rounded-2xl rounded-tl-none bg-white border-stroke border-[1px] pb-4 shadow-md">
      <img src={cowBg} alt="" className="w-full rounded-tr-2xl" />
      <div className="px-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Event number</h1>
          <p className="font-thin">
            Some event where we gather and did that some thing that im not gonna
            tell you unless you will donate me some good bulk of donation indeed
            im greedy so do the donation right away
          </p>
        </div>
        <Text>Read More</Text>
      </div>
    </figure>
  );
};

export default EventCard;
