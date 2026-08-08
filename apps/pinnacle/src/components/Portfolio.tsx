import { useState } from 'react'

const projects = [
  {
    seed: 'pinnacle-portfolio-1',
    date: 'December, 2018',
    title: 'Pure Bedroom Architecture',
    text: 'If you are looking at blank cassettes on the web, lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    seed: 'pinnacle-portfolio-2',
    date: 'December, 2018',
    title: 'Pure Bedroom Architecture',
    text: 'If you are looking at blank cassettes on the web, lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    seed: 'pinnacle-portfolio-3',
    date: 'December, 2018',
    title: 'Pure Bedroom Architecture',
    text: 'If you are looking at blank cassettes on the web, lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    seed: 'pinnacle-portfolio-4',
    date: 'December, 2018',
    title: 'Pure Bedroom Architecture',
    text: 'If you are looking at blank cassettes on the web, lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
] as const

const extraProjects = [
  {
    seed: 'pinnacle-portfolio-5',
    date: 'March, 2019',
    title: 'Lakeside Villa',
    text: 'A waterfront residence designed around light, timber, and uninterrupted views.',
  },
  {
    seed: 'pinnacle-portfolio-6',
    date: 'June, 2019',
    title: 'Skyline Loft',
    text: 'An urban penthouse with double-height living spaces and a rooftop garden.',
  },
] as const

export function Portfolio() {
  const [showMore, setShowMore] = useState(false)
  const visible = showMore ? [...projects, ...extraProjects] : projects

  return (
    <section
      id="projects"
      aria-label="Portfolio"
      className="bg-paper py-20 dark:bg-gray-950 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[3px] text-brand">OUR PORTFOLIO</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-ink dark:text-white lg:text-4xl">
            Latest Completed Projects
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {visible.map((project, index) => (
            <article key={project.seed} className={index % 2 === 1 ? 'lg:mt-16' : undefined}>
              <img
                src={`https://picsum.photos/seed/${project.seed}/700/500`}
                alt={`${project.title} — project photo`}
                className="h-[240px] w-full object-cover"
              />
              <p className="mt-5 text-xs font-bold uppercase tracking-[3px] text-mist">
                {project.date}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium text-ink dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {project.text}
              </p>
              <a
                href="#projects"
                className="mt-4 inline-flex items-center gap-3 border-y border-ink/40 py-2 text-xs font-medium uppercase tracking-[3px] text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/40 dark:text-white dark:hover:border-brand dark:hover:text-brand"
              >
                Read More
              </a>
            </article>
          ))}
        </div>

        {!showMore && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={() => setShowMore(true)}
              className="inline-flex items-center justify-center rounded-lg border border-ink/30 px-8 py-3 text-sm font-medium uppercase tracking-[2px] text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/30 dark:text-white dark:hover:border-brand dark:hover:text-brand"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
