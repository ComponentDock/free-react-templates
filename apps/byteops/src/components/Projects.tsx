const projects = [
  { title: 'Brand Identity', category: 'Web Design', seed: 'byteops-proj1' },
  { title: 'E-Commerce Platform', category: 'Development', seed: 'byteops-proj2' },
  { title: 'Mobile App Design', category: 'UI Design', seed: 'byteops-proj3' },
  { title: 'Marketing Campaign', category: 'Strategy', seed: 'byteops-proj4' },
  { title: 'Analytics Dashboard', category: 'Data Analysis', seed: 'byteops-proj5' },
  { title: 'Corporate Website', category: 'Web Development', seed: 'byteops-proj6' },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-ops-400">
            Accomplishments
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Our Projects</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            A showcase of our recent work across web design, development, and digital strategy.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/600/450`}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <span className="text-sm text-gray-200">{p.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
