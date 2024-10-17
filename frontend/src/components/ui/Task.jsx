import { Text } from "./Button";

const Task = ({ id }) => {
  return (
    <article className="w-[30%] max-sm:w-full max-xl:w-[45%] max-2xl:w-[40%] h-fitflex flex-col gap-5">
      <div>
        <h1 className="font-bold text-xl">Task #{id }</h1>
        <p className="font-thin w-[80%] max-sm:w-full">
          Some event where we gather and did that some thing that im not gonna
          tell you unless you will donate me some good bulk of donation indeed
          im greedy so do the donation right away
        </p>
      </div>
      <Text>Read More</Text>
    </article>
  );
};

export default Task;
