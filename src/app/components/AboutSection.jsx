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
        <li>Programming Languages: JavaScript, Typescript, C++, Java, Python</li>
        <li>Front-End: HTML, CSS, JavaScript, React.JS, Redux, Recoil, Bootstrap, Chakra UI</li>
        <li>Back-End: Node.js, Express.js, Flask, Django, Prisma, Redis</li>
        <li>Databases Languages: MySQL, MongoDB, PostgreSQL, Firebase</li>
        <li>Developer Tools: Visual Studio, Eclipse IDE, Git, GitHub, Postman, Docker</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>Bachelor of Engineering (Information Technology)</strong> (Dec 2021 – May 2025)
          <br />
          Pune Vidyarthi Griha’s College of Engineering and Technology, CGPA – 8.3/10
        </li>
        <li>
          <strong>Higher Secondary School Certificate (Maharashtra state)</strong> (Jun 2019 – May 2021)
          <br />
          R. B. Mone Higher Secondary School, Goregaon- Raigad, Percentage – 86.33%
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Infosys data science course completion certificate</li>
        <li>Solved 100+ Questions on leetcode and attained a 5-Star Rating in C++ on HackerRank.</li>
        <li>2nd rank in Web Application Development Hackathon Hosted by PVG COET’s ACM Student Chapter</li>
        <li>The Complete 2024 Full Stack web Development Bootcamp, Udemy</li>
        <li>C++ Programming Advanced, Udemy</li>
        <li>Accenture Data Analytics and Visualization Job Simulation</li>
      </ul>
    ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Full-stack web developer specializing in MERN stack and React.js. Experienced in building responsive apps, API integration, performance
optimization, web scraping, and Chrome extensions. Passionate about solving real-world problems with practical solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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
