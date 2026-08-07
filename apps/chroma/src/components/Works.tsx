import { ArrowUpRight } from 'lucide-react'

const projects = [
  { title: 'Lamp', category: 'Web Design', seed: 'chroma-work-1' },
  { title: 'Salad', category: 'Illustration', seed: 'chroma-work-2' },
  { title: 'Orbit', category: 'Product Strategy', seed: 'chroma-work-3' },
] as const

export function Works() {
  return (
    <section id="works" aria-label="Featured works" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-gray-100">
            Featured Works
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">
            A selection of recent projects we are proud of.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-primary-100 bg-gray-50 transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${project.seed}/600/400`}
                  alt={`${project.title} project`}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-gray-100">
                    {project.title}
                  </h3>
                  <div className="mt-1 text-sm text-primary-400">{project.category}</div>
                </div>
                <a
                  href="#contact"
                  aria-label={`Project Link: ${project.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-400 text-white transition-colors hover:bg-primary-600"
                >
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
