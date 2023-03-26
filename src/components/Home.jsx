import React from "react";
import { Rotate } from "react-awesome-reveal";
import Navbar from "./common/Navbar";

export default function Home({ description }) {
  return (
    <>
      <Navbar rollAvatar={true} />
      <div className="flex px-10 py-10 md:flex-row flex-col items-center  bg-backGround h-screen ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-aboutText">
            <Rotate cascade> Hey, I'm Sreenath P.</Rotate>
            <div className="ml-2">{description}</div>
            {/*  <br className="hidden lg:inline-block" />I am a React Developer */}
          </h1>
          {/*  <p className="mb-8 leading-relaxed"></p> */}
          {/*  <div className="flex justify-center">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              See Work Experience
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}

Home.defaultProps = {
  description:
    "I am a React Developer, currenlty working in Wipro as Senior Software Engineer.",
};
