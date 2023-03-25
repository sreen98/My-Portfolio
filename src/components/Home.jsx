import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex px-10 py-20 md:flex-row flex-col items-center  bg-backGround h-screen w-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-aboutText">
            Hi, I'm Sreenath P.
            <br className="hidden lg:inline-block" />I am a React Developer
          </h1>
          {/*  <p className="mb-8 leading-relaxed"></p> */}
          <div className="flex justify-center">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              See Work Experience
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
