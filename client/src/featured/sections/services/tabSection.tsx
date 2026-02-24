"use client";
import { useState } from "react";

const tabs = ["All", "Branding", "Web Design", "App design", "Product Design"];

const projects = [
  {
    id: 1,
    title: "Landau Web Design",
    desc: "Figma ipsum component variant main layer. Figma ipsum component variant main layer.",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200",
  },
  {
    id: 2,
    title: "Brand Identity",
    desc: "Figma ipsum component variant main layer. Figma ipsum component variant main layer.",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
  },
  {
    id: 3,
    title: "Mobile App UI",
    desc: "Figma ipsum component variant main layer. Figma ipsum component variant main layer.",
    category: "App design",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200",
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-20 px-6 mx-auto gap-3  ">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-linear-to-br w-101.5 h-123.25 flex flex-col gap-4.5 from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[309px] object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="pt-0 pr-3 pb-0 pl-[22px]">
              <h3 className="text-white text-[20px] font-semibold leading-[30px] font-poppins mb-3">
                {project.title}
              </h3>
              <p className="text-white text-[14px] font-normal font-poppins mb-5 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2.5 text-[16px] ">
                <span className="px-4 py-1  rounded-full border border-zinc-700 text-gray-400">
                  UX/UI
                </span>
                <span className="px-4 py-1  rounded-full border border-zinc-700 text-gray-400">
                  Landing page
                </span>
                <span className="px-4 py-1  rounded-full border border-zinc-700 text-gray-400">
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
