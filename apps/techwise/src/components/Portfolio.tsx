const projects = [
  { seed: 'techwise-portfolio-1', alt: 'Web design project showcase' },
  { seed: 'techwise-portfolio-2', alt: 'Mobile app UI design' },
  { seed: 'techwise-portfolio-3', alt: 'Brand identity design' },
  { seed: 'techwise-portfolio-4', alt: 'E-commerce platform' },
  { seed: 'techwise-portfolio-5', alt: 'Dashboard analytics design' },
  { seed: 'techwise-portfolio-6', alt: 'Marketing campaign visuals' },
] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-light-bg py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark-bg sm:text-4xl">
            Our Exceptional Quality Work
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.seed} className="group relative overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${project.seed}/700/500`}
                alt={project.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/0 opacity-0 transition-all duration-300 group-hover:bg-brand/80 group-hover:opacity-100">
                <a
                  href="#portfolio"
                  aria-label={`View ${project.alt}`}
                  className="text-sm font-semibold text-white underline underline-offset-4"
                >
                  {project.alt}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
