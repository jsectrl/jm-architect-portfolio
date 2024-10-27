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
          className={`submenu-item ${
            isCollapsed
              ? `bg-black opacity-80`
              : `bg-white text-black opacity-100`
          }`}
          onClick={handleClick}
        >
          <h3 className="opacity-100">{name}</h3>
          <h3>+</h3>
        </div>
        {categoryProjects.map((project: any, index: any) => (
          <div className={`project-option ${isCollapsed ? `h-0` : `h-12`}`}>
            <Link
              className="w-full h-full flex items-center p-2"
              href={`projects/${project.slug}`}
              key={index}
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
          <Category
            key={index}
            name={item.name}
            categoryProjects={item.projects}
          />
        ))}
      </div>
    </>
  );
}
