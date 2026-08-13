import { Search } from 'lucide-react'
import { portfolio } from '../data'

/** White "My Portfolio" section: centered title with green underline and a
 *  responsive grid of nine images (no filter tabs — the reference has
 *  none). Hover: image scales to 1.05, a rgba(0,0,0,0.4) overlay fades in
 *  and a centered white search icon scales in. */
export function Portfolio() {
  return (
    <section
      id="portfolio-section"
      data-testid="portfolio"
      className="bg-white py-[2.5em] md:py-[7em]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title relative pb-5 text-center text-3xl">{portfolio.heading}</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {portfolio.items.map((item) => (
            <figure
              key={item.title}
              data-testid={`portfolio-${item.title}`}
              className="group relative overflow-hidden rounded"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Search
                  className="h-[1.7rem] w-[1.7rem] scale-0 text-white transition-transform duration-300 group-hover:scale-100"
                  aria-hidden="true"
                />
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
