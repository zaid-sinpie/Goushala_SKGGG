import Task from "../components/ui/Task";

const TaskPage = () => {
  const loop = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <section className="h-auto max-2xl:h-auto max-sm:h-auto w-full bg-calmbg flex flex-col justify-center items-center gap-10 py-20 ">
      <div className="w-full flex flex-col justify-center items-center px-20 max-2xl:px-10 max-sm:px-4 gap-5">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl max-sm:text-2xl font-bold">
            Our Events, <br /> Gatherings & News
          </h1>
          <p className="w-[60%] max-2xl:w-[90%] text-center max-sm:w-full max-sm:text-justify">
            Thank you for your support and all that donation in advance that
            your going to donate dont think that I’ll let you go that easily
            without giving me good bulky doantion I accept goth girls as well if
            you want to donate them I’ll gladly take them.
          </p>
        </div>
        <div className="w-full py-5 flex justify-start items-center flex-wrap gap-10">
          {loop.map((item) => (
            <Task key={item} id={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskPage;
