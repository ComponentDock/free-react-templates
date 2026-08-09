const projects = [
  { title: 'Brown hair wave', seed: 'gloss-project-1' },
  { title: 'Brown hair wave', seed: 'gloss-project-2' },
  { title: 'Brown hair wave', seed: 'gloss-project-3' },
  { title: 'Brown hair wave', seed: 'gloss-project-4' },
  { title: 'Brown hair wave', seed: 'gloss-project-5' },
  { title: 'Brown hair wave', seed: 'gloss-project-6' },
  { title: 'Brown hair wave', seed: 'gloss-project-7' },
] as const

export function Projects() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Portfolio</p>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl dark:text-white">
            Latest projects
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <figure
              key={project.seed}
              className={
                index === projects.length - 1
                  ? 'group relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-1'
                  : 'group relative overflow-hidden rounded-2xl'
              }
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/640/480`}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon/80 via-transparent to-transparent p-5">
                <span className="text-sm font-semibold uppercase tracking-widest text-white">
                  {project.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
