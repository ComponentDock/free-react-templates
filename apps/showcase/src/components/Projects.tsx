import { SectionHeading } from './SectionHeading'

const projects = [
  { image: 'https://picsum.photos/seed/showcase-project-1/600/400' },
  { image: 'https://picsum.photos/seed/showcase-project-2/600/400' },
  { image: 'https://picsum.photos/seed/showcase-project-3/600/400' },
  { image: 'https://picsum.photos/seed/showcase-project-4/600/400' },
  { image: 'https://picsum.photos/seed/showcase-project-5/600/400' },
  { image: 'https://picsum.photos/seed/showcase-project-6/600/400' },
] as const

const tileTitle = 'Branding & Illustration Design'
const tileLabel = 'Web Design'

export function Projects() {
  return (
    <section id="projects-section" aria-label="Projects" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading title="Our Projects" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.image}
              href="#projects-section"
              aria-label={`Project ${index + 1}: ${tileTitle}`}
              className="group relative block h-80 overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <img
                src={project.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-90 group-focus-visible:opacity-90">
                <span className="max-w-[80%] text-center text-xl font-semibold text-white">
                  {tileTitle}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                  {tileLabel}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
