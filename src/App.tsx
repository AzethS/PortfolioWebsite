import "./App.css";
import NavBar from "./navbar";
import imagePath from "./assets/ais.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReactProjectsPage from "./pages/ReactProjectsPage";
import PortfolioProjectsPage from "./pages/PortfolioProjects";
import ProjectListPage from "./pages/ProjectsPage";
import { Game } from "./pages/projects/Board";
import { Disk } from "./pages/projects/Disk";
import Udemy from "./pages/projects/UdemyCursus";
import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";

export default function App() {
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Projects", path:"/projects",
      dropdown: [
        { name: "React Projects", path: "/projects/react-projects" },
        { name: "Portfolio Projects", path: "/projects/portfolio" },
      ],
    },
    { name: "About Me", path: "/about-me" },
  ];

  return (
    <Router>
      {/* Make sure the outer div has the proper layout class */}
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <NavBar
          brandName="Fairys Ardhana"
          imageSrcPath={imagePath}
          navItems={navItems}
        />

        {/* Main content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Projects route */}
            <Route
              path="/projects"
              element={<ProjectListPage />}
            />
            <Route
              path="/projects/react-projects"
              element={<ReactProjectsPage />}
            />
            <Route
              path="/projects/portfolio"
              element={<PortfolioProjectsPage />}
            />
            <Route
              path="/projects/react-projects/board-game"
              element={<Game />}
            />
            <Route path="/projects/react-projects/disk" element={<Disk />} />
            <Route path="/projects/react-projects/udemy-cursus" element={<Udemy />} />

            {/* Rest of route */}
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/contact-me" element={<ContactMePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
