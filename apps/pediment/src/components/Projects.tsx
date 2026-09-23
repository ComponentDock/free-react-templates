const projects = [
  {
    category: 'interiors',
    title: 'Lower River Street Astoria',
    image: 'https://picsum.photos/seed/pediment-proj1/600/400',
  },
  {
    category: 'exteriors',
    title: 'Harbor View Residence',
    image: 'https://picsum.photos/seed/pediment-proj2/600/400',
  },
  {
    category: 'planning',
    title: 'Metro Center Complex',
    image: 'https://picsum.photos/seed/pediment-proj3/600/400',
  },
  {
    category: 'interiors',
    title: 'Riverside Loft Studio',
    image: 'https://picsum.photos/seed/pediment-proj4/600/400',
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 font-display text-sm uppercase tracking-wider text-brand">
            Our works
          </span>
          <h2 className="font-display text-3xl font-bold text-body sm:text-4xl">Latest projects</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
                <span className="mb-2 text-sm uppercase tracking-wider text-brand">
                  {project.category}
                </span>
                <h5 className="text-center text-lg font-semibold text-white">{project.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
