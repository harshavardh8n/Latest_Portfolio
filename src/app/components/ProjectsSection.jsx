"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RoomieMate",
    description: "A web app to simplify co-living with features like group chat, expense tracking, roommate finding, and item exchange.",
    image: "/images/projects/roomiemate.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshavardh8n/rommieMate_frontend",  // Replace with actual GitHub link
    previewUrl: "https://roomiemate.vercel.app/",  // Replace with actual preview URL
  },
  {
    id: 2,
    title: "ResuMine",
    description: "A MERN stack web app for resume analysis and enhancement, integrated with Gemini API for personalized suggestions.",
    image: "/images/projects/resumine.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshavardh8n/Resumine-frontend",  // Replace with actual GitHub link
    previewUrl: "https://resumine-frontend.vercel.app/analyse",  // Replace with actual preview URL
  },
  {
    id: 5,
    title: "ChessNest",
    description: "A Full stack realtime chess game web app built using React.ts and Node.js, Typescript and Websockets",
    image: "/images/projects/chessnest.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshavardh8n/Chess_Frontend",  // Replace with actual GitHub link
    previewUrl: "https://chess-frontend-last.vercel.app/",  // Replace with actual preview URL
  },
  {
    id: 3,
    title: "CoverMate AI",
    description: "A Chrome extension that generates personalized cover letters for Internshala applications using Gemini AI.",
    image: "https://www.cryptus.in/hackingnews/wp-content/uploads/2023/09/Chrome_Browser_Extensions-1-150x150.png",
    tag: ["All", "Extension"],
    gitUrl: "https://github.com/harshavardh8n/Internshala-coverletter-automation",  // Replace with actual GitHub link
    previewUrl: "/",  // Replace with actual preview URL
  },
  {
    id: 4,
    title: "EcoLink",
    description: "A full-stack social media application that let you upload media (photos, videos, audio,etc) and lets you add new friends..",
    image: "/images/projects/echolink.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshavardh8n/EchoLink",  // Replace with actual GitHub link
    previewUrl: "/",  // Replace with actual preview URL
  },
  {
    id: 6,
    title: "Cartcom",
    description: "A full stack Ecommerce web application built using React.js, Javascript, Node.js, Express.js, MongoDB",
    image: "/images/projects/cartcom3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshavardh8n/cartcom-frontend",  // Replace with actual GitHub link
    previewUrl: "https://cart-com-frontend.vercel.app/",  // Replace with actual preview URL
  },
];





const ProjectsSection = () => {
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 max-w-full">
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
          name="Extension"
          isSelected={tag === "Extension"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
