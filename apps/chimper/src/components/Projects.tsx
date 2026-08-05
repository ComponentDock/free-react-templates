import { ButtonLink } from '@free-react-templates/ui'

const projects = [
  { name: 'Project Name 1', category: 'Web Application', seed: 'chimper-work-1' },
  { name: 'Project Name 2', category: 'Branding', seed: 'chimper-work-2' },
  { name: 'Project Name 3', category: 'Website', seed: 'chimper-work-3' },
] as const

export function Projects() {
  return (
    <section id="work" className="bg-white py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="relative pb-5 text-4xl font-bold text-black after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[100px] after:-translate-x-1/2 after:bg-primary-600 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-6 leading-relaxed text-ink dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque,
            delectus odio iure explicabo.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href="#work"
              className="group relative block overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/450`}
                alt={`${project.name} preview`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex translate-y-2 flex-col items-center justify-center text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <span className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">
                  {project.category}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#work"
            className="rounded-full bg-primary-600 px-8 py-4 text-xs font-medium uppercase tracking-[0.1em] text-white hover:bg-primary-700"
          >
            Show All Works
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
