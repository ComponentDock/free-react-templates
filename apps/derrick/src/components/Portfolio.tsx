import { Search } from 'lucide-react'

const projects = [
  { seed: 'derrick-proj-1', alt: 'Construction project 1' },
  { seed: 'derrick-proj-2', alt: 'Construction project 2' },
  { seed: 'derrick-proj-3', alt: 'Construction project 3' },
]

const mainProject = projects[0]!
const sideProjects = projects.slice(1)

interface PortfolioProps {
  className?: string
}

export function Portfolio({ className }: PortfolioProps) {
  return (
    <section id="projects" className={`py-20 bg-gray-50 ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">We love to share our accomplishments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Large image */}
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={`https://picsum.photos/seed/${mainProject.seed}/800/600`}
              alt={mainProject.alt}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/40 transition-colors duration-300 flex items-center justify-center">
              <Search
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                size={32}
              />
            </div>
          </div>
          {/* Two smaller images */}
          <div className="grid grid-rows-2 gap-4">
            {sideProjects.map((project) => (
              <div key={project.seed} className="relative group overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${project.seed}/800/300`}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/40 transition-colors duration-300 flex items-center justify-center">
                  <Search
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={32}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
