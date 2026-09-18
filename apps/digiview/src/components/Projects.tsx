import { ExternalLink } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const projects = [
  { title: 'Brand Identity', category: 'Design', image: 'digiview-proj1' },
  { title: 'E-Commerce Platform', category: 'Development', image: 'digiview-proj2' },
  { title: 'Marketing Dashboard', category: 'Analytics', image: 'digiview-proj3' },
  { title: 'Mobile Application', category: 'App Design', image: 'digiview-proj4' },
]

interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  return (
    <section id="projects" className={cn('relative bg-darker py-20 text-white', className)}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/digiview-bg/1920/1080)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Projects</h2>
          <p className="mt-3 text-gray-400">Recent work we are proud of</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/${p.image}/400/300`}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="mt-1 text-sm text-brand">{p.category}</span>
                <ExternalLink className="mt-3 h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
