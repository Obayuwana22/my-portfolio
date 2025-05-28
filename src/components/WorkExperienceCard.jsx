import { nanoid } from "nanoid";
import React from "react";

const WorkExperienceCard = () => {
  const work = [
    {
      id: nanoid(),
      date: "Sep 2024 - Jan 2025",
      organization: "Pedxo",
      responsibilities: [
        {
          id: nanoid(),
          desc: "Transforms UI/UX designs into interactive React components, fostering creativity and innovation in web development. ",
        },
        {
          id: nanoid(),
          desc: "Ensures device-optimized websites for consistent user experiences using ReactJS and Tailwindcss. ",
        },
        {
          id: nanoid(),
          desc: "Builds reusable, maintainable components adhering to best practices for scalable and efficient front-end architecture, leveraging ES6+ JavaScript features",
        },
        {
          id: nanoid(),
          desc: "Collaborates with diverse teams to execute project timelines and deliver high-quality web applications. ",
        },
      ],
    },

    {
      id: nanoid(),
      date: "Sep 2023 - Dec 2023",
      organization: "TechVerse",
      responsibilities: [
        {
          id: nanoid(),
          desc: "Developed interactive React components based on UI/UX designs, focusing on creating user-friendly and engaging web interfaces.",
        },
        {
          id: nanoid(),
          desc: "Leveraged Git for version control, ensuring smooth collaboration and efficient code management throughout the development lifecycle.  ",
        },
        {
          id: nanoid(),
          desc: "Ensures device-optimized websites for consistent user experiences using HTML5 and CSS3. ",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {work.map((item) => (
        <div key={item.id} className="px-4 py-6 bg-[#FFFFFF0A] rounded-xl">
          <div className="text-sm font-normal text-gray-white ">
            {item.date}
          </div>
          <div className="text-2xl font-medium text-gray-white  my-2">
            {item.organization}
          </div>
          {item.responsibilities.map((responsibility) => (
            <div key={responsibility.id}>
              <li className="text-sm font-normal text-gray-white mb-2">
                {responsibility.desc}
              </li>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceCard;
