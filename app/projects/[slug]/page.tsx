import projectData from "../../data/data.json";
import Sidebar from "@/app/components/general/Sidebar";
import ProjectDetails from "@/app/components/projects/ProjectDetails";

import { Carousel } from "flowbite-react";

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

  const name = project?.name ?? "";
  const description = project?.description ?? "";
  const location = project?.location ?? "";
  const date = project?.date ?? "";
  const credits = project?.credits ?? "";

  return (
    <>
      <div className="flex flex-grow pointer-events-auto z-20">
        <Sidebar collapsed={true}>
          <ProjectDetails
            name={name}
            description={description}
            location={location}
            date={date}
            credits={credits}
          />
        </Sidebar>
      </div>
      <Carousel className="absolute h-full w-full inset-0 z-10 pointer-events-auto">
        <div className="h-full w-full bg-[url('/images/home.jpeg')] bg-cover bg-center"></div>
        <div className="h-full w-full bg-[url('/images/home_2.jpeg')] bg-cover bg-center"></div>
      </Carousel>
    </>
  );
}
