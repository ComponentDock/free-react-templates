import type { DialogMode, Project } from '../content'
import { PROJECTS, WORK } from '../content'
import { ActionButton, Container, Eyebrow, SectionTop, Tag } from './ui'

interface ProjectCardProps {
  readonly project: Project
  readonly onOpen: (project: Project, mode: DialogMode, trigger: HTMLElement) => void
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="mb-[26px] overflow-hidden rounded-lg border border-line bg-white">
      <div className="grid md:grid-cols-2">
        <div className={`flex min-h-[360px] items-center justify-center p-[35px] ${project.well}`}>
          <img
            src={project.image}
            alt=""
            width={1200}
            height={833}
            loading="lazy"
            className="w-full rounded-[6px] border border-[#c0cde0] shadow-[0_16px_28px_#17283c1a]"
          />
        </div>

        <div className="p-[26px] sm:p-[38px]">
          <Eyebrow className="mb-3">{project.eyebrow}</Eyebrow>
          <h3 className="mb-[18px] text-[2rem]">{project.name}</h3>
          <p className="text-[0.9rem] leading-[1.75] text-muted">{project.blurb}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ActionButton
              onClick={(trigger) => onOpen(project, 'case', trigger)}
              className="gap-2"
            >
              Read the case study <span aria-hidden="true">↗</span>
            </ActionButton>
            <button
              type="button"
              onClick={(event) => onOpen(project, 'demo', event.currentTarget)}
              className="text-[0.8rem] font-semibold text-ink underline decoration-line underline-offset-4 hover:text-brand"
            >
              Try the demo
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

/** `#work` — heading left, 330 px lede right, then two 6/6 project cards. */
export function Work({
  onOpen,
}: {
  readonly onOpen: (project: Project, mode: DialogMode, trigger: HTMLElement) => void
}) {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="border-b border-line bg-paper py-[72px]"
    >
      <Container>
        <SectionTop
          eyebrow={WORK.eyebrow}
          heading={
            <span id="work-title">
              {WORK.lineOne}
              <br />
              {WORK.lineTwo}
            </span>
          }
          lede={WORK.lede}
        />

        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </Container>
    </section>
  )
}
