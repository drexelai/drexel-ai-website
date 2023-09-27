import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-blue-900">
      <nav className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-white text-2xl pl-6 sm:pl-0">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <div className={`md:hidden ${isMobileMenuOpen ? "flex space-x-6" : "hidden"}`}>
            {/* Mobile menu items */}
            <NavLink
              to="/about"
              className="text-white block py-2 hover:bg-gray-900 text-sm"
            >
              About Us
            </NavLink>
            <NavLink
              to="/research"
              className="text-white block py-2 hover:bg-gray-900 text-sm"
            >
              Research
            </NavLink>
            <NavLink
              to="/projects"
              className="text-white block py-2 hover:bg-gray-900 text-sm"
            >
              Projects
            </NavLink>
            <a
              href="https://drexel.campuslabs.com/engage/organization/drexelai"
              className="text-white block py-2 hover:bg-gray-900 text-sm"
            >
              Events
            </a>
          </div>
          {/* Hamburger menu */}
          <div className="md:hidden pr-4">
            <button className="text-white" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-12">
            {/* About us section */}
            <NavLink
              to="/about"
              className="text-white hover:text-gray-900 font-medium text-xl lg:text-lg xl:text-lg"
            >
              About Us
            </NavLink>

            {/* Research Section */}
            <NavLink
              to="/research"
              className="text-white hover:text-gray-900 font-medium text-xl lg:text-lg xl:text-lg"
            >
              Research
            </NavLink>

            {/* Project Section */}
            <NavLink
              to="/projects"
              className="text-white hover:text-gray-900 font-medium text-xl lg:text-lg xl:text-lg"
            >
              Projects
            </NavLink>

            {/* Events */}
            <a
              href="https://drexel.campuslabs.com/engage/organization/drexelai"
              className="text-white hover:text-gray-900 font-medium text-xl lg:text-lg xl:text-lg"
            >
              Events
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;