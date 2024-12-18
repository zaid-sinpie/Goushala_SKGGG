import { Text } from "./Button";

const Task = ({ task,number }) => {
  let cssClass;
  if (number + 1 % 2 === 0){
    cssClass = `w-[30%] max-sm:w-full max-xl:w-[45%] max-2xl:w-[40%] h-fit flex flex-col justify-around items-center gap-5 text-center border-t-[1px] border-l-[1px] border-r-2 border-b-2 p-4`
  }
  
  return (
    <article className="w-[30%] max-sm:w-full max-xl:w-[45%] max-2xl:w-[40%] h-fit flex flex-col justify-around items-center gap-5 text-center border-t-[1px] border-l-[1px] border-r-2 border-b-2 p-4">
      <div className="w-full">
        <h1 className="font-bold text-xl">{task.title}</h1>
        <p className="font-thin max-sm:w-full">{task.paragraph}</p>
      </div>
      <Text link={`/root/tasks/${task.link}`}>Read More</Text>
    </article>
  );
};

export default Task;
