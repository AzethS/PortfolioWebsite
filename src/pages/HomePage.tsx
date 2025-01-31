import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Parallax Background for Hero Section with Overlay */}
      <Parallax
        bgImage="https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg"
        strength={500}
        className="relative"
      >
        {/* Dark overlay for better text visibility */}
        <div className="hero h-screen flex justify-center items-center relative">
          {/* Add a blur to the background and darken it */}
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-md"></div>

          {/* Content inside the hero section */}
          <div className="hero-content text-center text-white py-32 relative z-10">
            <div className="max-w-lg">
              <motion.h1
                className="text-5xl font-bold drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="h-20 overflow-hidden flex items-center justify-center">
                  <Typewriter
                    words={[
                      "Hello, World!",
                      "Welcome to my portfolio website!",
                    ]}
                  />
                </div>
              </motion.h1>
              <motion.p
                className="py-6 text-lg drop-shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                I'm a 22-year-old Informatica student, currently doing an
                internship at Skalar. I specialize in fullstack development and
                building modern web applications.
              </motion.p>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn bg-gray-500 hover:bg-gray-600 text-white btn-lg hover:scale-105 transition-all"
                >
                  View My Projects
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Introduction Section */}
      <section className="py-12 text-center" data-aos="fade-up">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-4xl font-bold h-16 flex items-center drop-shadow-lg">
            <Typewriter words={["Who Am I?", "I am Fairys!"]} />
          </h2>
        </div>
        <p className="text-lg max-w-2xl mx-auto text-gray-400">
          I'm a final-year student at Avans University of Applied Sciences,
          passionate about web development, data science and full stack development. I built this portfolio to showcase my
          skills, projects, experiences and as a way to practice React.
        </p>
      </section>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {/* Card 1 - Projects */}
        <motion.div
          className="card bg-gray-800 w-full shadow-2xl transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          data-aos="zoom-in"
        >
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107553361-5ecf82b11f3b.webp"
              alt="Projects"
              className="h-48 w-full object-cover brightness-50"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Projects</h2>
            <p className="text-gray-300">
              A collection of web applications and other projects that I've
              worked on, built using React and other modern technologies.
            </p>
            <div className="card-actions justify-end">
              <Link to="/projects">
                <button className="btn bg-gray-500 hover:bg-gray-600 text-white">
                  Explore Projects
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Card 2 - About Me */}
        <motion.div
          className="card bg-gray-800 w-full shadow-2xl transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="About Me"
              className="h-48 w-full object-cover brightness-50"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">About Me</h2>
            <p className="text-gray-300">
              Learn more about my education, internship experience, and hobbies,
              and how I became passionate about web development.
            </p>
            <div className="card-actions justify-end">
              <Link to="/about-me">
                <button className="btn bg-gray-500 hover:bg-gray-600 text-white ">
                  More About Me
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Card 3 - Contact */}
        <motion.div
          className="card bg-gray-800 w-full shadow-2xl transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107554436-1a4b42d8d5c2.webp"
              alt="Contact"
              className="h-48 w-full object-cover brightness-50"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Contact</h2>
            <p className="text-gray-300">
              Feel free to reach out to me for collaborations, internships, or
              simply to connect! You can find me on GitHub and LinkedIn.
            </p>
            <div className="card-actions justify-end">
              <Link to="/contact-me">
                <button className="btn bg-gray-500 hover:bg-gray-600 text-white">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
