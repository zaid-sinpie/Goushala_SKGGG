import { Form } from "react-router-dom";

import Input from "../components/ui/Input";
import { TextArea } from "../components/ui/Input";
import { ButtonFull } from "../components/ui/Button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "/logo.png";

const DonatePage = () => {
  return (
    <section className="h-screen w-full max-2xl:h-auto bg-calmbg overflow-hidden flex max-2xl:flex-col max-xl:flex-col max-sm:flex-col px-2 max-2xl:py-24 max-xl:py-20 max-sm:py-10 justify-between items-center relative">
      <div className="w-[50%] max-2xl:border max-2xl:border-dullText max-2xl:rounded-md max-2xl:w-full max-xl:w-full max-sm:w-full h-full bg-calmbg flex flex-col justify-center items-center gap-5 max-2xl:shadow-md z-10 py-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src={logo}
            alt="logo image"
            className="pointer-events-none select-none"
          />
          <h1 className="text-4xl font-bold text-center">
            Shri Krushna <br />
            Gokuldam Goushala
          </h1>
        </div>
        <Form
          method="post"
          className="flex flex-col items-center justify-around gap-2 w-[50%]  max-2xl:w-[70%] max-xl:w-[70%] max-sm:w-full"
        >
          <Input id="fullName" type="text" title="Full Name" />
          <Input id="phone" type="number" title="Phone Number" />
          <Input id="email" type="text" title="E-mail" />
          <Input
            id="donate"
            type="number"
            title="Donate Amount in ₹"
            autoComplete="off"
          />
          <TextArea id="message" type="text" title="Message" />
          <ButtonFull type="submit">DONATE</ButtonFull>
        </Form>
      </div>
      <div className="w-[50%] h-full bg-img1 bg-center flex justify-center items-center max-2xl:hidden">
        <img
          src={
            "https://yt3.ggpht.com/W5KUfEayQcQSAAXgv7fgfwAlii6K0HCUFTGoEu6doAbJJCibRHrgImzaObe5Oyq0m6rnjmha5YtSRQ=s640-rw-nd-v1"
          }
          alt=""
          className="w-full"
        />
      </div>
      <ToastContainer />
    </section>
  );
};

export default DonatePage;

export const action = async function ({ request, params }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData.entries());
  console.log(data);
  try {
    const response = await fetch("http://localhost:3000/donate", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Something went wrong!!");
    }
    toast.success("Message Sent Successfull!!");
  } catch (error) {
    toast.error("Something went wrong please try again later");
  }
  // toast.success("Message Sent Successfull!!");
  return null;
};
