import { Text } from "./Button";

const Task = ({ task, number }) => {
  let cssClass;
  if (number + (1 % 2) === 0) {
    cssClass = `w-[30%] max-sm:w-full max-xl:w-[45%] max-2xl:w-[40%] h-fit flex flex-col justify-around items-center gap-5 text-center border-t-[1px] border-l-[1px] border-r-2 border-b-2 p-4`;
  }

  return (
    <article className="w-[30%] h-[200px] max-sm:w-full flex flex-col justify-around items-center gap-5 text-center border rounded-sm rounded-tr-lg p-4">
      <div className="w-full">
        <h1 className="font-bold text-[16px] text-start">{task.title}</h1>
        <p className="font-thin max-sm:w-full text-[14px] text-justify">
          {task.paragraph}
        </p>
      </div>
      <div className="w-full text-start">
        <Text link={`/root/tasks/${task.link}`}>Read More</Text>
      </div>
    </article>
  );
};

export default Task;
