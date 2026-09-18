import { ExternalLink } from 'lucide-react'

const projects = [
  { id: 1, size: 'large' as const },
  { id: 2, size: 'small' as const },
  { id: 3, size: 'small' as const },
  { id: 4, size: 'small' as const },
  { id: 5, size: 'small' as const },
]

export function ProjectGallery() {
  return (
    <section id="works" className="py-0">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5">
          <div
            className="relative h-64 lg:h-full min-h-[400px] bg-cover bg-center group"
            style={{ backgroundImage: `url(https://picsum.photos/seed/venture-proj1/800/600)` }}
          >
            <div className="absolute inset-0 bg-[#010E21]/0 group-hover:bg-[#010E21]/70 transition-all duration-300 flex items-center justify-center">
              <a
                href="#"
                className="opacity-0 group-hover:opacity-100 text-white flex items-center gap-2 transition-opacity"
              >
                <ExternalLink size={20} />
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 grid grid-cols-2">
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="relative h-48 lg:h-64 bg-cover bg-center group"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/venture-proj${project.id}/600/400)`,
              }}
            >
              <div className="absolute inset-0 bg-[#010E21]/0 group-hover:bg-[#010E21]/70 transition-all duration-300 flex items-center justify-center">
                <a
                  href="#"
                  className="opacity-0 group-hover:opacity-100 text-white flex items-center gap-2 transition-opacity"
                >
                  <ExternalLink size={20} />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
