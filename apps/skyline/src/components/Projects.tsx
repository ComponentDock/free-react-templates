const projects = [
  { category: 'Apartment', title: 'Sunlit corner apartment in the old quarter' },
  { category: 'Villa', title: 'Modern villa with a private rooftop garden' },
  { category: 'Apartment', title: 'Compact studio above the riverside market' },
  { category: 'Penthouse', title: 'Penthouse loft with panoramic city views' },
  { category: 'Apartment', title: 'Family apartment near the central park' },
  { category: 'Townhouse', title: 'Restored townhouse with original facades' },
  { category: 'Apartment', title: 'Bright duplex in the new waterfront district' },
  { category: 'Cottage', title: 'Detached cottage with a landscaped courtyard' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Portfolio</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            Our Projects
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <article key={project.title} className="group">
              <div className="overflow-hidden rounded-[5px]">
                <img
                  src={`https://picsum.photos/seed/skyline-project-${index + 1}/700/520`}
                  alt={`${project.category} property in the city`}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[1.6px] text-brand">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink dark:text-white">
                {project.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
