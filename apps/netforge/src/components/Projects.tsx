const projects = [
  {
    image: 'https://picsum.photos/seed/netforge-proj1/600/400',
    title: 'E-Commerce Platform',
    category: 'Web Development',
  },
  {
    image: 'https://picsum.photos/seed/netforge-proj2/600/400',
    title: 'Cloud Migration',
    category: 'Cloud Solutions',
  },
  {
    image: 'https://picsum.photos/seed/netforge-proj3/600/400',
    title: 'Security Audit',
    category: 'Cybersecurity',
  },
  {
    image: 'https://picsum.photos/seed/netforge-proj4/600/400',
    title: 'SEO Campaign',
    category: 'Digital Marketing',
  },
] as const

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Take a look at some of our recent work that showcases our expertise and commitment to
            quality.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wider text-primary-500">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
