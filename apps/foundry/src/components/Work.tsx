const projects = [
  { title: 'California Mega Mall', location: 'Los Angeles, USA' },
  { title: 'Commercial Building', location: 'New York, USA' },
  { title: 'Miami Private Apartment', location: 'Miami, USA' },
] as const

export function Work() {
  return (
    <section id="work" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Works</p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
          Our Done Projects
        </h2>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="overflow-hidden border border-line bg-white transition-colors hover:border-brand dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/foundry-work-${i + 1}/600/400`}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase text-ink dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-mist dark:text-gray-400">{project.location}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="#work"
            className="inline-block bg-brand px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-dark"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
