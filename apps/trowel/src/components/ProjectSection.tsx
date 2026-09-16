const projects = [
  { image: 'https://picsum.photos/seed/trowel-proj1/600/400', title: 'Modern Building' },
  { image: 'https://picsum.photos/seed/trowel-proj2/600/400', title: 'Office Complex' },
  { image: 'https://picsum.photos/seed/trowel-proj3/600/400', title: 'Residential Tower' },
  { image: 'https://picsum.photos/seed/trowel-proj4/600/400', title: 'Shopping Center' },
  { image: 'https://picsum.photos/seed/trowel-proj5/600/400', title: 'Bridge Project' },
  { image: 'https://picsum.photos/seed/trowel-proj6/600/400', title: 'Warehouse Facility' },
]

export function ProjectSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-500">
            Our Projects
          </p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Done Projects</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ image, title }) => (
            <div key={title} className="group overflow-hidden bg-gray-100">
              <img
                src={image}
                alt={title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
