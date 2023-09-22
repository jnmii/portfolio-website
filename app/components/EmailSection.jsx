"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import GithubIcon from "../../public/images/projects/github-icon.svg";

const EmailSection = () => {
  const[emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSONdata,

     
    };

    const response = await fetch(endpoint,options);
    const resData = await response.json();
    if(response.status === 200){
      console.log('Message sent.')
      setEmailSubmitted(true)
      
    }
  };
  return (
    <section className="grid ml-2 mr-2 md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
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
        <form className="flex flex-col " onSubmit={handleSubmit}>
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
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
          >
            Send Message
          </button>{
          emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent succesfully
            </p>
          )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
