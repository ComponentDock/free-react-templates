import { ArrowRight } from 'lucide-react'
import { categories } from '../data'

export function Categories() {
  return (
    <section aria-label="Industry We Offer" className="bg-section py-[100px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-brand">
            Industry We Offer
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-2px] text-navy-deep">
            Managed IT services customized for your industry
          </h2>
          <p className="mt-4 text-lg text-body">
            Tailored technology foundations that fit the way your industry actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <article
                key={category.title}
                className="bg-card px-6 pb-8 pt-12 transition-shadow duration-300 hover:shadow-[0_20px_30px_rgba(35,47,85,0.1)]"
              >
                <span className="flex size-16 items-center justify-center bg-white/70 text-brand">
                  <Icon aria-hidden="true" className="size-8" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-xl font-medium text-navy-deep">{category.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{category.blurb}</p>
                <a
                  href="#services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-navy"
                >
                  Find Out More
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
