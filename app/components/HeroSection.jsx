"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 ">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Joseph",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                " An Android Developer",
                1000,
                "A Fullstack Developer",
                1000,
                "A UX/UI Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            accusantium.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-600 to-blue-500 hover:bg-slate-200 text-white ">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-500 via-blue-500 to-green-600  hover:bg-slate-800 text-white mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          
            <Image
              src="/images/profile.png"
              alt="hero image"
              className="rounded-full transform translate-x-2 -translate-y-2 -top-3 left-1/2"
              width={280}
              height={200}
            />
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
