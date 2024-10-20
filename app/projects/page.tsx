import Sidebar from "../components/general/Sidebar";
import ProjectCategories from "../components/projects/ProjectCategories";

export default function Projects() {
  return (
    <>
      <Sidebar collapsed={true}>
        <ProjectCategories />
      </Sidebar>
      <div className="flex-grow h-full bg-green-300">Main Content</div>
    </>
  );
}
