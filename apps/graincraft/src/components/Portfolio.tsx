const projects = [
  { seed: 'graincraft-portfolio-1', alt: 'Custom hardwood kitchen cabinetry' },
  { seed: 'graincraft-portfolio-2', alt: 'Hand-carved staircase banister' },
  { seed: 'graincraft-portfolio-3', alt: 'Exterior deck and pergola build' },
  { seed: 'graincraft-portfolio-4', alt: 'Office reception desk in walnut' },
  { seed: 'graincraft-portfolio-5', alt: 'Crown molding and ceiling beams' },
  { seed: 'graincraft-portfolio-6', alt: 'Built-in bookcase and shelving unit' },
] as const

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Work
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Portfolio
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.seed} className="group relative overflow-hidden rounded-2xl">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <p className="p-6 text-sm font-semibold text-white">{project.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
