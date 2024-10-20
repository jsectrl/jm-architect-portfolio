import Image from "next/image";
import Sidebar from "./components/general/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar collapsed={false} children={null}></Sidebar>
      <div className="flex-grow h-full bg-green-300">Main Content</div>
    </>
  );
}
