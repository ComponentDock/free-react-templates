import type { Project } from '../content'
import { ConceptArt } from './ConceptArt'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article data-project={project.id} className="group min-w-0">
      <div className="overflow-hidden rounded-[4px] bg-mat">
        <ConceptArt variant={project.art} label={project.artAlt} />
      </div>

      <p className="mb-[10px] mt-5 text-[0.9rem] uppercase leading-[1.75] tracking-[0.06em] text-muted">
        {project.meta}
      </p>

      <h3 className="m-0 text-[1.6rem]">
        <button
          type="button"
          className="flex w-full justify-between gap-[15px] text-left text-[1.6rem] font-semibold text-ink hover:underline"
        >
          {project.title} <span aria-hidden="true">↗</span>
        </button>
      </h3>

      <p className="my-[15px] max-w-[490px] text-[0.9rem] leading-[1.75] text-muted">
        {project.blurb}
      </p>
    </article>
  )
}
