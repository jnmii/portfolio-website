"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ghost Game",
    description:
      " A point n shoot web browser game developed using HTML,CSS, and Javascript",
    image: "/images/projects/GhostGame.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jnmii/PointnShoot",
    previewUrl: "https://mbuyambajoseph.itch.io/ghost-shootem-up",
  },
  {
    id: 2,
    title: "Android PokeDex",
    description: "Used https://pokeapi.co/api/v2/  to create a pokedex with jetpack compose!",
    image: "/images/projects/pokedex.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/jnmii/Pokedex",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "",
    tag: ["", ""],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "",
    description: "",
    image: "",
    tag: ["", ""],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "",
    description: "",
    image: "",
    tag: ["", ""],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="mx-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid ml-1 md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index*0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
