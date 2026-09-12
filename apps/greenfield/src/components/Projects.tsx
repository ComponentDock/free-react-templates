const projects = [
  { title: 'Organic Solution', image: 'https://picsum.photos/seed/farmwork1/400/300' },
  { title: 'Harvest Innovation', image: 'https://picsum.photos/seed/farmwork2/400/300' },
  { title: 'Farm System', image: 'https://picsum.photos/seed/farmwork3/400/300' },
  { title: 'Agricultural Farming', image: 'https://picsum.photos/seed/farmwork4/400/300' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Explore Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.title} className="group relative h-64 overflow-hidden rounded-lg">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-lg font-bold text-white">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
