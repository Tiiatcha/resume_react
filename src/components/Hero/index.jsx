import React from "react";
import Navigation from "../Nav";
import Technologies from "../../sections/Technologies";
import ContactDetails from "../../sections/ContactDetails";

function Hero() {
  return (
    <header
      id="header"
      className="md:h-auto 
    lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24
    "
    >
      <div className="flex flex-col justify-gap gap-4">
        <h1
          className=" text-4xl font-bold leading-6 text-white/10 sm:text-5xl
                  bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text"
        >
          Craig Davison
        </h1>
        <h2 className="text-2xl font-medium text-sky-200">
          Full Stack Web Developer
        </h2>
        <p className="lg:max-w-full md:max-w-[60%] sm:max-w-full max-w-[80%]">
          Helping you build solutions to express your brand identity and
          effectively manage your business operations!
        </p>
        <p className="z-10">
          <Navigation />
        </p>
      </div>
      <p>
        <ContactDetails />
      </p>
      <p className="pt-20">
        <Technologies />
      </p>
    </header>
  );
}

export default Hero;
