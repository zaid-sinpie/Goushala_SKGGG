import { Link } from "react-router-dom";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="btn relative inline-flex items-center justify-start overflow-hidden font-thin tracking-widest transition-all bg-dark rounded-sm hover:bg-dullText group py-2 px-5 text-sm shadow-md"
    >
      <span className="w-56 h-48 rounded bg-text absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-text transition-colors duration-300 ease-in-out group-hover:text-dark">
        {children}
      </span>
    </button>
  );
};

export const ButtonFull = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="btn relative inline-flex items-center justify-start overflow-hidden font-thin tracking-widest transition-all bg-dark rounded-sm hover:bg-dullText group py-2 px-5 shadow-md w-full"
    >
      <span className="w-full h-48 rounded bg-text absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-40 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-center text-text transition-colors duration-300 ease-in-out group-hover:text-dark">
        {children}
      </span>
    </button>
  );
};

export const TextButton = ({ children, ...props }) => {
  return (
    <Link
      {...props}
      className="bg-dark hover:bg-darkTextBtnBg text-text px-10 py-2 rounded-full shadow-lg hover:underline"
    >
      {children}
    </Link>
  );
};

export const Text = ({ children, link }, props) => {
  return (
    <Link
      to={link}
      {...props}
      className="font-semibold underline tracking-wide hover:tracking-wider w-fit"
    >
      {children}
    </Link>
  );
};

export default Button;
