import { useState } from 'react'

const projects = [
  { id: 1, name: 'Garden Landscaping', category: 'Trimming', seed: 'verdure-work-1' },
  { id: 2, name: 'Plantation Work', category: 'Plantations', seed: 'verdure-work-2' },
  { id: 3, name: 'Watering Service', category: 'Watering', seed: 'verdure-work-3' },
  { id: 4, name: 'Lawn Trimming', category: 'Trimming', seed: 'verdure-work-4' },
  { id: 5, name: 'Nursery Management', category: 'Nursery', seed: 'verdure-work-5' },
  { id: 6, name: 'Plant Arrangement', category: 'Plants', seed: 'verdure-work-6' },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden h-72"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-white text-xl font-semibold mb-2">{project.name}</h3>
                <span className="text-verdure-400 text-sm uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
