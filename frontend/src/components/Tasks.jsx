import { useState, useRef, useEffect } from "react";

import Task from "./ui/Task";
import { TextButton } from "./ui/Button";

const Tasks = () => {
  const [currEvents, setCurrEvents] = useState(true);
  const [shouldScroll, setShouldScroll] = useState(false);
  const scroller = useRef();

  let loop = currEvents
    ? [1, 2, 3, 4, 5, 6]
    : [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21,
      ];

  const toggleEvents = () => {
    if (!currEvents) {
      setShouldScroll(true); // Enable scrolling when switching to "See Less"
    }
    setCurrEvents((prev) => !prev);
  };

  useEffect(() => {
    if (currEvents && shouldScroll) {
      scroller.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
      setShouldScroll(false); // Reset scroll flag
    }
  }, [currEvents, shouldScroll]);

  return (
    <section
      ref={scroller}
      className={`${
        currEvents ? "h-screen" : "h-auto"
      } max-2xl:h-auto max-sm:h-auto w-full bg-calmbg flex flex-col justify-center items-center gap-10 py-10`}
    >
      <div className="w-full flex flex-col justify-center items-center px-20 max-2xl:px-10 max-sm:px-4 gap-5 mt-20">
        <div className="w-full flex flex-col justify-start items-center">
          <h1 className="text-5xl max-sm:text-2xl font-bold text-center">
            Our Events, <br /> Gatherings & News
          </h1>
          <p className="w-[60%] max-2xl:w-[90%] text-center max-sm:w-full max-sm:text-justify">
            Thank you for your support and all that donation in advance that
            you're going to donate. Don't think that I’ll let you go that easily
            without giving me a good, bulky donation. I accept goth girls as
            well; if you want to donate them, I’ll gladly take them.
          </p>
        </div>
        <div className="w-full py-5 flex justify-center flex-wrap gap-5">
          {loop.map((item) => (
            <Task key={item} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <TextButton onClick={toggleEvents}>
          {currEvents ? "See All Tasks" : "See Less"}
        </TextButton>
      </div>
    </section>
  );
};

export default Tasks;
