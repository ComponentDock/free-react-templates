const projects = [
  { name: 'Luminary Studios', category: 'Business', image: 'impulse-work-1' },
  { name: 'Horizon Media', category: 'Design', image: 'impulse-work-2' },
  { name: 'Apex Ventures', category: 'Business', image: 'impulse-work-3' },
  { name: 'Prism Collective', category: 'Business', image: 'impulse-work-4' },
] as const

export function Portfolio() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl text-heading">Selected Work</h2>
          <p className="mx-auto max-w-lg text-sm text-body-text">
            A curated collection of our recent projects showcasing creative solutions and strategic
            thinking.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {projects.map(({ name, category, image }) => (
            <a
              key={name}
              href="#"
              className="group relative block overflow-hidden border-[10px] border-white"
            >
              <img
                src={`https://picsum.photos/seed/${image}/600/400`}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                <h3 className="mb-1 font-sans text-xl font-light text-white">{name}</h3>
                <p className="text-sm text-white/50">{category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
