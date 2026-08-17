import { PROJECTS } from '../data'

/* Projects — "Feature Projects" grid of four cards; hovering a card
   reveals the dark-green overlay with a white caption and View link. */
export function Projects() {
  return (
    <section aria-label="Projects" id="projects" className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-display text-[48px] font-semibold text-forest">
          Feature Projects
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <article key={project.title} className="group relative overflow-hidden rounded">
              <img
                src={project.image}
                alt={`${project.title} photo`}
                className="h-80 w-full object-cover lg:h-[520px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(48,85,52,0.7)] p-6 text-center opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-[28px] font-semibold text-paper">{project.title}</h3>
                <a href="#contact" className="mt-3 font-medium text-paper underline">
                  View
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
