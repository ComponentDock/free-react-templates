import { ExternalLink } from 'lucide-react'

const projects = [
  { title: 'Shoe Rebranding', tags: 'web, branding', seed: 'reveal-proj-1' },
  { title: 'Reworking', tags: 'branding, packaging', seed: 'reveal-proj-2' },
  { title: 'Modern Building', tags: 'branding, packaging', seed: 'reveal-proj-3' },
  { title: 'Watch', tags: 'web, packaging', seed: 'reveal-proj-4' },
  { title: 'Shoe Rebranding', tags: 'illustration, packaging', seed: 'reveal-proj-5' },
  { title: 'Reshape', tags: 'web, branding', seed: 'reveal-proj-6' },
  { title: 'Modern Building', tags: 'branding, packaging', seed: 'reveal-proj-7' },
  { title: 'Showreel 2019', tags: 'web, branding', seed: 'reveal-proj-8' },
  { title: 'Render Packaging', tags: 'web, illustration', seed: 'reveal-proj-9' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-3xl font-bold">Portfolio</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.seed} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ExternalLink className="mb-3 text-white" size={24} />
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-white/60">{project.tags}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
