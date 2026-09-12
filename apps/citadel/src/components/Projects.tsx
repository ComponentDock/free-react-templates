const projects = [
  {
    category: 'Industrial Construction',
    title: 'Research and Development Center',
    seed: 'citadel-project-1',
  },
  {
    category: 'Mechanical Engineering',
    title: 'Technological Park Project',
    seed: 'citadel-project-2',
  },
]

export function Projects() {
  return (
    <section className="relative bg-ink bg-cover bg-center py-32">
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-ink/85" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: title + CTA */}
          <div className="text-white">
            <h2 className="mb-6 text-3xl font-normal leading-tight md:text-[44px] md:leading-[56px]">
              Take a look around <br className="hidden md:block" /> our projects
            </h2>
            <p className="mb-6 max-w-md text-base font-normal leading-relaxed text-gray-300">
              We deliver world-class industrial projects with precision engineering, cutting-edge
              technology, and unwavering commitment to quality.
            </p>
            <a
              href="#"
              className="text-base font-normal text-white underline transition-colors hover:text-brand"
            >
              More Projects
            </a>
          </div>

          {/* Right: project cards */}
          <div className="flex flex-col gap-8">
            {projects.map((proj) => (
              <article key={proj.seed} className="group">
                <div className="overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${proj.seed}/600/350`}
                    alt={proj.title}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8">
                  <span className="mb-3 block text-base font-normal text-brand">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl font-normal text-white">{proj.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
