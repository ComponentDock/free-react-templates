import { ArrowRight } from 'lucide-react'
import { classTypes } from '../data'

/** Class types strip on #f8f9fa: 4 cards with a circular image, serif H3
 *  title and a "Learn more" arrow link (2×2 tablet, stacked mobile). */
export function ClassTypes() {
  return (
    <section aria-label="Class types" className="bg-light py-16 md:py-[7em]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {classTypes.map((item) => (
          <article key={item.title} className="text-center">
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto h-40 w-40 rounded-full object-cover"
            />
            <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
            <a
              href="#classes-section"
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/70 transition-colors hover:text-brand"
            >
              Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
