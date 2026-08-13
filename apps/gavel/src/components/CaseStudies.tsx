import { cases } from '../data'

/** Centered-heading section with a 3-column grid of six case-study image
 *  cards; each card overlays a category tag and a centered title. */
export function CaseStudies() {
  return (
    <section id="cases" aria-label="Case studies" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Explore Case Studies
          </p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            1000+ Completed Cases Successfully
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.title}
              className="group relative h-[300px] overflow-hidden rounded shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)]"
            >
              <img
                src={caseStudy.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {caseStudy.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{caseStudy.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
