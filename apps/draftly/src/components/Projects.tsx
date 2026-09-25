const PROJECTS = [
  { title: 'Branding & Illustration Design', image: 'draftly-proj-1', category: 'Branding' },
  { title: 'Branding & Illustration Design', image: 'draftly-proj-2', category: 'Design' },
  { title: 'Branding & Illustration Design', image: 'draftly-proj-3', category: 'Web' },
  { title: 'Branding & Illustration Design', image: 'draftly-proj-4', category: 'Branding' },
  { title: 'Branding & Illustration Design', image: 'draftly-proj-5', category: 'Design' },
  { title: 'Branding & Illustration Design', image: 'draftly-proj-6', category: 'Web' },
  { title: 'Branding & Illustration Design', image: 'draftly-proj-7', category: 'Branding' },
  { title: 'Branding & Illustration Design', image: 'draftly-proj-8', category: 'Design' },
]

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-light uppercase tracking-widest text-brand-500">
            Portfolio
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${project.image}/400/300`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                  <span className="text-xs text-gray-300">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
