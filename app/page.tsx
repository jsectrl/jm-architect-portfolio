import Image from "next/image";
import Menu from "./components/general/Menu";

export default function Home() {
  return (
    <>
      <div className="w-1/4 h-full flex justify-center bg-green-500">
        <Menu />
      </div>
      <div className="w-3/4 h-full bg-green-300">Main Content</div>
    </>
  );
}
