import { caseStudies } from '../data'

/** Four-column case study grid with image overlays. */
export function CaseStudies() {
  return (
    <section id="cases" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">Cases</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink md:text-4xl">
            Recent Case Studies
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={c.image}
                alt={c.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
