"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import react from "/public/images/react.png";
import html from "/public/images/html-5.png";
import css from "/public/images/css-3.png";
import js from "/public/images/js.png";
import node from "/public/images/node-js.png";
import mysql from "/public/images/mysql.png";
import mongo from "/public/images/mongodb-icon.png";
import github from "/public/images/github.png";
import bootstrap from "/public/images/bootstrap.png";
import prisma from "/public/images/prisma.png";
import postgres from "/public/images/postgres.png";
import ts from "/public/images/typescript.png";
import chakra from "/public/images/chakra.png";
import express from "/public/images/express.png";
import postman from "/public/images/postman.png";
import git from "/public/images/git.png";
import redux from "/public/images/redux.png";
import recoil from "/public/images/recoil.png";
import aws from "/public/images/aws.png";
import figma from "/public/images/figma.png";
import cpp from "/public/images/c-.png";
import java from "/public/images/java.png";
import python from "/public/images/python.png";
import redis from "/public/images/redis.png";
import flask from "/public/images/flask.png";
import django from "/public/images/django.png";
import tailwind from "/public/images/tailwind.png";
import docker from "/public/images/docker.png";

const Skills = () => {
  const skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "TypeScript", img: ts },
    { name: "MySQL", img: mysql },
    { name: "MongoDB", img: mongo },
    { name: "Express.js", img: express },
    { name: "React.js", img: react },
    { name: "Tailwind", img: tailwind },
    { name: "Node.js", img: node },
    { name: "Redux", img: redux },
    { name: "Recoil", img: recoil },
    { name: "Bootstrap", img: bootstrap },
    { name: "Chakra UI", img: chakra },
    { name: "Git", img: git },
    { name: "GitHub", img: github },
    { name: "AWS", img: aws },
    { name: "Figma", img: figma },
    { name: "Postman", img: postman },
    { name: "Prisma", img: prisma },
    { name: "PostgreSQL", img: postgres },
    { name: "Python", img: python },
    { name: "C++", img: cpp },
    { name: "Java", img: java },
    { name: "redis", img: redis },
    { name: "Flask", img: flask },
    { name: "django", img: django },
    { name: "docker", img: docker },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <div id="skills" className="skillsmain p-8">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <motion.div
        className="skillscont grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 shadow-md rounded-lg"
            variants={itemVariants}
            whileHover="hover"
          >
            <Image
              src={skill.img}
              alt={skill.name}
              width={64}
              height={64}
              className="mb-2"
            />
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
