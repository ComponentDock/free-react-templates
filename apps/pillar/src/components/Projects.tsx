const projects = [
  { title: 'Butterfly House', category: 'Interior', seed: 'pillar-proj-1' },
  { title: 'Interior Bed Design', category: 'Design', seed: 'pillar-proj-2' },
  { title: 'Kitchen Sink Design', category: 'Interior', seed: 'pillar-proj-3' },
  { title: 'Lobby Interior Design', category: 'Design', seed: 'pillar-proj-4' },
  { title: 'Relaxation Room Design', category: 'Design', seed: 'pillar-proj-5' },
  { title: 'Modern Office Space', category: 'Interior', seed: 'pillar-proj-6' },
]

export function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
            Our Projects
          </h4>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Awesome Projects</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded bg-white shadow-sm">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/600/400`}
                  alt={p.title}
                  className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-accent">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
