"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";



const HeroSection = () => {
  return (
    <section className="lg:py-16 ml-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-8xl lg:leading-normal  font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400 ">
              Hello, I&apos;m{" "}
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
            Welcome to my portfolio, grab a drink and play some games, reach
            out!
          </p>
          <div>
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-600 to-secondary-500 hover:bg-slate-200 text-white ">
              Contact Me
            </button> */}
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600  hover:bg-slate-800 text-white mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a
                  href="https://www.resume.lol/share/1u03rf6" // Set the correct path to your resume
                  className="px-1 py-1 w-full sm:w-fit hover:bg-slate-800 text-white mt-3"
                >
                Download CV</a>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="col-span-4 place-self-center mt-5 lg:mt-0"
        >
          <Image
            src="/images/unnamed.jpg"
            alt="hero image"
            className="rounded-full transform translate-x-2 -translate-y-2 -top-3 left-1/2"
            width={280}
            height={200}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
