import { Form } from "react-router-dom";

import Input from "../components/ui/Input";
import { TextArea } from "../components/ui/Input";
import { ButtonFull } from "../components/ui/Button";

import logo from "/logo.png";

const DonatePage = () => {
  return (
    <section className="h-screen w-full max-2xl:h-auto bg-calmbg overflow-hidden flex max-2xl:flex-col max-xl:flex-col max-sm:flex-col px-2 max-2xl:py-24 max-xl:py-20 max-sm:py-10 justify-between items-center relative">
      <div className="w-[50%] max-2xl:w-full max-xl:w-full max-sm:w-full h-full bg-calmbg flex flex-col justify-center items-center gap-5 shadow-md z-10">
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
        <Form className="flex flex-col items-center justify-around gap-2 w-[50%]  max-2xl:w-[70%] max-xl:w-[70%] max-sm:w-full">
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
      <div className="w-[50%] h-full bg-img1">
        <img
          src={
            "https://yt3.ggpht.com/W5KUfEayQcQSAAXgv7fgfwAlii6K0HCUFTGoEu6doAbJJCibRHrgImzaObe5Oyq0m6rnjmha5YtSRQ=s640-rw-nd-v1"
          }
          alt=""
          className="w-full"
        />
      </div>
    </section>
  );
};

export default DonatePage;
