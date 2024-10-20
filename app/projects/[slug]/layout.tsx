import Sidebar from "@/app/components/general/Sidebar";

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  console.log(params.slug);
  return (
    <>
      <div className="flex">{children}</div>
    </>
  );
}
