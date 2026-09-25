import { ExternalLink } from 'lucide-react'

const PROJECTS = [
  { title: 'E-Commerce Platform', image: 'spectra-proj-1' },
  { title: 'Dashboard UI', image: 'spectra-proj-2' },
  { title: 'Mobile App Design', image: 'spectra-proj-3' },
  { title: 'Brand Identity', image: 'spectra-proj-4' },
  { title: 'Portfolio Website', image: 'spectra-proj-5' },
  { title: 'Social Media App', image: 'spectra-proj-6' },
]

export function Projects() {
  return (
    <section id="projects" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-[3px] text-brand">
            Portfolio
          </span>
          <h2 className="mb-4 text-[40px] font-semibold text-dark">My Projects</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${project.image}/400/300`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
                <ExternalLink size={20} className="text-brand" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
