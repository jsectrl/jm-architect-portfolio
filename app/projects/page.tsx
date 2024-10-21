import Sidebar from "../components/general/Sidebar";
import ProjectCategories from "../components/projects/ProjectCategories";
import homeImage from "../images/home.jpeg";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Sidebar collapsed={true}>
        <ProjectCategories></ProjectCategories>
      </Sidebar>
      <div className="flex-grow h-full bg-green-300">
        <Image
          src={homeImage}
          width={1500}
          height={1500}
          alt="Picture of the author"
        />
      </div>
    </>
  );
}
