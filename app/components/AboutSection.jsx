"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Kotlin</li>
        <li>Android Studio</li>
        <li>MsSQL</li>
        <li>FireBase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>AustinPeay State University, TN</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>100Devs FullStack Coding Camp</li>
        <li>Google Crash Course in Python</li>
        <li>Fairly</li>
        <li>Mobile Tech Consulting</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      // Use parentheses here instead of curly braces
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/desktop.png"
          alt="desktop image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi there, I'm a dedicated self-learner who is passionate about
            technology and its endless possibilities. With a deep love for
            creating innovative solutions, I thrive on the excitement of
            tackling new challenges. My extensive skill set includes JavaScript,
            Kotlin, React, Android Studio, C#, MS SQL, .NET, mobile and web
            development, HTML, CSS, Firebase, Git, Google Play, and Visual
            Studio. However, what truly sets me apart is my unwavering
            commitment to continuous improvement and my ability to independently
            acquire and master new skills. I believe that adaptability and a
            thirst for knowledge are essential qualities in the ever-evolving
            field of software development. As a team player and a diligent
            worker, I'm excited about the opportunity to contribute to your
            projects and help your team reach new heights.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
