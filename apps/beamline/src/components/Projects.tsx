const projects = [
  {
    title: 'Geometric Building',
    category: 'Exterior',
    date: '12/07/2020',
    seed: 'beamline-project-1',
  },
  { title: 'Twin Office', category: 'Furniture', date: '12/07/2020', seed: 'beamline-project-2' },
  {
    title: 'Cultural Complex Centre',
    category: 'Building',
    date: '12/07/2020',
    seed: 'beamline-project-3',
  },
  {
    title: 'Riverside Pavilion',
    category: 'Exterior',
    date: '18/07/2020',
    seed: 'beamline-project-4',
  },
  { title: 'Skyline Loft', category: 'Interior', date: '24/07/2020', seed: 'beamline-project-5' },
  {
    title: 'Harbour View House',
    category: 'Building',
    date: '02/08/2020',
    seed: 'beamline-project-6',
  },
] as const

const blurb =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Projects</p>
        <h2 className="mt-3 text-4xl font-extralight leading-tight text-ink dark:text-white">
          Our Unique Latest Projects
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${project.seed}/600/450`}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                  {project.date}
                </p>
                <h3 className="mt-2 text-xl font-bold text-ink dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-300">{blurb}</p>
                <a
                  href="#quote"
                  className="mt-5 inline-block rounded-full border border-brand px-6 py-2 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  View Portfolio
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
