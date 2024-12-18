import { Text } from "./Button";

import cowBg from "/cow-img2.png";

const EventCard = ({ img, title, paragraph, link, event }) => {
  return (
    <figure className="w-[300px] h-[400px] flex flex-col gap-2 rounded-2xl rounded-tl-none bg-white border-stroke border-[1px] shadow-md">
      <img
        src={cowBg}
        alt=""
        className="w-full h-[150px] object-cover rounded-tr-2xl"
      />
      <div className="px-4 py-2 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-lg truncate">{event.title}</h1>
          <p className="font-thin text-sm line-clamp-3">{event.paragraph}</p>
        </div>
        <Text link={`/root/events/${event.link}`}>Read More</Text>
      </div>
    </figure>
  );
};

export default EventCard;
