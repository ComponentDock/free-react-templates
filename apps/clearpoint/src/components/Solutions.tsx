import { solutions } from '../data'

/** Light solutions row: label + heading block, then four blog-style cards
 *  (image, title, blurb, Learn More) with a mint hover overlay. */
export function Solutions() {
  return (
    <section id="blog" aria-labelledby="solutions-heading" className="bg-surface py-25">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm uppercase tracking-wide text-body">Our Solutions</span>
          <h2
            id="solutions-heading"
            className="mt-3 font-display text-3xl font-medium leading-tight text-ink lg:text-4xl"
          >
            Our consulting solutions for the streaming era
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Practical, outcome-focused services that adapt as fast as your market does.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <article key={solution.title} className="group relative overflow-hidden bg-white">
              <img
                src={solution.image}
                alt=""
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-ink">{solution.title}</h3>
                <p className="mt-3 text-sm leading-relaxed">{solution.blurb}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-block text-sm font-medium text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand-dark"
                >
                  Learn More
                </a>
              </div>
              <a
                href="#contact"
                aria-hidden="true"
                className="absolute inset-0 hidden items-center justify-center bg-brand p-5 text-center font-display text-lg font-medium text-ink opacity-0 transition-opacity duration-300 group-hover:flex group-hover:opacity-100"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
