"use client"

import { SectionReveal } from "@/components/ui/SectionReveal"
import { ProjectGrid } from "@/components/projects/ProjectGrid"

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <SectionReveal delay={0.2}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <p className="text-white/60 text-lg">
              A selection of my recent work
            </p>
          </SectionReveal>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-6" />
        </div>

        <ProjectGrid />
      </div>
    </section>
  )
}
