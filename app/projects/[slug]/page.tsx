import projectData from "../../data/data.json";
import Sidebar from "@/app/components/general/Sidebar";
import ProjectDetails from "@/app/components/projects/ProjectDetails";

const projects = projectData.projects;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function Project({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    // Redirect to 404 page if post is not found
  }

  return (
    <>
      <Sidebar collapsed={true}>
        <ProjectDetails
          name={project?.name}
          description={project?.description}
          location={project?.location}
          date={project?.date}
          credits={project?.credits}
        />
      </Sidebar>
      <div>kjdsnfkjdsan</div>;
    </>
  );
}
