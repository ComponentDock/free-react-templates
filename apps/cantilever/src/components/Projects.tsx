interface Project {
  name: string
  seed: string
}

const projects: Project[] = [
  { name: 'Riverside Villa', seed: 'cantilever-proj-1' },
  { name: 'Glass Courtyard House', seed: 'cantilever-proj-2' },
  { name: 'Urban Loft Renovation', seed: 'cantilever-proj-3' },
  { name: 'Hillside Retreat', seed: 'cantilever-proj-4' },
  { name: 'Minimalist Townhouse', seed: 'cantilever-proj-5' },
  { name: 'Civic Library', seed: 'cantilever-proj-6' },
]

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold uppercase text-ink sm:text-3xl dark:text-white">
          Our Recent Completed Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-mist dark:text-white/60">
          A curated selection of our recent completed architecture and interior projects — each one
          a precise concept made real.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.seed} className="group overflow-hidden rounded shadow-lg">
              <a href="#projects" className="block overflow-hidden bg-charcoal">
                <img
                  src={`https://picsum.photos/seed/${project.seed}/640/480`}
                  alt={project.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="bg-paper p-5 dark:bg-gray-900">
                <h3 className="text-sm font-bold uppercase leading-snug text-ink dark:text-white">
                  {project.name}
                </h3>
                <a
                  href="#projects"
                  className="mt-3 inline-block text-xs font-bold uppercase text-brand transition-colors hover:text-brand-dark"
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
