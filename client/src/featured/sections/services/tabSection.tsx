"use client";
import { useState } from "react";

const tabs = ["All", "Branding", "Web Design", "App design", "Product Design"];

const projects = [
  {
    id: 1,
    title: "Qrafik dizayn telimi",
    desc: "Figma ipsum component variant main layer. Figma ipsum component variant main layer.",
    category: "Web Design",
    image: "/qrafik.jpeg",
  },
  {
    id: 2,
    title: "Şəxsi brendinq təlimi",
    desc: "Figma ipsum component variant main layer. Figma ipsum component variant main layer.",
    category: "Branding",
    image: "/dizayn.jpeg",
  },
  {
    id: 3,
    title: "Ux uı dizayn təlimi",
    desc: "Figma ipsum component variant main layer. Figma ipsum component variant main layer.",
    category: "App design",
    image: "/brendinq.jpeg",
  },
];

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 px-6 mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300 
            ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                : "bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-20 px-6 mx-auto gap-3 ">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="w-101.5 h-123.25 flex flex-col bg-[#1C1C1E] gap-4.5 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] hover:bg-[#4F3C9D] transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[309px] object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="pt-0 pr-3 pb-0 pl-[22px] ">
              <h3 className="text-white text-[20px] font-semibold leading-[30px] font-poppins mb-3">
                {project.title}
              </h3>
              <p className="text-white text-[14px] font-normal font-poppins mb-5 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2.5 text-[16px] font-poppins font-normal  text-white ">
                <span className="p-2.5 rounded-[10px] hover:bg-[#8953C5]  border border-[#2D2D32] ">
                  UX/UI
                </span>
                <span className="p-2.5  rounded-[10px] hover:bg-[#8953C5] border border-[#2D2D32] ">
                  Landing page
                </span>
                <span className="p-2.5  rounded-[10px] hover:bg-[#8953C5] border border-[#2D2D32] ">
                  Web design
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
