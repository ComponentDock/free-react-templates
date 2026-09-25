const projects = [
  {
    name: 'Butterfly House',
    category: 'Interior',
    image: 'https://picsum.photos/seed/proj1/600/400',
  },
  {
    name: 'Interior Bed Design',
    category: 'Design',
    image: 'https://picsum.photos/seed/proj2/600/400',
  },
  {
    name: 'Kitchen Sink Design',
    category: 'Interior',
    image: 'https://picsum.photos/seed/proj3/600/400',
  },
  { name: 'Lobby Interior', category: 'Design', image: 'https://picsum.photos/seed/proj4/600/400' },
  {
    name: 'Relaxation Room',
    category: 'Interior',
    image: 'https://picsum.photos/seed/proj5/600/400',
  },
  {
    name: 'Modern Villa',
    category: 'Architecture',
    image: 'https://picsum.photos/seed/proj6/600/400',
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-brand">
          Awesome Projects
        </p>
        <h2 className="mb-10 text-center text-3xl font-bold text-ink">Our Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, category, image }) => (
            <div key={name} className="group overflow-hidden rounded bg-white">
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink">
                  <a href="#" className="hover:text-brand">
                    {name}
                  </a>
                </h3>
                <p className="text-sm text-mist">{category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
