import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  const { taskId } = useParams();

  const task = tasks.find((t) => t.event === taskId);

  if (!task) {
    throw new Error("No route found");
  }

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{task.title}</h1>
        <p className="mt-4">{task.paragraph}</p>
      </div>
    </section>
  );
};

export default TaskPage;
