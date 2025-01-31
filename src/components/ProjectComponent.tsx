// src/components/ProjectComponent.tsx
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../data/ProjectsData";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
    >
      <motion.div
        className="bg-gray-900 text-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3 p-6 relative"
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.7 }}
      >
        <button className="absolute top-2 right-2 text-2xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="mb-4 w-full h-48 object-cover rounded-lg shadow-md"
        />
        <p className="text-gray-400 text-sm mb-4 italic">
          Completed on: {project.completionDate}
        </p>
        <p className="mb-4">{project.detailedDescription}</p>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Languages/Technologies Used:</h3>
          <ul className="list-disc list-inside">
            {project.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
        <a
          href={project.githubLink}
          className="btn bg-gray-700 hover:bg-gray-800 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
};
