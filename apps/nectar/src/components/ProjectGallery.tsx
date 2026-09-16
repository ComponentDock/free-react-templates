import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const projects = [
  { name: 'Modern Villa', seed: 'nectar-proj-1' },
  { name: 'Office Complex', seed: 'nectar-proj-2' },
  { name: 'Residential Tower', seed: 'nectar-proj-3' },
]

export function ProjectGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="bg-paper py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-heading text-3xl font-bold text-heading md:text-4xl">
          Our Projects
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" aria-hidden="true" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.seed}
              className="group relative cursor-pointer overflow-hidden rounded-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex={0}
              role="img"
              aria-label={`View project: ${project.name}`}
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.name}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div
                className={cn(
                  'absolute inset-0 flex flex-col items-center justify-center bg-brand/80 transition-opacity duration-300',
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0',
                )}
                aria-hidden="true"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>
              {/* Project name sliding up */}
              <div
                className={cn(
                  'absolute bottom-0 left-0 w-full bg-dark/90 py-3 text-center transition-transform duration-300',
                  hoveredIndex === index ? 'translate-y-0' : 'translate-y-full',
                )}
              >
                <h3 className="font-heading text-sm font-bold text-white">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
