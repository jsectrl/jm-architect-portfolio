"use client";

import { useState } from "react";

function ProjectTag({
  name,
  location,
  date,
}: {
  name: string;
  location: string;
  date: string;
}) {
  return (
    <>
      <div className="h-18 w-full bg-white flex flex-col px-4 space-y-1 justify-center text-black">
        <h2 className="uppercase">{name}</h2>
        <h3 className="text-sm">
          {location} {date}
        </h3>
      </div>
    </>
  );
}

function Detail({ name, content }: { name: string; content: string }) {
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
          <h3>{name}</h3>
          <h3>+</h3>
        </div>
        <div
          className={`detail-section ${isCollapsed ? `max-h-0` : `max-h-96`}`}
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
      <div className="w-full pt-12 my-4 space-y-4">
        <ProjectTag
          name={props.name}
          location={props.location}
          date={props.date}
        />
        <Detail name={"Description"} content={props.description} />
        <Detail name={"Credits"} content={props.credits} />
      </div>
    </>
  );
}
