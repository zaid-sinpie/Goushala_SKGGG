import { Link } from "react-router-dom";

const ErrorPage = ({ message }) => {
  return (
    <section className="w-full h-screen max-sm:h-auto text-center bg-calmbg flex flex-col gap-5 justify-center items-center">
      <h1 className="text-xl">
        {message ? message : "Something went wrong please try again later"}
      </h1>
      <Link to="/root" className="text-2xl font-semibold text-errorText hover:text-blur underline">
        Go To Home
      </Link>
      {/* <img src="https://yt3.ggpht.com/rQEXtnu-L7uo5MIDylx-Sl328S3_DGfg3lQG8I1QV_u7IgqJdEsnDRhcsQnSy7YnwKinvYWjcojMOQ=s640-rw-nd-v1" alt="Error Image" /> */}
      <img src="https://yt3.ggpht.com/RGjHZlJpwH0VfKJP--kMYxos3jaXJ8p-BxIGqkoFuIxLOO0dg8bsht_MWQWsj27gKyFQJDKM6GtAbQ=s640-rw-nd-v1" alt="Error Image" />
    </section>
  );
};

export default ErrorPage;
