import { useState } from 'react'
import { Quote, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const TESTIMONIALS = [
  {
    seed: 'outpost-testi-1',
    name: 'Fanny Spencer',
    quote:
      'As conscious traveling Paupers we must always be concerned about our Mother Earth. Camping with Outpost meant the wildest days of the trip were also the lightest on it.',
  },
  {
    seed: 'outpost-testi-2',
    name: 'Ethel Davis',
    quote:
      'They reshuffled the whole ridge crossing when the weather turned — permits, hut and guide were sorted before breakfast, and the walk was better for it.',
  },
  {
    seed: 'outpost-testi-3',
    name: 'Randy Weaver',
    quote:
      'Ten days in the desert and I never once carried a map. The itinerary left room for the long detours a good trip is actually made of.',
  },
] as const

const THUMB_INDEXES = [0, 1, 2] as const

/* Centered testimonial slider: quote mark, name, five stars and the quote for
   the active slide, with circular avatar thumbnails whose ring turns pink. */
export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<0 | 1 | 2>(0)
  const active = TESTIMONIALS[activeIndex]

  return (
    <section id="testimonials" className="py-[120px]">
      <div className="mx-auto max-w-[760px] px-4 text-center">
        <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
        <h4 className="mt-6 font-display text-[21px] font-bold text-ink">{active.name}</h4>
        <div className="mt-3 flex justify-center gap-1" aria-label="Rated five out of five">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
          ))}
        </div>
        <p data-testid="testimonial-quote" className="mt-6 text-[15px] leading-[26px]">
          {active.quote}
        </p>

        <div className="mt-10 flex justify-center gap-4">
          {THUMB_INDEXES.map((index) => {
            const item = TESTIMONIALS[index]
            return (
              <button
                key={item.seed}
                type="button"
                aria-label={`Show testimonial from ${item.name}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'h-[70px] w-[70px] overflow-hidden rounded-full border-2 transition-colors',
                  index === activeIndex ? 'border-brand' : 'border-transparent hover:border-brand',
                )}
              >
                <img
                  src={`https://picsum.photos/seed/${item.seed}/140/140`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
