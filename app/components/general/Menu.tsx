"use client";

import { useState } from "react";

export default function Menu(props: { collapsed: boolean }) {
  const [isCollapsed, collapseMenu] = useState(props.collapsed);
  const handleClick = () => {
    collapseMenu(!isCollapsed);
  };
  return (
    <>
      <div className="flex flex-col w-96">
        <div
          className="flex w-full h-8 px-1 items-center bg-white text-black hover:cursor-pointer"
          onClick={handleClick}
        >
          <h4 className="font-semibold text -sm">ARCHITECT CO</h4>
        </div>
        <div
          className={`relative flex overflow-hidden transition-all duration-300 border border-red-300 ease-linear grid grid-cols-2 ${
            isCollapsed ? `h-0` : `h-88`
          }`}
        >
          <div className="flex">
            <a href="/about" className="menu-item">
              About
            </a>
          </div>
          <div className="flex">
            <a href="/projects" className="menu-item">
              Projects
            </a>
          </div>
          <div className="flex">
            <a href="/news" className="menu-item">
              News
            </a>
          </div>
          <div className="flex">
            <a href="/contact" className="menu-item">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
