const projects = [
  {
    title: 'PSD Mockup',
    category: 'Design',
    image: 'https://picsum.photos/seed/boxpulse-port-1/400/300',
  },
  {
    title: 'Smart Watch',
    category: 'Product',
    image: 'https://picsum.photos/seed/boxpulse-port-2/400/300',
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://picsum.photos/seed/boxpulse-port-3/400/300',
  },
  {
    title: 'Mobile App',
    category: 'Development',
    image: 'https://picsum.photos/seed/boxpulse-port-4/400/300',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-brand-dark py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="shrink-0 md:w-1/4">
            <span className="block font-heading text-8xl font-bold text-white/10 md:text-[120px]">
              02
            </span>
            <h2 className="mt-2 -translate-y-4 font-heading text-2xl font-bold uppercase tracking-wider text-white">
              Portfolio
            </h2>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <div key={project.title} className="group relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-dark/80 to-transparent p-6">
                    <span className="mb-1 font-heading text-xs font-medium uppercase tracking-wider text-brand-pink">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                type="button"
                className="border-2 border-brand-pink px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-pink transition-colors hover:bg-brand-pink hover:text-white"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
