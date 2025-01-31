// src/pages/ProjectListPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListPage: React.FC = () => {
  return (
    <div className="relative p-6 bg-black min-h-screen text-white">
      {/* Background bouncing objects for consistent design */}
      <div className="bouncing-object bouncing-object-1"></div>
      <div className="bouncing-object bouncing-object-2"></div>
      <div className="bouncing-object bouncing-object-3"></div>
      <div className="bouncing-object bouncing-object-4"></div>

      <h1 className="text-4xl font-bold mb-8 text-center">Select Your Project</h1>

      <div className="flex flex-col items-center space-y-8">
        {/* React Projects Button */}
        <Link to="/projects/react-projects" className="w-3/4 md:w-1/2">
          <button className="w-full text-lg bg-gray-800 hover:bg-gray-700 text-white py-4 px-6 rounded-lg transition-all shadow-lg">
            React Practice Projects
          </button>
        </Link>

        {/* Portfolio Projects Button */}
        <Link to="/projects/portfolio-projects" className="w-3/4 md:w-1/2">
          <button className="w-full text-lg bg-gray-800 hover:bg-gray-700 text-white py-4 px-6 rounded-lg transition-all shadow-lg">
            Portfolio Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectListPage;
