const projects = [
  { title: 'Building', category: 'Work', image: 'https://picsum.photos/seed/timber-proj1/600/400' },
  {
    title: 'House, Apartment',
    category: 'Work',
    image: 'https://picsum.photos/seed/timber-proj2/600/400',
  },
  {
    title: 'Dining Room',
    category: 'Work',
    image: 'https://picsum.photos/seed/timber-proj3/600/400',
  },
  {
    title: 'House, Building',
    category: 'Work',
    image: 'https://picsum.photos/seed/timber-proj4/600/400',
  },
  {
    title: 'Condo, Pad',
    category: 'Work',
    image: 'https://picsum.photos/seed/timber-proj5/600/400',
  },
  {
    title: 'Table, Chairs',
    category: 'Work',
    image: 'https://picsum.photos/seed/timber-proj6/600/400',
  },
] as const

export function Portfolio() {
  return (
    <section id="projects" className="bg-white px-4 py-20 font-['Quicksand',sans-serif]">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark">My Work</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark/0 opacity-0 transition-all duration-300 group-hover:bg-dark/70 group-hover:opacity-100">
                <span className="mb-1 text-sm text-white/70">{project.category}</span>
                <span className="text-lg font-semibold text-white">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
