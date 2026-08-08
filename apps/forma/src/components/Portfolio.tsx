const projects = [
  { title: 'Coral Gables Residence', category: 'Residential', seed: 'forma-port-1' },
  { title: 'SoFi Office Complex', category: 'Commercial', seed: 'forma-port-2' },
  { title: 'The Setai Penthouse', category: 'Hospitality', seed: 'forma-port-3' },
  { title: 'Mandarin Oriental Suite', category: 'Hospitality', seed: 'forma-port-4' },
  { title: 'Wynwood Gallery', category: 'Commercial', seed: 'forma-port-5' },
  { title: 'Brickell Heights Loft', category: 'Residential', seed: 'forma-port-6' },
] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Portfolio
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A selection of recent work across residential, commercial, and hospitality interiors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <figure
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${project.seed}/800/600`}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                  {project.category}
                </p>
                <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
