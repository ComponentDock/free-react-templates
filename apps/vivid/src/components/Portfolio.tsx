import { ExternalLink, Search } from 'lucide-react'

const projects = [
  { title: 'Brand Identity', category: 'Design', seed: 'vivid-portfolio-1' },
  { title: 'Web Application', category: 'Development', seed: 'vivid-portfolio-2' },
  { title: 'Mobile App', category: 'Development', seed: 'vivid-portfolio-3' },
  { title: 'Marketing Campaign', category: 'Marketing', seed: 'vivid-portfolio-4' },
  { title: 'Creative Strategy', category: 'Strategy', seed: 'vivid-portfolio-5' },
  { title: 'Social Media', category: 'Marketing', seed: 'vivid-portfolio-6' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-grey-border bg-grey-bg py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-4xl font-bold text-heading">Featured Works</h2>
          <div className="mx-auto mt-5 h-1 w-10 bg-primary" />
        </div>

        {/* Portfolio grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.seed} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-heading/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-2 text-sm text-white/70">{project.category}</span>
                <h3 className="mb-4 text-xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    aria-label={`View ${project.title}`}
                    className="text-white hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href="#"
                    aria-label={`Zoom ${project.title}`}
                    className="text-white hover:text-primary"
                  >
                    <Search size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
