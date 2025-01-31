// src/components/ReactProjectsPage.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { reactProjects } from "../data/ReactProjectData";
import { ReactProjectCard } from "../components/ReactProjectComponent";

const ReactProjectsPage: React.FC = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative p-6 bg-black min-h-screen text-white">
      {/* Background bouncing objects (optional) */}
      <div className="bouncing-object bouncing-object-1"></div>
      <div className="bouncing-object bouncing-object-2"></div>
      <div className="bouncing-object bouncing-object-3"></div>
      <div className="bouncing-object bouncing-object-4"></div>

      {/* Page Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center">My React Practice Projects</h1>

      {/* List of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reactProjects.map((project, index) => (
          <ReactProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ReactProjectsPage;
