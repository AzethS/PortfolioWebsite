// src/components/ReactProjectComponent.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactProject } from "../data/ReactProjectData";

interface ReactProjectCardProps {
  project: ReactProject;
}

export const ReactProjectCard: React.FC<ReactProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="relative card bg-gray-800 shadow-xl transform transition-transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="max-h-16 overflow-hidden transition-max-height duration-500 ease-in-out hover:max-h-full">
          {project.description}
        </p>
        <div className="card-actions justify-end">
          <Link to={project.routeLink} className="btn bg-gray-700 hover:bg-gray-800 text-white">
            Go to Project
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
