const projects = [
  { seed: 'embankment-p1', title: 'Alex Complex for Residence' },
  { seed: 'embankment-p2', title: 'Metro Tower Extension' },
  { seed: 'embankment-p3', title: 'Harbor Bridge Renovation' },
  { seed: 'embankment-p4', title: 'Summit Office Complex' },
  { seed: 'embankment-p5', title: 'Riverside Apartments' },
  { seed: 'embankment-p6', title: 'Skyline Mixed-Use Development' },
]

export function Projects() {
  return (
    <section id="projects" className="py-[120px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="mb-12 text-center">
          <h2 className="font-oswald text-[32px] font-medium text-dark">Our Latest Projects</h2>
          <p className="mt-3 text-[15px] text-muted">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.seed} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.title}
                className="block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/0 opacity-0 transition-all duration-300 group-hover:bg-white/90 group-hover:opacity-100">
                <h4 className="font-oswald text-xl font-medium text-dark">{project.title}</h4>
                <p className="mt-2 max-w-[80%] text-center text-sm text-muted">
                  A modern construction project showcasing innovative design and quality
                  craftsmanship.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
