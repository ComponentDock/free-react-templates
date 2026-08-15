import { works } from '../data'

export function Portfolio() {
  return (
    <section id="portfolio" aria-label="Portfolio" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-brand">Portfolio</span>
          <h2 className="mt-3 font-display text-4xl font-normal text-ink">Featured Works</h2>
          <p className="mt-4 text-muted">
            Tour function information without cross action media value quickly maximize timely
            deliverables.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {works.map((work) => (
            <a
              key={work.title}
              href="#portfolio"
              className={`group relative block overflow-hidden rounded-md ${
                work.featured ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={work.image}
                alt={work.title}
                className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium uppercase tracking-wide text-brand">
                  {work.category}
                </span>
                <h3 className="mt-2 text-2xl text-white">{work.title}</h3>
                <span className="mt-4 border border-white px-5 py-2 text-sm text-white">View</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
