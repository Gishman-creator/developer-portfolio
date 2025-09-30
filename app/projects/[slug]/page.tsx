import { projects } from "@/lib/projects"
import ProjectPageClient from "./ProjectPageClient"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Pass the params object to the client component
  return <ProjectPageClient params={params} />
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
