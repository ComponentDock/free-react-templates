import { ArrowRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const cities = [
  { city: 'New York, USA', image: 'https://picsum.photos/seed/keyhold-7/640/420' },
  { city: 'Los Angeles, USA', image: 'https://picsum.photos/seed/keyhold-8/640/420' },
  { city: 'Chicago, USA', image: 'https://picsum.photos/seed/keyhold-9/640/420' },
  { city: 'San Francisco, USA', image: 'https://picsum.photos/seed/keyhold-10/640/420' },
  { city: 'Miami, USA', image: 'https://picsum.photos/seed/keyhold-11/640/420' },
  { city: 'Seattle, USA', image: 'https://picsum.photos/seed/keyhold-12/640/420' },
] as const

/**
 * CityListings — "Find Properties In Your City" grid (source `.listing-wrap`):
 * six rounded photo cards, each with a gold location badge top-left, a
 * "100 Property Listing" title, and a "See All Listing" link with an arrow.
 */
export function CityListings() {
  return (
    <section id="listing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading subheading="Find Properties" title="Find Properties In Your City" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <article key={city.city} className="group relative overflow-hidden rounded bg-white">
              <img
                src={city.image}
                alt={`Homes in ${city.city}`}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded bg-brand px-3 py-1.5 text-sm font-semibold text-white">
                {city.city}
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">100 Property Listing</h3>
                  <a
                    href="#listing"
                    className="mt-1 inline-flex items-center gap-1 text-sm text-white transition-colors hover:text-brand"
                  >
                    See All Listing
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
