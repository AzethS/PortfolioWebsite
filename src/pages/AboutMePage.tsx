import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faBook,
  faGamepad,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

// Animation variants for motion components
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

// Skill, Technology, and Framework Cards Data
const skills = [
  { name: "React", level: "Beginner" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
];

const technologies = [
  { name: "Docker", level: "Intermediate" },
  { name: "SQL", level: "Advanced" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Firebase", level: "Intermediate" },
];

const frameworks = [
  { name: "Node.js", level: "Advanced" },
  { name: "Express", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Unity", level: "Advanced" },
];

const AboutMePage = () => {
  return (
    <motion.div
      className="p-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Particle Background */}
      <div className="particle particle-small particle-1"></div>
      <div className="particle particle-medium particle-2"></div>
      <div className="particle particle-large particle-3"></div>

      {/* Skills Cards Positioned Outside Main Card */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 absolute top-0 right-0 mt-20 mr-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-gray-400">{skill.level}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Card Content */}
      <motion.div
        className="max-w-4xl mx-auto card bg-gray-800 shadow-lg p-8 rounded-lg text-gray-300 relative"
        variants={fadeInUp}
      >
        {/* Profile Section */}
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <motion.img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full mx-auto w-40 h-40 mb-6 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <h1 className="text-5xl font-bold mb-2 text-white">Fairys</h1>
          <p className="text-lg text-gray-400">
            Bachelor Student • Informatica • Web Developer
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Hello! I'm Fairys!
          </h2>
          <p className="text-lg">
            I'm currently pursuing a Bachelor's degree in Informatica at Avans
            University of Applied Sciences, located in Breda, Netherlands. I am
            currently doing an internship at Skalar where I work on creating
            visualizations using React.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-white">Education</h2>
          <p className="text-lg">
            I am in my 4th year of studying Informatica at Avans University of
            Applied Sciences in Breda. I have gained valuable skills in web
            development, algorithms, and data structures. My passion for
            programming has grown as I’ve worked on projects using different languages and
            other modern web technologies.
          </p>
        </motion.div>

        {/* Internship Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-white">Internship</h2>
          <p className="text-lg">
            I am currently doing an internship at Skalar, focusing on building
            visualizations using React. This internship has allowed me to
            enhance my front-end development skills while working in a
            professional environment.
          </p>
        </motion.div>

        {/* Portfolio Purpose Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Portfolio Purpose
          </h2>
          <p className="text-lg">
            This portfolio was created to showcase my learning journey in React
            and modern web development. By building various projects, I’ve honed
            my skills in responsive web design and functional development,
            contributing to my growth as a developer, in preparation to do my internship project.
          </p>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-lg">
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                icon={faHeadphones}
                className="text-blue-500 mr-2 text-2xl"
              />
              <span>Music</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                icon={faBook}
                className="text-green-500 mr-2 text-2xl"
              />
              <span>Reading</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                icon={faGamepad}
                className="text-red-500 mr-2 text-2xl"
              />
              <span>Gaming</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                icon={faUsers}
                className="text-purple-500 mr-2 text-2xl"
              />
              <span>Online Friends</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-lg">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 text-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold">{tech.name}</h3>
                <p className="text-gray-400">{tech.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold mb-4 text-white">Frameworks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-lg">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 text-white p-4 shadow-lg rounded-lg transform hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold">{framework.name}</h3>
                <p className="text-gray-400">{framework.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.div className="text-center mt-8" variants={fadeInUp}>
          <p className="text-sm text-gray-500">
            Thanks for visiting my portfolio! Feel free to connect with me on
            GitHub.
          </p>
          <div className="flex justify-center mt-4">
            <motion.a
              href="https://github.com/AzethS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              aria-label="GitHub"
              whileHover={{ scale: 1.2 }}
            >
              <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMePage;
