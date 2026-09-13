const projects = [
  {
    title: 'Exotic Mangrove',
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/domicile-proj1/600/400',
  },
  {
    title: 'Urban Landscape',
    category: 'People',
    image: 'https://picsum.photos/seed/domicile-proj2/600/400',
  },
  {
    title: 'Coastal Retreat',
    category: 'Travel',
    image: 'https://picsum.photos/seed/domicile-proj3/600/400',
  },
  {
    title: 'Mountain Vista',
    category: 'Nature',
    image: 'https://picsum.photos/seed/domicile-proj4/600/400',
  },
  {
    title: 'City Skyline',
    category: 'Architecture',
    image: 'https://picsum.photos/seed/domicile-proj5/600/400',
  },
  {
    title: 'Forest Path',
    category: 'Adventure',
    image: 'https://picsum.photos/seed/domicile-proj6/600/400',
  },
] as const

export function ProjectShowcase() {
  return (
    <section id="pages" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="text-center font-display text-2xl font-bold uppercase text-white">
                  {project.title}
                </h4>
                <div className="mt-3 flex gap-3">
                  <span className="text-sm text-gray-300">{project.category}</span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center justify-center border-2 border-primary-400 px-6 py-2 text-sm font-bold uppercase text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
