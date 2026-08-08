const projects = [
  {
    year: '2024',
    type: 'Commercial',
    location: 'Houston, TX',
    title: 'Skyline Tower Complex',
    description:
      'A 32-story mixed-use tower featuring premium office space, retail outlets, and a rooftop observation deck with panoramic city views.',
    image: 'https://picsum.photos/seed/parapet-2/800/600',
  },
  {
    year: '2024',
    type: 'Residential',
    location: 'The Woodlands, TX',
    title: 'Riverside Luxury Estates',
    description:
      'An exclusive gated community of 24 custom luxury homes featuring smart home technology, private pools, and waterfront living.',
    image: 'https://picsum.photos/seed/parapet-3/800/600',
  },
  {
    year: '2023',
    type: 'Commercial',
    location: 'Austin, TX',
    title: 'Metro Innovation Hub',
    description:
      'A state-of-the-art tech campus with collaborative workspaces, green courtyards, and LEED Platinum certification.',
    image: 'https://picsum.photos/seed/parapet-4/800/600',
  },
  {
    year: '2023',
    type: 'Renovation',
    location: 'San Antonio, TX',
    title: 'Lakeside Residence',
    description:
      'A complete transformation of a lakeside family home, adding a modern wing, floor-to-ceiling glass, and a resort-style outdoor living area.',
    image: 'https://picsum.photos/seed/parapet-5/800/600',
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Recent Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Explore our portfolio of completed projects showcasing our commitment to quality
            craftsmanship and innovative design.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gray-900/70 px-3 py-1 text-xs font-semibold text-white">
                  {project.year} · {project.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                  {project.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
