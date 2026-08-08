import { ArrowRight } from 'lucide-react'

interface Project {
  title: string
  category: string
  blurb: string
  image: string
  href: string
}

const projects: Project[] = [
  {
    title: 'Nova Fintech Rebrand',
    category: 'Branding',
    blurb:
      'Complete brand overhaul for a leading fintech startup, positioning them as the future of personal banking.',
    image: 'https://picsum.photos/seed/kreativ-1/800/600',
    href: '#work',
  },
  {
    title: 'Mindful Wellness App',
    category: 'Mobile App',
    blurb: 'A meditation and wellness app designed to help users build healthy daily habits.',
    image: 'https://picsum.photos/seed/kreativ-2/800/600',
    href: '#work',
  },
  {
    title: 'Urban Eats Platform',
    category: 'Web Design',
    blurb: 'A food delivery platform connecting local restaurants with hungry customers.',
    image: 'https://picsum.photos/seed/kreativ-3/800/600',
    href: '#work',
  },
]

export function Work() {
  return (
    <section id="work" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
              Selected Work
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              A showcase of our best projects across branding, web design, and digital experiences.
            </p>
          </div>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 transition-colors hover:text-primary-600"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group relative overflow-hidden rounded-2xl bg-gray-900"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wider text-primary-400">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-300">{project.blurb}</p>
              </div>

              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6 transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-xs font-medium uppercase tracking-wider text-primary-400">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
