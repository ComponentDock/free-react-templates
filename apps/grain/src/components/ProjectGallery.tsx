const PROJECTS = [
  {
    title: 'White Sofas',
    category: 'Exterior',
    image: 'https://picsum.photos/seed/grain-1/800/600',
  },
  {
    title: 'Gray Padded Chairs',
    category: 'Living Room',
    image: 'https://picsum.photos/seed/grain-2/800/600',
  },
  {
    title: 'Brown Wooden',
    category: 'Bedroom',
    image: 'https://picsum.photos/seed/grain-3/800/600',
  },
  {
    title: 'Ceiling Chairs',
    category: 'Dining',
    image: 'https://picsum.photos/seed/grain-4/800/600',
  },
  {
    title: 'Water at Nighttime',
    category: 'Bathroom',
    image: 'https://picsum.photos/seed/grain-5/800/600',
  },
  {
    title: 'Modern Kitchen',
    category: 'Kitchen',
    image: 'https://picsum.photos/seed/grain-6/800/600',
  },
]

export function ProjectGallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Our Projects</h2>
          <p className="mt-4 text-gray-500">Explore our latest interior design work</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <a key={project.title} href="#" className="group relative block overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
                <span className="mb-2 text-xs font-medium uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.title}
                </h3>
                <span className="mt-2 border-b border-white pb-1 text-xs uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Project
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
