import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion"; // For smooth animations

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: {
    name: string;
    path?: string;
    dropdown?: { name: string; path: string }[];
  }[];
}

function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {
  const location = useLocation(); // Get the current route

  // Animation Variants for dropdown
  const dropDownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="navbar bg-black text-white shadow-lg" // Dark background and white text
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="navbar-start">
        {/* Logo and brand with subtle animation */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl flex items-center text-white"
          >
            <img src={imageSrcPath} alt="logo" className="h-8 w-8 mr-2" />
            {brandName}
          </Link>
        </motion.div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) =>
            item.dropdown ? (
              <li key={item.name} className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`btn btn-ghost flex items-center text-white ${
                    location.pathname.includes("/projects") ? "bg-gray-800" : ""
                  } hover:bg-gray-800 hover:text-white`}
                >
                  {item.name}
                  <ChevronDownIcon className="ml-1 h-5 w-5" />
                </motion.div>

                {/* Dropdown menu with smooth slide-down animation */}
                <motion.ul
                  className="absolute left-0 mt-12 bg-gray-800 text-white rounded-box shadow-lg w-48 z-20 hidden group-hover:block"
                  variants={dropDownVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {item.dropdown.map((dropdownItem) => (
                    <li key={dropdownItem.name}>
                      <Link
                        to={dropdownItem.path}
                        className={`block px-4 py-2 hover:bg-gray-700 hover:text-white ${
                          location.pathname === dropdownItem.path
                            ? "bg-gray-700"
                            : ""
                        }`}
                      >
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </li>
            ) : (
              <li key={item.name}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path || "/"}
                    className={`btn btn-ghost hover:bg-gray-800 hover:text-white text-white ${
                      location.pathname === item.path ? "bg-gray-800" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/contact-me"
            className="btn  bg-gray-700 hover:bg-gray-800 text-white"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default NavBar;
