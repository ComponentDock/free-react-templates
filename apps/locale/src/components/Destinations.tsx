import { ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { DESTINATIONS, DESTINATIONS_TITLE, EXPLORE_LABEL, LISTINGS_ID } from '../lib/site'
import { containerClass, sectionClass, sectionTitleClass, veilClass } from '../lib/styles'

/**
 * Six circular city photographs. Hovering a circle raises a navy veil with an "Explore" link and the
 * design's slowly turning 2px dotted ring around the photo.
 */
export function Destinations() {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <h2 className={sectionTitleClass}>{DESTINATIONS_TITLE}</h2>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {DESTINATIONS.map((destination) => (
            <div key={destination.name} data-testid="destination" className="group text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[180px]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full rounded-full object-cover"
                />
                <div
                  data-testid="destination-veil"
                  className={cn(
                    veilClass,
                    'flex items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100',
                  )}
                >
                  <a
                    href={`#${LISTINGS_ID}`}
                    className="flex items-center gap-1 text-base font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    {EXPLORE_LABEL}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
                <span
                  aria-hidden="true"
                  data-testid="destination-ring"
                  className="animate-ring pointer-events-none absolute inset-0 m-auto h-[92%] w-[91%] rounded-full border-2 border-dotted border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-5 font-display text-[22px] font-semibold text-navy">
                {destination.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
