import { cn } from '@free-react-templates/ui'

const projects = [
  {
    title: 'House Renovation',
    image: 'https://picsum.photos/seed/reframe-proj1/400/300',
  },
  {
    title: 'General Construction Building',
    image: 'https://picsum.photos/seed/reframe-proj2/400/300',
  },
  {
    title: 'Pre-Construction',
    image: 'https://picsum.photos/seed/reframe-proj3/400/300',
  },
]

export interface ProjectsProps {
  className?: string
}

export function Projects({ className }: ProjectsProps) {
  return (
    <section id="projects" data-testid="projects" className={cn('bg-paper py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-display text-3xl font-bold uppercase text-ink md:text-4xl">
          Recent Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group overflow-hidden rounded bg-white shadow-md">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
