const projects = [
  { title: 'Alex Complex for residence', image: 'https://picsum.photos/seed/rafter-4/800/900' },
  { title: 'Alex Complex for residence', image: 'https://picsum.photos/seed/rafter-5/800/900' },
  { title: 'Alex Complex for residence', image: 'https://picsum.photos/seed/rafter-6/1200/900' },
  { title: 'Alex Complex for residence', image: 'https://picsum.photos/seed/rafter-7/800/900' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
            Our projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Alex Complex for esidence
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            LCD screens are uniquely modern in style, and the liquid crystals that make them work
            have allowed humanity to create slimmer, more portable technology.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <a key={index} href="#contact" className="group relative block overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent p-5">
                <h3 className="font-display text-sm font-bold text-white">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
