import { Plus } from 'lucide-react'

const projects = [
  { name: 'Skyline Tower', seed: 'polygon-proj-1' },
  { name: 'Harbor View', seed: 'polygon-proj-2' },
  { name: 'Green Quarter', seed: 'polygon-proj-3' },
  { name: 'Metro Square', seed: 'polygon-proj-4' },
  { name: 'Riverside Lofts', seed: 'polygon-proj-5' },
  { name: 'Apex Center', seed: 'polygon-proj-6' },
]

export function Projects() {
  return (
    <section id="projects" className="border-t py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink">Projects</h2>
          <p className="mx-auto max-w-2xl text-mist">
            We deliver innovative design solutions for residential, commercial, and mixed-use
            developments across the globe.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <a key={project.name} href="#" className="group relative block overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${project.seed}/600/400`}
              alt={project.name}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
              <Plus className="mb-2 h-8 w-8 text-white" aria-hidden="true" />
              <h3 className="text-lg font-bold text-white">{project.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
