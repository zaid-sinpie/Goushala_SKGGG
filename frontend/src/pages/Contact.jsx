import { Form, json } from "react-router-dom";

import Input from "../components/ui/Input";
import { TextArea } from "../components/ui/Input";
import { ButtonFull } from "../components/ui/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <section className="h-screen w-full max-2xl:h-auto bg-calmbg overflow-hidden flex justify-center items-center px-2 py-20 max-xl:py-52 max-sm:py-40 relative">
      <div className="h-[70%] w-[60%] max-2xl:w-[50%] max-lg:w-[80%] max-sm:w-full bg-white rounded-xl border border-stroke shadow-md flex items-center justify-center">
        <div className="w-[50%] h-full bg-kunal bg-cover bg-center rounded-l-lg max-2xl:hidden"></div>
        <div className="w-[50%] max-2xl:w-full h-full rounded-r-lg py-5">
          <Form
            method="post"
            className="flex flex-col gap-5 justify-center items-center h-full w-full"
          >
            <h1 className="uppercase font-semibold text-xl">contact</h1>
            <div className="w-[60%] max-2xl:w-[80%] max-sm:w-full px-5 flex flex-col justify-center items-center gap-5 ">
              <Input id={"fullName"} title={"Full Name"} />
              <Input id={"email"} title={"Email"} type={"email"} />
              <TextArea id={"message"} title={"Message"} />
              <ButtonFull type="submit">Submit</ButtonFull>
            </div>
          </Form>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 w-full bg-dark flex justify-around items-center px-1 py-2 text-text max-xl:flex-col max-sm:text-xs max-sm:text-center">
        <h2 className="flex gap-2 items-center justify-center">
          <i className="fa-solid fa-envelope"></i>Email :-
          mailtoshrikruhsnagokuldamegoushala@gmail.com | 24/7 Mon - Sun{" "}
        </h2>
        <h2 className="flex gap-2 items-center justify-center">
          <i className="fa-solid fa-phone"></i>Phone:- +91 1234567890
        </h2>
        <h2 className="flex gap-2 items-center justify-center">
          <i className="fa-solid fa-location-dot"></i>Addresss:- Waralegaon, South
          Solapur
        </h2>
      </footer>
      <ToastContainer />
    </section>
  );
};

export default Contact;

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("http://localhost:3000/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      // throw json({});
      throw new Error("Something went wrong please try again later!!");
    }
    toast.success("Message Sent Successfull!!");
  } catch (error) {
    toast.error("Something went wrong please try again later");
  }
  return null;
}
