import { ExternalLink } from 'lucide-react'

const projects = [
  { id: 1, seed: 'oraxol-portfolio-1' },
  { id: 2, seed: 'oraxol-portfolio-2' },
  { id: 3, seed: 'oraxol-portfolio-3' },
  { id: 4, seed: 'oraxol-portfolio-4' },
  { id: 5, seed: 'oraxol-portfolio-5' },
  { id: 6, seed: 'oraxol-portfolio-6' },
] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-dark-surface px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Our Portfolio</h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href="#"
              className="group relative block overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={`Portfolio project ${project.id}`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">High Quality Design Concept</h3>
                <ExternalLink className="mt-2 h-5 w-5 text-accent" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
