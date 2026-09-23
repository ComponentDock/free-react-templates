const projects = [
  {
    title: 'White Blocks House',
    description:
      'A modern residential project featuring clean geometric forms, open-plan living, and natural material palettes that create warmth within minimalism.',
    image: 'https://picsum.photos/seed/plano-work-1/800/600',
    imageLeft: true,
  },
  {
    title: 'Art Gallery Design',
    description:
      'An expansive gallery space with soaring ceilings, diffused natural light, and modular wall systems for rotating exhibitions.',
    image: 'https://picsum.photos/seed/plano-work-2/800/600',
    imageLeft: false,
  },
  {
    title: 'Art Gallery Design',
    description:
      'A second gallery wing featuring intimate alcoves, climate-controlled display cases, and a sculptural staircase as centerpiece.',
    image: 'https://picsum.photos/seed/plano-work-3/800/600',
    imageLeft: true,
  },
  {
    title: 'Office Space',
    description:
      'A contemporary workplace blending collaborative zones with quiet focus areas, biophilic accents, and flexible furniture systems.',
    image: 'https://picsum.photos/seed/plano-work-4/800/600',
    imageLeft: false,
  },
] as const

export function PortfolioGallery() {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-primary">Our Works</h2>
        <div className="mt-12 space-y-16">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="grid items-center gap-8 md:grid-cols-12"
            >
              {project.imageLeft && (
                <div className="md:col-span-7">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full object-cover"
                  />
                </div>
              )}
              <div
                className={`flex flex-col justify-center ${project.imageLeft ? 'md:col-span-5' : 'md:col-span-5 md:order-first'}`}
              >
                <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <a
                  href="#projects"
                  className="mt-6 inline-block self-start border border-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-primary"
                >
                  Details
                </a>
              </div>
              {!project.imageLeft && (
                <div className="md:col-span-7">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-80 w-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
