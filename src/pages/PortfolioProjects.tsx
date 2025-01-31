// src/components/PortfolioProjects.tsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Project, projects } from "../data/ProjectsData";
import { ProjectModal } from "../components/ProjectComponent";

const PortfolioProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div className="relative p-6 bg-black min-h-screen text-white">
      {/* Background bouncing objects */}
      <div className="bouncing-object bouncing-object-1"></div>
      <div className="bouncing-object bouncing-object-2"></div>
      <div className="bouncing-object bouncing-object-3"></div>
      <div className="bouncing-object bouncing-object-4"></div>

      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative card bg-gray-800 shadow-xl transform transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => setSelectedProject(project)}
          >
            <figure>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p className="max-h-16 overflow-hidden transition-max-height duration-500 ease-in-out hover:max-h-full">
                {project.description}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-gray-700 hover:bg-gray-800 text-white">
                  More Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show modal if a project is selected */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PortfolioProjects;
