import React from "react";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import { MdOutlineAlternateEmail, MdOutlineCreate } from "react-icons/md";
import Input from "../components/FormComponents/Input";
import TextArea from "../components/FormComponents/TextArea";

function Contact() {
  return (
    <div id="contact" className="mb-20">
      <h4 className="text-4xl font-extrabold text-slate-800">Get in touch</h4>

      <form action="">
        <Input
          icon={<AiOutlineUser />}
          name="contact_name"
          title="Your Name"
          type="text"
          placeholder="John Doe"
        />
        <Input
          icon={<MdOutlineAlternateEmail />}
          name="contact_email"
          title="Your Email Address"
          type="email"
          placeholder="email@email.com"
        />
        <TextArea
          name="contact_message"
          title="Your Message"
          placeholder="Enter a message!"
          rows="5"
        />
        <button className="flex justify-center items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-2xl py-1 w-full ">
          Submit
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
}

export default Contact;
