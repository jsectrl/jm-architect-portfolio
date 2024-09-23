import Menu from "../components/general/Menu";
import ProjectCategories from "../components/projects/ProjectCategories";

export default function Projects() {
  return (
    <>
      <div className="w-1/4 h-full flex flex-col items-center bg-green-500">
        <Menu />
        <ProjectCategories />
      </div>
      <div className="w-3/4 h-full bg-green-300">Main Content</div>
    </>
  );
}
