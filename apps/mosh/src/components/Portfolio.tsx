const projects = [
  { src: 'https://picsum.photos/seed/mosh-work-1/600/480', name: 'DFR Corp. Branding' },
  { src: 'https://picsum.photos/seed/mosh-work-2/600/480', name: 'Nova Identity' },
  { src: 'https://picsum.photos/seed/mosh-work-3/600/480', name: 'Pulse App Design' },
  { src: 'https://picsum.photos/seed/mosh-work-4/600/480', name: 'Atlas Photography' },
  { src: 'https://picsum.photos/seed/mosh-work-5/600/480', name: 'Vertex Web Design' },
  { src: 'https://picsum.photos/seed/mosh-work-6/600/480', name: 'Orbit Print Pack' },
] as const

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-300">
            Our Work
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            See our Online Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus
            blandit.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <figure
              key={project.name}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={project.src}
                alt={project.name}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-sm font-semibold text-white">{project.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
