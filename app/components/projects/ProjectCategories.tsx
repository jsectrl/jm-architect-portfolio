"use client";

import { useState, useEffect } from "react";
import projectData from "../../data/data.json";
import Link from "next/link";

function Category({ name, categoryProjects }: any) {
  const [isCollapsed, collapseCategory] = useState(true);

  const handleClick = () => {
    collapseCategory(!isCollapsed);
  };

  return (
    <>
      <div className="w-full">
        <div
          className="w-full h-12 p-2 flex items-center bg-gray-500 hover:cursor-pointer hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          <h3 className="">{name}</h3>
        </div>
        {categoryProjects.map((project: any) => (
          <div
            className={`relative overflow-hidden bg-gray-300 transition-all duration-300 ease-in-out ${
              isCollapsed ? `h-0` : `h-12`
            }`}
          >
            <Link
              className="w-full h-full flex items-center p-2 text-black"
              href={`projects/${project.slug}`}
            >
              {project.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ProjectCategories() {
  const [projects, setProjects] = useState(projectData.projects);

  const categories = [
    {
      key: "residential",
      name: "RESIDENTIAL",
      projects: projects.filter(
        (project) => project.category === "residential"
      ),
    },
    {
      key: "commercial",
      name: "COMMERCIAL",
      projects: projects.filter((project) => project.category === "commercial"),
    },
    {
      key: "public-works",
      name: "PUBLIC WORKS",
      projects: projects.filter(
        (project) => project.category === "public-works"
      ),
    },
  ];

  return (
    <>
      <div className="w-full my-4 space-y-4">
        {categories.map((item: any, index: any) => (
          <Category name={item.name} categoryProjects={item.projects} />
        ))}
      </div>
    </>
  );
}
