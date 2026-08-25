import { cases } from '../data'

/** Pale-green case-study section: heading + "LEARN MORE" link, then three
 *  case cards (image, title, blurb, View Case link). */
export function CaseStudy() {
  return (
    <section id="case-study" aria-labelledby="case-heading" className="bg-surface2 py-25">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-sm uppercase tracking-wide text-body">Case Study</span>
            <h2
              id="case-heading"
              className="mt-3 font-display text-3xl font-medium leading-tight text-ink lg:text-4xl"
            >
              Case study
            </h2>
          </div>
          <a href="#contact" className="link-underline-green w-fit">
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="bg-white">
              <img src={item.image} alt="" className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-7">
                <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{item.blurb}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-block text-sm font-medium text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand-dark"
                >
                  View Case
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
