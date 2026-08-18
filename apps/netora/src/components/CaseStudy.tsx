import { caseStudies } from '../data'

export function CaseStudy() {
  return (
    <section id="case-study" aria-label="Our Case Study" className="bg-white pb-[90px] pt-[100px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-brand">
            Our Case Study
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-2px] text-navy-deep">
            We work with global brands
          </h2>
          <p className="mt-4 text-lg text-body">
            Real projects, measurable outcomes, lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="group bg-white">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="pt-7">
                <span className="text-xs font-medium uppercase tracking-wider text-brand">
                  {item.tag}
                </span>
                <h3 className="mt-2 text-2xl font-medium text-navy transition-colors group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-body">{item.blurb}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-navy"
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
