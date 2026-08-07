import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

const projects = [
  {
    name: 'Abahoni Building',
    location: 'Dubai, UAE',
    blurb:
      'A twelve-storey mixed-use tower wrapped in perforated screens that filter the desert sun.',
    image: 'https://picsum.photos/seed/atrium-project-1/800/600',
  },
  {
    name: 'MR Kholifa Tower',
    location: 'Dhaka, Bangladesh',
    blurb: 'A riverside office tower with deep terraces and a shaded double-skin facade.',
    image: 'https://picsum.photos/seed/atrium-project-2/800/600',
  },
  {
    name: 'Galoni Plan & Design',
    location: 'Dubai, UAE',
    blurb: 'A boutique gallery fit-out where raw concrete meets warm timber and brass.',
    image: 'https://picsum.photos/seed/atrium-project-3/800/600',
  },
  {
    name: 'Hiclick Mirror Design',
    location: 'Dhaka, Bangladesh',
    blurb: 'A retail flagship with mirrored ceilings and a sculptural central staircase.',
    image: 'https://picsum.photos/seed/atrium-project-4/800/600',
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-line dark:text-white/50">
            Project view
          </span>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-ink sm:text-5xl dark:text-white">
            Our Latest Projects
          </h2>
          <div className="mx-auto mt-8 h-0.5 w-[90px] bg-ink dark:bg-white" aria-hidden="true" />
        </div>

        <div className="mt-20 space-y-20">
          {projects.map((project, index) => (
            <div key={project.name} className="grid items-center gap-10 lg:grid-cols-2">
              <img
                src={project.image}
                alt={project.name}
                className={cn('h-72 w-full object-cover lg:h-80', index % 2 === 1 && 'lg:order-2')}
              />
              <div className={cn(index % 2 === 1 && 'lg:order-1')}>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-mist dark:text-white/50">
                  {project.location}
                </span>
                <h3 className="mt-3 text-3xl font-normal text-ink dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-mist dark:text-white/70">
                  {project.blurb}
                </p>
                <ButtonLink
                  href="#contact"
                  className="mt-8 h-auto rounded-none border border-ink bg-white px-8 py-3 text-xs font-normal uppercase tracking-[0.2em] text-ink hover:bg-ink hover:text-white dark:border-white/60 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-ink"
                >
                  View More
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
