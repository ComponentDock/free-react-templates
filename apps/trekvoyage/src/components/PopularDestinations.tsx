import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

const DESTINATIONS = [
  { seed: 'trekvoyage-dest-1', title: 'The White City', location: 'Santorini, Greece' },
  { seed: 'trekvoyage-dest-2', title: 'Byodo-In Temple Ahuimanu', location: 'United States' },
  { seed: 'trekvoyage-dest-3', title: 'Kaafu Atoll', location: 'Maldives' },
] as const

const ARROW_CLASS =
  'inline-flex h-[40px] w-[40px] items-center justify-center text-black/40 transition-colors duration-300 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40'

/* Centered-title carousel of photo cards: the caption stays pinned top-left
   over the photo and a turquoise wash with a slight zoom fades in on hover.
   The reference drives this with its carousel plugin; here it is a
   React-state pager with prev/next arrows. */
export function PopularDestinations() {
  const [active, setActive] = useState(0)

  const previous = () => {
    setActive(active === 0 ? DESTINATIONS.length - 1 : active - 1)
  }

  const next = () => {
    setActive(active === DESTINATIONS.length - 1 ? 0 : active + 1)
  }

  return (
    <section id="destinations" className="py-[70px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle title="Popular Destination" />

        <div className="grid gap-[30px] md:grid-cols-3">
          {DESTINATIONS.map((destination, index) => (
            <figure
              key={destination.title}
              data-active={index === active}
              className={cn(
                'group relative overflow-hidden',
                index === active ? 'block' : 'hidden md:block',
              )}
            >
              <img
                alt=""
                aria-hidden="true"
                src={`https://picsum.photos/seed/${destination.seed}/700/700`}
                className="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
              />
              <div
                aria-hidden="true"
                className="teal-wash absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <figcaption className="absolute top-[10%] left-[10%]">
                <h3 className="text-[16px] font-black text-white">{destination.title}</h3>
                <p className="text-[0.8rem] text-white/70">{destination.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-[40px] flex items-center justify-center gap-[10px]">
          <button
            type="button"
            aria-label="Previous destination"
            onClick={previous}
            className={ARROW_CLASS}
          >
            <ChevronLeft className="h-[24px] w-[24px]" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next destination"
            onClick={next}
            className={cn(ARROW_CLASS, 'hover:text-brand')}
          >
            <ChevronRight className="h-[24px] w-[24px]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
