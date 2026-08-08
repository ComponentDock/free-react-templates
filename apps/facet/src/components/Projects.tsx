const projects = [
  { title: 'Office Interior Design', category: 'Interior Design', seed: 'facet-project-1' },
  { title: 'Modern House Architecture', category: 'Architecture', seed: 'facet-project-2' },
  { title: 'Commercial Building Exterior', category: 'Exterior Design', seed: 'facet-project-3' },
  { title: 'Creative Studio Renovation', category: 'Renovation', seed: 'facet-project-4' },
] as const

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Our projects"
      className="bg-white py-20 dark:bg-gray-950 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[3px] text-brand">Portfolio</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white">
          Our Projects
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <a
                href="#projects"
                aria-label={project.title}
                className="block overflow-hidden rounded"
              >
                <img
                  src={`https://picsum.photos/seed/${project.seed}/800/600`}
                  alt={project.title}
                  className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-105 lg:h-[320px]"
                />
              </a>
              <p className="mt-4 text-xs uppercase tracking-[2px] text-mist dark:text-white/50">
                {project.category}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink dark:text-white">
                <a href="#projects" className="hover:text-brand">
                  {project.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
