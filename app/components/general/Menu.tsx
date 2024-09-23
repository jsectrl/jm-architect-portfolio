"use client";

import { useState } from "react";

export default function Menu() {
  const [isCollapsed, collapseMenu] = useState(false);
  const handleClick = () => {
    collapseMenu(!isCollapsed);
  };
  return (
    <>
      <div className="flex flex-col w-80">
        <div
          className="w-full h-12 bg-white text-black hover:cursor-pointer"
          onClick={handleClick}
        >
          Architect Co.
        </div>
        <div
          className={`relative transition-all duration-300 border border-red-300 ease-in-out grid grid-cols-2 ${
            isCollapsed ? `h-0` : `h-72`
          }`}
        >
          <a
            href="/about"
            className="overflow-hidden border border-red-300 text-white hover:bg-red-300 hover:text-black hover:cursor-pointer"
          >
            <div className="">About</div>
          </a>
          <a
            href="/projects"
            className="overflow-hidden border border-red-300 text-white hover:bg-red-300 hover:text-black hover:cursor-pointer"
          >
            <div className="">Projects</div>
          </a>
          <a
            href="/news"
            className="overflow-hidden border border-red-300 text-white hover:bg-red-300 hover:text-black hover:cursor-pointer"
          >
            <div className="">News</div>
          </a>
          <a
            href="/contact"
            className="overflow-hidden border border-red-300 text-white hover:bg-red-300 hover:text-black hover:cursor-pointer"
          >
            <div className="">Contact</div>
          </a>
        </div>
      </div>
    </>
  );
}
