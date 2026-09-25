const projects = [
  { id: 1, title: 'E-commerce Redesign', category: 'Web Design', seed: 'palette-proj1' },
  { id: 2, title: 'Mobile App UI', category: 'App Design', seed: 'palette-proj2' },
  { id: 3, title: 'Brand Identity', category: 'Branding', seed: 'palette-proj3' },
  { id: 4, title: 'Dashboard Design', category: 'Web Application', seed: 'palette-proj4' },
  { id: 5, title: 'Social Media Campaign', category: 'Graphic Design', seed: 'palette-proj5' },
  { id: 6, title: 'Landing Page', category: 'Web Design', seed: 'palette-proj6' },
  { id: 7, title: 'Icon Set', category: 'Icon Design', seed: 'palette-proj7' },
  { id: 8, title: 'SEO Strategy', category: 'SEO', seed: 'palette-proj8' },
]

export function Projects() {
  return (
    <section id="projects" className="bg-light-bg py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">My Projects</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${project.seed}/400/300`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <span className="text-sm text-gray-300">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
