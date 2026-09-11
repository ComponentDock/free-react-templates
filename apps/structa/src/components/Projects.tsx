import { Button } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    image: 'https://picsum.photos/seed/structa-proj-1/600/400',
    title: 'Modern Office Complex',
  },
  {
    image: 'https://picsum.photos/seed/structa-proj-2/600/400',
    title: 'Residential Tower',
  },
  {
    image: 'https://picsum.photos/seed/structa-proj-3/600/400',
    title: 'Commercial Center',
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20" aria-label="Projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-heading md:text-4xl">
          Projects we have Done
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          Take a look at some of our most recent and successful construction projects.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-heading">{project.title}</h3>
                <Button className="mt-4 inline-flex items-center rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
