import { useState } from 'react'
import { ArrowLeft, ArrowRight, Bath, BedDouble, Building2 } from 'lucide-react'
import type { Property } from '../data'

interface PropertyCarouselProps {
  id: string
  title: string
  subtitle: string
  properties: Property[]
  previousLabel: string
  nextLabel: string
}

const VISIBLE = 3

export function PropertyCarousel({
  id,
  title,
  subtitle,
  properties,
  previousLabel,
  nextLabel,
}: PropertyCarouselProps) {
  const [offset, setOffset] = useState(0)
  const maxOffset = Math.max(0, properties.length - VISIBLE)

  return (
    <section id={id} className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-medium text-ink">{title}</h2>
          <p className="mt-3 text-lg font-light text-muted">{subtitle}</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${offset * (100 / VISIBLE)}%)` }}
            >
              {properties.map((property) => (
                <article key={property.type + property.price} className="w-1/3 shrink-0 px-3">
                  <img
                    src={property.image}
                    alt=""
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <div className="pt-6">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-base font-medium text-brand">{property.price}</span>
                      <a
                        href="#"
                        className="text-[22px] font-medium text-ink transition-colors hover:text-brand"
                      >
                        {property.type}
                      </a>
                    </div>
                    <p className="mt-2 text-base font-light text-muted">{property.blurb}</p>
                    <div className="mt-4 flex items-center gap-5 border-t border-line/40 pt-4">
                      <span className="flex items-center gap-1.5 text-sm text-ink">
                        <BedDouble className="h-4 w-4 text-brand" aria-hidden="true" />{' '}
                        {property.beds}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-ink">
                        <Bath className="h-4 w-4 text-brand" aria-hidden="true" /> {property.baths}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-ink">
                        <Building2 className="h-4 w-4 text-brand" aria-hidden="true" />{' '}
                        {property.sqft}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {properties.length > VISIBLE && (
            <>
              <button
                type="button"
                aria-label={previousLabel}
                disabled={offset === 0}
                onClick={() => setOffset((current) => Math.max(0, current - 1))}
                className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-line bg-white p-3 text-ink transition-colors hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label={nextLabel}
                disabled={offset >= maxOffset}
                onClick={() => setOffset((current) => Math.min(maxOffset, current + 1))}
                className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 rounded-full border border-line bg-white p-3 text-ink transition-colors hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
