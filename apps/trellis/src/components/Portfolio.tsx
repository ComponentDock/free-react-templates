import { Search } from 'lucide-react'

const projects = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  seed: `trellis-${index + 1}`,
  title: `Project ${index + 1}`,
}))

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-5 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="sr-only">Portfolio</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative h-[220px] overflow-hidden bg-charcoal"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/640/480`}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-30"
              />
              <a
                href="#portfolio"
                aria-label={`View ${project.title}`}
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-paper text-ink">
                  <Search className="h-5 w-5" aria-hidden="true" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
