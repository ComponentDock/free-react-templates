const projects = [
  { alt: 'Low-rise office block under construction', caption: 'Alex Complex for residence' },
  { alt: 'Concrete frame of a mid-rise tower', caption: 'Alex Complex for residence' },
  { alt: 'Steel skeleton of a commercial hall', caption: 'Alex Complex for residence' },
  { alt: 'Crane lifting beams over a building site', caption: 'Alex Complex for residence' },
  { alt: 'Glass curtain wall going up', caption: 'Alex Complex for residence' },
  { alt: 'Night shot of an unfinished high-rise', caption: 'Alex Complex for residence' },
] as const

export function Projects() {
  return (
    <section id="project" className="bg-paper py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Projects</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            Alex Complex for residence
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <figure key={index} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/edifice-project-${index + 1}/700/500`}
                alt={project.alt}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10 text-sm font-semibold text-white">
                {project.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
