import EventCard from "../components/ui/EventCard";

const EventsPage = () => {
  const eventsData = [
    {
      img: "",
      title: "Annual Charity Run",
      paragraph:
        "Join us for a thrilling charity run to raise funds for underprivileged children. A day of fun, fitness, and purpose awaits!",
      link: "charity-run",
      event: "charity-run",
    },
    {
      img: "",
      title: "Tech Innovation Summit",
      paragraph:
        "Explore the latest in tech and innovation at our annual summit. Network with industry leaders and learn about cutting-edge advancements.",
      link: "tech-summit",
      event: "tech-summit",
    },
    {
      img: "",
      title: "Community Clean-Up Drive",
      paragraph:
        "Take part in our clean-up drive to make the city cleaner and greener. Let's work together to create a better environment for everyone.",
      link: "cleanup-drive",
      event: "cleanup-drive",
    },
    {
      img: "",
      title: "Food Festival Extravaganza",
      paragraph:
        "Savor flavors from around the world at our annual food festival. A treat for foodies and families alike!",
      link: "food-festival",
      event: "food-festival",
    },
    {
      img: "",
      title: "Art and Music Gala",
      paragraph:
        "Immerse yourself in a night of artistic expression and soulful music. Featuring renowned artists and musicians.",
      link: "art-music-gala",
      event: "art-music-gala",
    },
    // {
    //   img: "",
    //   title: "Art and Music Gala",
    //   paragraph:
    //     "Immerse yourself in a night of artistic expression and soulful music. Featuring renowned artists and musicians.",
    //   link: "art-music-gala",
    //   event: "art-music-gala",
    // },
  ];

  return (
    <section className="h-auto max-2xl:h-auto max-sm:h-auto w-dvw bg-calmbg flex flex-col justify-center items-center gap-10 py-10 ">
      <div className="w-full flex flex-col justify-start max-sm:items-start items-center px-20 py-10 max-2xl:px-10 max-sm:px-4 gap-5">
        <h1 className="text-5xl max-sm:text-2xl font-bold text-center max-sm:text-start">
          Our Events, <br /> Gatherings & News
        </h1>
        <p className="w-[60%] max-2xl:w-[90%] text-center max-sm:w-full max-sm:text-justify">
          Thank you for your support and all that donation in advance that your
          going to donate dont think that I’ll let you go that easily without
          giving me good bulky doantion I accept goth girls as well if you want
          to donate them I’ll gladly take them.
        </p>
        <div className="w-full py-5 flex justify-center max-2xl:justify-center flex-wrap flex-1 gap-5">
          {eventsData.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
