import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className=" md:sticky top-0 z-10 bg-navBarBG">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img
          class="w-10 h-10 rounded-full"
          src="/img/avatar.png"
          alt="Rounded avatar"
        />
        <a className="title-font font-medium  mb-4 md:mb-0  text-navBarName">
          <a href="/" className="ml-3 text-xl">
            Sreenath P
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {/* <Link to="projects" className="mr-5 hover:text-white">
            Past Work
          </Link> */}
          <Link to="/skills" className="mr-5 hover:text-white">
            Skills
          </Link>
          <Link to="/resume" className="mr-5 hover:text-white">
            Resume
          </Link>
        </nav>
        <Link
          to="/contactinfo"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <img
            src="/icons/contact-mail.png"
            alt="contact"
            className="h-7 w-7"
          />
          {/* <AiOutlineContacts size="2rem" /> */}
        </Link>
      </div>
    </header>
  );
}
