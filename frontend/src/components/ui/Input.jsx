const Input = ({ id, title, type = "text" }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full text-label">
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        placeholder={title}
        name={id}
        className="border border-stroke px-4 py-2 bg-calmbg rounded-md outline-none w-full"
        required
      />
    </div>
  );
};

export const TextArea = ({ id, title }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full text-label">
      <label htmlFor={id}>{title}</label>
      <textarea
        rows={5}
        type="text"
        id={id}
        name={id}
        placeholder={title}
        className="border border-stroke px-4 py-2 bg-calmbg rounded-md outline-none w-full"
        required
      />
    </div>
  );
};

export default Input;
