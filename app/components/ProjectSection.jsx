"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "",
    description: "",
    image: "/images/projects/GhostGame.png",
    tag: ["", ""],
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "",
    tag: ["", ""],
    gitUrl: "/",
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

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects= projectsData.filter((project)=>{
    project.tag.includes(tag);
  });
  return (
    <>
      <h2>My Projects</h2>
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
          tag="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
