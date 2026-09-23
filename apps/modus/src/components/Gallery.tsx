const projects = [
  {
    title: 'Residential Design',
    description: 'Create inviting living spaces that reflect personal style.',
    image: 'https://picsum.photos/seed/modus-work1/800/500',
  },
  {
    title: 'Commercial Spaces',
    description: 'Design productive and inspiring work environments.',
    image: 'https://picsum.photos/seed/modus-work2/800/500',
  },
  {
    title: 'Hospitality Interiors',
    description: 'Craft memorable guest experiences through thoughtful design.',
    image: 'https://picsum.photos/seed/modus-work3/800/500',
  },
] as const

export function Gallery() {
  return (
    <section id="work" className="bg-paper py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-mist dark:text-gray-400">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-display text-lg font-bold">{project.title}</h3>
                <p className="mt-1 text-sm text-white/80">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block rounded border-2 border-brand px-8 py-3.5 font-display text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-white dark:border-salmon dark:text-white"
          >
            More Work
          </a>
        </div>
      </div>
    </section>
  )
}
