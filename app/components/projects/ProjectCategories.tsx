"use client";

import { useState, useEffect } from "react";
import projectData from "../../data/data.json";

function Category({ name, categoryProjects }: any) {
  const [isCollapsed, collapseCategory] = useState(false);

  const handleClick = () => {
    collapseCategory(!isCollapsed);
  };

  return (
    <>
      <div className="w-full">
        <div
          className="w-full h-12 bg-pink-500 hover:cursor-pointer"
          onClick={handleClick}
        >
          {name}
        </div>
        {categoryProjects.map((project: any) => (
          <div
            className={`relative overflow-hidden bg-pink-200 transition-all duration-300 ease-in-out ${
              isCollapsed ? `h-0` : `h-12`
            }`}
          >
            {project.name}
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
      name: "Residential",
      projects: projects.filter(
        (project) => project.category === "residential"
      ),
    },
    {
      key: "commercial",
      name: "Commercial",
      projects: projects.filter((project) => project.category === "commercial"),
    },
    {
      key: "public-works",
      name: "Public Works",
      projects: projects.filter(
        (project) => project.category === "public-works"
      ),
    },
  ];

  return (
    <>
      {categories.map((item: any, index: any) => (
        <Category name={item.name} categoryProjects={item.projects} />
      ))}
    </>
  );
}
