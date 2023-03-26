import React from "react";
import { Roll } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function Navbar({ rollAvatar = false }) {
  return (
    <header className=" md:sticky top-0 z-10 bg-navBarBG">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <>
          <Avathar flag={rollAvatar} />
          <a
            className="title-font font-medium  mb-4 md:mb-0  text-navBarName"
            href="/"
          >
            <a href="/" className="ml-3 text-xl">
              Sreenath P
            </a>
          </a>
        </>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
          {/* <div className="inline-flex items-center border-0 py-1 mr-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ">
            <img className="h-5 w-5" src="/icons/portfolio.png" alt="call" />
            <Link to="/experience" className="ml-1  hover:text-white">
              Experience
            </Link>
          </div> */}
          <div className="inline-flex items-center border-0 py-1 mr-3  focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ">
            <img className="h-5 w-5" src="/icons/skills.png" alt="call" />
            <Link to="/skills" className="ml-1  hover:text-white">
              Skills
            </Link>
          </div>
          <div className="inline-flex items-center  mr-3 border-0 py-1  focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <img className="h-5 w-5" src="/icons/curriculum.png" alt="call" />
            <Link to="/resume" className="ml-1  hover:text-white">
              Resume
            </Link>
          </div>
        </nav>

        <>
          <div className="inline-flex items-center border-0 py-1  mr-2 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <img
              className="h-6 w-6 pb-0.5"
              src="/icons/callicon.png"
              alt="call"
            />
            <img
              className="h-6 w-5 ml-2"
              src="/icons/india.png"
              alt="indianflag"
            />
            <span className="ml-2">
              <a href="tel:7907919037">+91-7907919037</a>
            </span>
          </div>
          <div className="inline-flex items-center bg-gray-800 mr-2 border-0 py-1  focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ml-1">
            <Link to="/contactinfo">Contact Me</Link>
            <img src="/icons/chat.png" alt="contact" className="h-7 w-7 ml-1" />
          </div>
        </>
      </div>
    </header>
  );
}

const Avathar = ({ flag }) => {
  return (
    <div className="w-10 h-10">
      {flag ? (
        <Roll>
          <img
            className="rounded-full"
            src="/img/avatar.png"
            alt="Rounded avatar"
          />
        </Roll>
      ) : (
        <img
          className="rounded-full"
          src="/img/avatar.png"
          alt="Rounded avatar"
        />
      )}
    </div>
  );
};
