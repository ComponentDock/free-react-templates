const projects = [
  {
    title: 'La Lega Stadium',
    place: 'Madrid, Spain',
    image: 'https://picsum.photos/seed/truss-11/600/450',
  },
  {
    title: 'France Building',
    place: 'Paris, France',
    image: 'https://picsum.photos/seed/truss-12/600/450',
  },
  {
    title: '22 New Homes',
    place: 'Berlin, Germany',
    image: 'https://picsum.photos/seed/truss-13/600/450',
  },
  {
    title: 'Manage Center',
    place: 'London, UK',
    image: 'https://picsum.photos/seed/truss-14/600/450',
  },
  {
    title: 'Sports Hall',
    place: 'Milan, Italy',
    image: 'https://picsum.photos/seed/truss-15/600/450',
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em] text-faint">Projects</p>
        <h2 className="font-display text-3xl font-extrabold text-ink dark:text-white sm:text-5xl">
          Our Projects
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#contact"
              className="group relative block overflow-hidden rounded-sm"
            >
              <img
                src={project.image}
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-white/95 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-950/95">
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-faint">
                  {project.place}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink dark:text-white">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
