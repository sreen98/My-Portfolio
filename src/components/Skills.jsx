import React, { useEffect } from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { skills, tools } from "../data/Data";
import { VscTools } from "react-icons/vsc";
import { FaReact, FaJira } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiRedux,
  SiReduxsaga,
  SiJest,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiKibana,
  SiGit,
} from "react-icons/si";
import { IconContext } from "react-icons";
import { GiSkills } from "react-icons/gi";
export default function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIcon = (iconName) => {
    let CustomIcon = "";
    switch (iconName) {
      case "React":
        CustomIcon = <FaReact />;
        break;
      case "Javascript":
        CustomIcon = <DiJavascript1 />;
        break;
      case "Redux":
        CustomIcon = <SiRedux />;
        break;
      case "Saga":
        CustomIcon = <SiReduxsaga />;
        break;
      case "React Testing Library":
        CustomIcon = <SiReact />;
        break;
      case "Jest":
        CustomIcon = <SiJest />;
        break;
      case "HTML":
        CustomIcon = <SiHtml5 />;
        break;
      case "CSS":
        CustomIcon = <SiTailwindcss />;
        break;
      case "Kibana":
        CustomIcon = <SiKibana />;
        break;
      case "Git":
        CustomIcon = <SiGit />;
        break;
      case "Jira":
        CustomIcon = <FaJira />;
        break;
      default:
        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />;
    }
    return CustomIcon;
    /*   return (
      <IconContext.Provider value={{ color: "green" }}>
        <CustomIcon />
      </IconContext.Provider>
    ); */
  };
  return (
    <section id="skills">
      <div className="flex">
        <div className="container px-5 py-5 mx-auto">
          <div className="text-center mb-10">
            <GiSkills size="5rem" className="w-10 inline-block mb-2" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
              Skills
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <IconContext.Provider
                    value={{ color: "#5D9C59", size: "2rem" }}
                  >
                    {handleIcon(skill)}
                  </IconContext.Provider>

                  <span className="title-font font-medium text-white px-4">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mb-10">
            <VscTools size="5rem" className="w-10 inline-block " />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
              Tools
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {tools.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <IconContext.Provider
                    value={{ color: "#5D9C59", size: "2rem" }}
                  >
                    {handleIcon(skill)}
                  </IconContext.Provider>

                  <span className="title-font font-medium text-white px-4">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
