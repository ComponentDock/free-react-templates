import { ButtonLink } from '@free-react-templates/ui'
import { caseStudies } from '../data'

/** Case Studies gallery (source: .gallery 350px tiles with photo
 *  backgrounds): 6 items each showing a category tag, a title and a blurb;
 *  hovering reveals a teal overlay with a pink "Request Quote" button. */
export function CaseStudies() {
  return (
    <section id="case-studies" aria-label="Case Studies" className="bg-soft py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-bold uppercase tracking-[2px] text-brand">
          {caseStudies.subheading}
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ink lg:text-4xl">
          {caseStudies.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
          {caseStudies.intro}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.items.map((item) => (
            <article
              key={item.category + item.image}
              className="group relative h-[350px] overflow-hidden"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <span className="inline-flex w-fit rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {item.category}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{item.text}</p>
              </div>
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-brand/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ButtonLink
                  href="#consult"
                  tabIndex={-1}
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-hover"
                >
                  {caseStudies.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
