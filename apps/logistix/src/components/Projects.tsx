import { ArrowRight } from 'lucide-react'

const PROJECTS = [
  {
    number: '01',
    title: 'Logistic Solution',
    description:
      'Praesent eu rhoncus nibh. Quisque tincidunt, nisi in commodo, neque quam pharetra dolor, nec lacinia.',
  },
  {
    number: '02',
    title: 'Supply Chain Management',
    description:
      'Praesent eu rhoncus nibh. Quisque tincidunt, nisi in commodo, neque quam pharetra dolor, nec lacinia.',
  },
] as const

export function Projects() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 lg:grid-cols-2">
        {/* Left: Image */}
        <div
          className="min-h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/logistix-projects/800/600)',
          }}
        />

        {/* Right: Content */}
        <div className="bg-gray-900 px-6 py-16 sm:px-12 lg:py-20">
          <h2 className="mb-10 font-display text-3xl font-light leading-snug text-white sm:text-4xl">
            We give you complete control of your shipments.
          </h2>

          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <div key={project.number} className="flex items-start gap-6">
                <span className="flex-shrink-0 font-display text-3xl font-bold text-brand">
                  {project.number}
                </span>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-gray-400 transition-colors hover:text-brand"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
