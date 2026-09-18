import { Expand } from 'lucide-react'

const projects = [
  { seed: 'edifica-proj-1', title: 'College Health Profession', category: 'Building' },
  { seed: 'edifica-proj-2', title: 'Riverside Residences', category: 'Building' },
  { seed: 'edifica-proj-3', title: 'Metro Office Tower', category: 'Building' },
  { seed: 'edifica-proj-4', title: 'Harbor View Complex', category: 'Building' },
  { seed: 'edifica-proj-5', title: 'Greenfield Academy', category: 'Building' },
  { seed: 'edifica-proj-6', title: 'Summit Business Park', category: 'Building' },
]

export function WorkGallery() {
  return (
    <section id="projects" className="py-16" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="projects-heading" className="sr-only">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.seed} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${p.seed}/600/400`}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/50">
                <Expand
                  size={32}
                  className="mb-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="text-xs uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
