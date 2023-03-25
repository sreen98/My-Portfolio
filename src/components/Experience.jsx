import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data/Data";
import Navbar from "./common/Navbar";
import { Bounce } from "react-awesome-reveal";

export default function Experience() {
  return (
    <>
      <Navbar />
      <div className="bg-backGround h-screen">
        <div className=" px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              My Previous Experiences
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <>
                <div className="flex relative">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                    <Bounce heartBeat>
                      <img
                        alt="gallery"
                        className="w-10 h-10"
                        src={project.imagePath}
                      />
                    </Bounce>

                    <div>
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.designation}
                      </h2>
                      <div className="opacity-0 hover:opacity-100">
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                          {project.techStack}
                        </h1>
                        <p className="leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
