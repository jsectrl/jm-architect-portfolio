"use client";

import { useState } from "react";

function Detail({ name, content }: any) {
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
          {name}
        </div>
        <div
          className={`relative overflow-hidden bg-white transition-all duration-500 ease-in-out ${
            isCollapsed ? `max-h-0` : `max-h-96`
          }`}
        >
          <p className="p-2 text-black text-justify">{content}</p>
        </div>
      </div>
    </>
  );
}

export default function ProjectDetails(props: {
  name: string;
  description: string;
  location: string;
  date: string;
  credits: string;
}) {
  return (
    <>
      <div className="w-full my-4 space-y-4">
        <Detail name={"Name"} content={props.name} />
        <Detail name={"Date"} content={props.date} />
        <Detail name={"Location"} content={props.location} />
        <Detail name={"Description"} content={props.description} />
        <Detail name={"Credits"} content={props.credits} />
      </div>
    </>
  );
}
