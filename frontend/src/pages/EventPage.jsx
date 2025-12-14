import { useParams } from "react-router-dom";
// import eventsData from "../data/eventsData"; // Move events data to a shared file for reusability

const EventPage = () => {
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
  ];
  const { eventId } = useParams();

  const event = eventsData.find((e) => e.event === eventId);

  if (!event) {
    throw new Error("Invalid Event ID");
  }

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{event.title}</h1>
        <p className="mt-4">{event.paragraph}</p>
      </div>
    </section>
  );
};

export default EventPage;
