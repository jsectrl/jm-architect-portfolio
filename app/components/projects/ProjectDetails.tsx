"use client";

import { useState } from "react";

function Detail({ name, content }: any) {
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
        <div
          className={`relative overflow-hidden bg-pink-200 transition-all duration-500 ease-in-out ${
            isCollapsed ? `max-h-0` : `max-h-80`
          }`}
        >
          {content}
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
