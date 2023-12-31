"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import GithubIcon from "../../public/images/projects/github-icon.svg";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSONdata,

    // };

    // const response = await fetch(endpoint,options);
    // const resData = await response.json();
    // if(response.status === 200){
    //   console.log('Message sent.')
    //   setEmailSubmitted(true)

    // }
  };
  return (
    <section className="grid ml-10 mr-2 md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <motion.div
        animate={{
          scale: [1, 1, 1, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-60 w-60 z-10 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2"
      ></motion.div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE]  mb-8 max-w-md">
          I am currently looking for new oportunities! Feel free to download my
          resume and to reach out for any questions or roles or if you just
          wanna chat!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/jnmii">
            <Image alt="git icon" src={GithubIcon} />
          </Link>
        </div>
      </div>
      <div>
        {/* <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your Email
            </label>
            <input
            name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="emailname@emaildomain.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
            name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="What's up?"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Lets chat!"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
          >
            Send Message
          </button>{
          emailSubmitted && (
            <p className="text-primary-500 text-sm mt-2">
              Email sent succesfully
            </p>
          )
          }
        </form> */}
        <div id="contact">
          <div className="container te">
            <div className="row">
              <div className="contact-left">
                <h1 className="text-xl font-bold text-white my-2">
                  Contact Me
                </h1>
                <p className="text-[#ADB7BE]  mb-8 max-w-md">
                  <EnvelopeIcon className="h-5 w-5 text-Primary-600 cursor-pointer group-hover/link:text-white  from-primary-600"/>
                  MbuyambaJoseph@gmail.com
                </p>
                <div>
                  {" "}
                  <p className="text-[#ADB7BE]  mb-8 max-w-md">
                  <PhoneIcon className="h-5 w-5 text-Primary-600 cursor-pointer group-hover/link:text-white  from-primary-600" /> 
                  404-594-4886
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
