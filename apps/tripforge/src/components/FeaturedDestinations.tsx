import { useState, type CSSProperties } from 'react'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'
import { DESTINATIONS } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function FeaturedDestinations() {
  const [index, setIndex] = useState(0)
  const lastIndex = DESTINATIONS.length - 1

  return (
    <section id="destination" className="section-gap bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            subheading="Featured"
            lead="Featured"
            rest="Destination"
            className="mb-0"
          />
          <div className="mb-10 flex gap-3">
            <button
              type="button"
              aria-label="Previous destinations"
              disabled={index === 0}
              onClick={() => setIndex((value) => Math.max(0, value - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hair text-heading disabled:opacity-40"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next destinations"
              disabled={index === lastIndex}
              onClick={() => setIndex((value) => Math.min(lastIndex, value + 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hair text-heading disabled:opacity-40"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-label="Featured destinations"
          data-index={index}
          className="overflow-hidden"
        >
          <ul className="slide-track" style={{ '--slide': String(index) } as CSSProperties}>
            {DESTINATIONS.map((destination) => (
              <li key={destination.image} className="slide-item">
                <div className="listing-media">
                  <img src={destination.image} alt={destination.title} />
                  <div className="hover-circle">
                    <span className="hover-circle-inner">
                      <Search aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xl font-medium">
                    <a href="#listings" className="text-heading hover:text-coral">
                      {destination.title}
                    </a>
                  </h3>
                  <p className="text-sm text-muted">{destination.listings}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
