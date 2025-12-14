import Task from "../components/ui/Task";

const TaskPage = () => {
  const tasks = [
    {
      img: "",
      title: "Art and Music Gala",
      paragraph:
        "Immerse yourself in a night of artistic expression and soulful music. Featuring renowned artists and musicians.",
      link: "art-music-gala",
      event: "art-music-gala",
    },
    {
      img: "",
      title: "Tech Innovators Meetup",
      paragraph:
        "Join the brightest minds in technology for a day of innovation and collaboration. Discover the future of tech.",
      link: "tech-innovators-meetup",
      event: "tech-innovators-meetup",
    },
    {
      img: "",
      title: "Fitness Fiesta",
      paragraph:
        "A day filled with fitness challenges, workshops, and healthy lifestyle tips. Get ready to sweat and have fun!",
      link: "fitness-fiesta",
      event: "fitness-fiesta",
    },
    {
      img: "",
      title: "Culinary Wonders",
      paragraph:
        "Explore a world of flavors with live cooking demonstrations and tastings by renowned chefs.",
      link: "culinary-wonders",
      event: "culinary-wonders",
    },
    {
      img: "",
      title: "Nature Exploration Camp",
      paragraph:
        "Escape the city and reconnect with nature. A weekend of hiking, camping, and stargazing awaits you.",
      link: "nature-exploration-camp",
      event: "nature-exploration-camp",
    },
  ];

  return (
    <section className="h-auto max-2xl:h-auto max-sm:h-auto w-full bg-calmbg flex flex-col justify-center items-center gap-10 py-20">
      <div className="w-full flex flex-col justify-start items-start px-20 max-sm:px-4 gap-1">
        <div className="w-full flex flex-col justify-center items-start text-start">
          <h1 className="text-[26px] uppercase font-bold">
            Our Events, <br /> Gatherings & News
          </h1>
          <p className="w-[60%] text-start max-sm:w-full max-sm:text-justify text-[14px]">
            Thank you for your support and all that donation in advance that
            your going to donate dont think that I’ll let you go that easily
            without giving me good bulky doantion I accept goth girls as well if
            you want to donate them I’ll gladly take them.
          </p>
        </div>
        <div className="w-full py-5 flex justify-start items-start flex-wrap gap-5">
          {tasks.map((task, idx) => (
            <Task key={idx} number={idx} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskPage;
