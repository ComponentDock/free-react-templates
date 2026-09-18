import { ExternalLink } from 'lucide-react'

const projects = [
  { id: 1, title: 'Brand Identity Design', category: 'Design' },
  { id: 2, title: 'E-commerce Platform', category: 'Development' },
  { id: 3, title: 'Marketing Campaign', category: 'Marketing' },
  { id: 4, title: 'Mobile App Design', category: 'Design' },
  { id: 5, title: 'SEO Optimization', category: 'Marketing' },
  { id: 6, title: 'Web Application', category: 'Development' },
] as const

export function Projects() {
  return (
    <section id="work" className="bg-dark py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-white md:text-4xl">
          Recent Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/project${project.id}/600/400`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-1 text-sm text-white/70">{project.category}</p>
                <ExternalLink className="mt-3 h-5 w-5 text-brand" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
