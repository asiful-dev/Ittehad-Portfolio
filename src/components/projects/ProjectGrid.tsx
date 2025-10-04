"use client"

import { useAppContext } from "@/context/AppContext"
import { ProjectCard } from "./ProjectCard"

export function ProjectGrid() {
  const { projects } = useAppContext()

  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}
