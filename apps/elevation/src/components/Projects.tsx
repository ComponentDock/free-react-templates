import { Maximize2 } from 'lucide-react'

const projects = [
  { alt: 'Riverside residence with a cantilevered terrace', caption: 'Riverside Residence' },
  { alt: 'Glass pavilion wrapped in a slim steel frame', caption: 'Glass Pavilion' },
  { alt: 'Courtyard house with a sculptural concrete stair', caption: 'Courtyard House' },
  { alt: 'Timber-framed studio beneath a sawtooth roof', caption: 'Sawtooth Studio' },
] as const

export function Projects() {
  return (
    <section id="projects" className="py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[2.4px] text-mist dark:text-gray-400">
            CAREER OVERVIEW
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase text-ink dark:text-white">
            Recent Projects
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div key={project.caption} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/elevation-project-${index + 1}/600/450`}
                alt={project.alt}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <a
                href="#projects"
                aria-label={`View project ${index + 1} — ${project.caption}`}
                className="absolute inset-0 flex items-center justify-center text-3xl text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <Maximize2 className="h-8 w-8" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
