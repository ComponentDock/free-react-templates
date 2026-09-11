import { ExternalLink, Eye } from 'lucide-react'

const projects = [
  { title: 'Project Title', image: 'https://picsum.photos/seed/buildwell-proj1/600/400' },
  { title: 'Project Title', image: 'https://picsum.photos/seed/buildwell-proj2/600/400' },
  { title: 'Project Title', image: 'https://picsum.photos/seed/buildwell-proj3/600/400' },
  { title: 'Project Title', image: 'https://picsum.photos/seed/buildwell-proj4/600/400' },
] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Subtitle</p>
          <h2 className="mt-2 text-3xl font-bold text-heading">Featured Works</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-brand/0 opacity-0 transition-all duration-300 group-hover:bg-brand/70 group-hover:opacity-100">
                <a
                  href="#portfolio"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-brand transition-colors hover:bg-white"
                  aria-label={`View ${project.title}`}
                >
                  <Eye className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#portfolio"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-brand transition-colors hover:bg-white"
                  aria-label={`Link to ${project.title}`}
                >
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
              <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
