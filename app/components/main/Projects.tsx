import React from "react";
import { Projects } from "../../constants/index";

import Card from "../subComponents/ProjectCard";

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center z-10 gap-3 h-full relative overflow-hidden sm:pb-80 pb-20 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
        My Projects
      </h1>
      <div className="flex items-center justify-center ">
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-5 gap-20 ">
          {Projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.text}
              image={project.src}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
