const projects = [
  { title: 'Santorini Island Dream', category: 'Holiday & Fun Package', seed: 'crafted-project-1' },
  { title: 'Proper Guided Tour', category: 'Travel & Experience', seed: 'crafted-project-2' },
  { title: 'Holiday and Fun Package', category: 'Tour & Adventure', seed: 'crafted-project-3' },
] as const

export function Portfolio() {
  return (
    <section id="projects" className="bg-white py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Recent Portfolio Showcase
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.seed}
              className="group overflow-hidden rounded bg-paper shadow-md dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/640/480`}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-500">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-ink dark:text-white">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center border-2 border-primary-500 bg-transparent px-10 py-3 text-sm font-medium text-primary-500 transition-colors hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-300 hover:text-white"
          >
            View all Works
          </a>
        </div>
      </div>
    </section>
  )
}
