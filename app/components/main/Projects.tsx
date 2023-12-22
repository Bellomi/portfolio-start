import React from "react";
import { Projects } from "../../constants/index";

import Card from "../subComponents/ProjectCard";

const MyProjects = () => {
  return (
    <div
      className="relative mb-20 z-10 flex flex-col items-center justify-center"
      id="projects"
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
    </div>
  );
};

export default MyProjects;
