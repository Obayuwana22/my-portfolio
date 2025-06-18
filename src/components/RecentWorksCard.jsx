import React from "react";
import { ExternalLink } from "lucide-react";
import { GitHub } from "@mui/icons-material";
import { projects } from "../data";

const RecentWorksCard = () => {
  return (
    <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="text-gray-white bg-[#ffffff14] w-full border border-[#403F3F] rounded-2xl flex flex-col"
        >
          <div className="my-4">
            <img src={project.thumbnail} alt="" />
          </div>
          <div className="border-t-2 border-t-[#403F3F] rounded-t-2xl px-5 py-4 flex flex-col flex-1">
            <div className="font-extrabold mb-2 xl:text-xl">
              {project.title}
            </div>
            <p className="xl:text-lg">{project.description}</p>
            <div className="flex-1" />
            <div className="flex flex-col">
              <div className="space-x-2 mb-5 mt-10">
                {project.badges.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#01313F] px-3 rounded-full inline-block"
                  >
                    <div>{item.badge}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 just">
                {/* <button className="border px-3 py-2 rounded-[9px] font-medium xl:text-xl">
                  <a href={project.codeUrl} target="_blank" className="flex">
                    <GitHub className="mr-3" />
                    Code
                  </a>
                </button> */}
                <button className="px-3 py-2 font-medium rounded-xl bg-gradient-to-r from-[#00C8FF] to-[#01313F] xl:text-xl">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-3" />
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentWorksCard;
