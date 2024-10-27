import Sidebar from "../components/general/Sidebar";
import ProjectCategories from "../components/projects/ProjectCategories";

export default function Projects() {
  return (
    <>
      <Sidebar collapsed={true}>
        <ProjectCategories></ProjectCategories>
      </Sidebar>
    </>
  );
}
