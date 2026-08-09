const projects = [
  { category: 'Engine', title: 'Engine Testing Complated', seed: 'torquely-9' },
  { category: 'Oil Change', title: 'Change Oil Completed', seed: 'torquely-10' },
  { category: 'Engine', title: 'Engine Diagnostics', seed: 'torquely-11' },
  { category: 'Tire', title: 'Tire Change', seed: 'torquely-12' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Projects</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Done Projects
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <a
              key={project.seed}
              href="#projects"
              className="group relative block overflow-hidden rounded-2xl"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/480/480`}
                alt={project.title}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">
                  {project.category}
                </p>
                <p className="mt-1 font-display text-base font-bold text-white">{project.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
