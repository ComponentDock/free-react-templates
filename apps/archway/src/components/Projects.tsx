const projects = [
  {
    title: 'Office Interior Design in Paris',
    image: 'https://picsum.photos/seed/archway-proj1/400/300',
  },
  {
    title: 'Modern Living Room Concept',
    image: 'https://picsum.photos/seed/archway-proj2/400/300',
  },
  { title: 'Minimalist Kitchen Design', image: 'https://picsum.photos/seed/archway-proj3/400/300' },
  {
    title: 'Luxury Bathroom Renovation',
    image: 'https://picsum.photos/seed/archway-proj4/400/300',
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl">Our Projects</h2>
          <p className="mx-auto max-w-2xl text-[#6c757d]">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-sm font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
