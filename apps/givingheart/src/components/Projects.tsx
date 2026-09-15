const projects = [
  {
    title: 'Clean Water Initiative',
    description: 'Providing clean drinking water to communities in need.',
    image: 'https://picsum.photos/seed/givingheart-proj1/600/400',
  },
  {
    title: 'Education for All',
    description: 'Building schools and providing educational resources.',
    image: 'https://picsum.photos/seed/givingheart-proj2/600/400',
  },
  {
    title: 'Healthcare Access',
    description: 'Delivering essential healthcare to underserved areas.',
    image: 'https://picsum.photos/seed/givingheart-proj3/600/400',
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#f40f68] via-[#f86e3d] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="#donate"
                  className="mb-3 rounded-[25px] bg-white px-6 py-2 text-sm font-bold text-[#f41665]"
                >
                  Donate Now
                </a>
                <a href="#" className="text-sm font-semibold text-white hover:underline">
                  read more
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink mb-2">{project.title}</h3>
                <p className="text-sm text-muted">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
