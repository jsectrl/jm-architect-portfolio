import React from "react";
import Menu from "./Menu";

export default function Sidebar(props: {
  collapsed: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-96 h-full flex flex-col items-center overflow-y-auto no-scrollbar ">
        <Menu collapsed={props.collapsed} />
        {props.children}
      </div>
    </>
  );
}
