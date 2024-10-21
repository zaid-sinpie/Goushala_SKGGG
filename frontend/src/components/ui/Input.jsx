const Input = ({ id, title, type = "text", ...props }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full text-label">
      <label htmlFor={id}>{title}</label>
      <input
        {...props}
        type={type}
        id={id}
        placeholder={title}
        name={id}
        className="border border-stroke px-4 py-2 bg-calmbg rounded-md outline-none w-full shadow-sm"
        required
      />
    </div>
  );
};

export const TextArea = ({ id, title, ...props }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full text-label">
      <label htmlFor={id}>{title}</label>
      <textarea
       shadow-sm
        {...props}
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
