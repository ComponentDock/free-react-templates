import { useEffect, useState } from 'react'
import { Bath, BedDouble, MapPin, Maximize2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PROPERTIES, PROPERTY_ADDRESS } from '../data'

const AUTOPLAY_MS = 3000

/* Latest properties (source: div.site-section.bg-black.block-14 — black
   section with an owl carousel of three listing cards: photo, sq-ft /
   bed / bath stats with green icons, price link, green pin + address in
   70%-opacity white; ~3s autoplay with dots). Hand-rolled carousel. */
export function Properties() {
  const [index, setIndex] = useState(0)
  const count = PROPERTIES.length

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [count])

  return (
    <section id="property" className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 h-[2px] w-[70px] bg-brand" aria-hidden="true" />
          <h2 className="text-[22px] font-semibold uppercase text-white">Latest Properties</h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-white/60">
            Hand-picked listings from the homes we know best.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {PROPERTIES.map((property) => (
              <article key={property.seed} className="w-full shrink-0 px-[15px]">
                <div className="text-white">
                  <a href="#property">
                    <img
                      src={`https://picsum.photos/seed/${property.seed}/800/600`}
                      alt={`Listing priced at ${property.price}`}
                      loading="lazy"
                      className="h-64 w-full object-cover"
                    />
                  </a>
                  <div className="mt-5 flex items-center gap-6 text-[13px]">
                    <span className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/20">
                        <Maximize2 className="h-4 w-4 text-brand" aria-hidden="true" />
                      </span>
                      {property.stats.sqft} Sq Ft.
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/20">
                        <BedDouble className="h-4 w-4 text-brand" aria-hidden="true" />
                      </span>
                      {property.stats.beds}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/20">
                        <Bath className="h-4 w-4 text-brand" aria-hidden="true" />
                      </span>
                      {property.stats.baths}
                    </span>
                  </div>
                  <h3 className="mt-3">
                    <a
                      href="#property"
                      className="text-[24px] font-semibold transition-colors hover:text-brand"
                    >
                      {property.price}
                    </a>
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-white/70">
                    <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                    {PROPERTY_ADDRESS}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {PROPERTIES.map((property, dotIndex) => (
            <button
              key={property.seed}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Go to property slide ${dotIndex + 1}`}
              aria-current={index === dotIndex}
              className={cn(
                'h-2.5 rounded-full transition-all',
                index === dotIndex ? 'w-8 bg-brand' : 'w-2.5 bg-white/30 hover:bg-white/60',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
