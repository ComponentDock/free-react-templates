const PROJECTS = [
  {
    image: 'https://picsum.photos/seed/stamp-proj1/400/300',
    title: 'Electrical Engineering',
    description: 'For together creepeth created second air fill don divide said personal crud.',
  },
  {
    image: 'https://picsum.photos/seed/stamp-proj2/400/300',
    title: 'Chemical Processing',
    description: 'For together creepeth created second air fill don divide said personal crud.',
  },
  {
    image: 'https://picsum.photos/seed/stamp-proj3/400/300',
    title: 'Structural Analysis',
    description: 'For together creepeth created second air fill don divide said personal crud.',
  },
  {
    image: 'https://picsum.photos/seed/stamp-proj4/400/300',
    title: 'Industrial Automation',
    description: 'For together creepeth created second air fill don divide said personal crud.',
  },
] as const

export function Portfolio() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Title card */}
          <div className="flex items-center justify-center bg-ink p-8 text-white">
            <h2 className="text-3xl font-semibold leading-snug">
              Recent Completed <br /> Project
            </h2>
          </div>

          {PROJECTS.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5">
                <h5 className="text-lg font-semibold text-white">{project.title}</h5>
                <p className="mt-1 text-sm text-gray-200">{project.description}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold uppercase text-brand hover:text-white transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="flex items-center justify-center bg-brand p-8">
            <a
              href="#"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase text-brand transition-colors hover:bg-ink hover:text-white"
            >
              More Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
