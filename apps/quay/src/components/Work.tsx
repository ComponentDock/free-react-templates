import { ArrowRight } from 'lucide-react'
import { works } from '../data'

/* Portfolio grid — header row (uppercase heading + "View All Works" link)
   above a 2-column grid of project cards (reference: .media-02819). */
export function Work() {
  return (
    <section id="work" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 flex items-end justify-between gap-4">
          <h2 className="text-xl font-bold uppercase text-black">Our Work</h2>
          <a
            href="#work"
            className="text-xs font-bold uppercase tracking-wide text-black transition-colors hover:text-brand"
          >
            View All Works <ArrowRight className="ml-1 inline h-3 w-3" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {works.map((item) => (
            <article key={item.title}>
              <a href="#work" className="block overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
              <h3 className="mt-5 text-lg font-semibold text-black">
                <a href="#work" className="transition-colors hover:text-brand">
                  {item.title}
                </a>
              </h3>
              <span className="text-sm text-gray-500">{item.location}</span>
              <p className="mt-2">
                <a
                  href="#work"
                  className="text-xs font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-hover"
                >
                  Read More
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
