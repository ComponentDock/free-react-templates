import { useState } from 'react'
import { SectionTitle } from './SectionTitle'
import { SliderControls, StarRating } from './Slider'

const TESTIMONIALS = [
  {
    name: 'Harriet Maxwell',
    quote:
      'Two weeks through the islands without touching a single booking form — the itinerary arrived already costed.',
    rating: 4,
    seed: 'tripquest-face-1',
  },
  {
    name: 'Carolyn Craig',
    quote:
      'They rebuilt the trip around a cancelled flight in under an hour and still kept the budget we agreed.',
    rating: 3,
    seed: 'tripquest-face-2',
  },
  {
    name: 'Marcus Bennett',
    quote:
      'The day-by-day plan was the part I trusted most: every transfer, ticket and table already confirmed.',
    rating: 4,
    seed: 'tripquest-face-3',
  },
  {
    name: 'Elena Fischer',
    quote:
      'Our honeymoon ran exactly as priced, with a private guide we would never have found on our own.',
    rating: 3,
    seed: 'tripquest-face-4',
  },
] as const

const PAGE_SIZE = 2

/* Light lavender band holding a pager of white testimonial cards: circular
   avatar left, quote and name right, star row underneath. */
export function Testimonials() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(TESTIMONIALS.length / PAGE_SIZE)
  const visible = TESTIMONIALS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section id="testimonials" className="bg-panel py-[120px]">
      <SectionTitle
        title="Testimonial from our Clients"
        subtitle="Notes from travellers who handed the logistics over and kept the holiday."
      />
      <div className="mx-auto grid max-w-[1140px] gap-[30px] px-4 md:grid-cols-2">
        {visible.map((testimonial) => (
          <article
            key={testimonial.name}
            className="flex items-start gap-[30px] bg-white px-[30px] pt-[25px] pb-[12px]"
          >
            <img
              src={`https://picsum.photos/seed/${testimonial.seed}/120/120`}
              alt={testimonial.name}
              className="h-[80px] w-[80px] shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-[15px] leading-[1.8] text-body">{testimonial.quote}</p>
              <h4 className="mt-[16px] text-[18px] font-semibold text-ink">{testimonial.name}</h4>
              <StarRating
                rating={testimonial.rating}
                label={`${testimonial.name} rated us ${testimonial.rating} out of 5`}
              />
            </div>
          </article>
        ))}
      </div>
      <p data-testid="testimonial-page" className="sr-only">
        Page {page + 1} of {pageCount}
      </p>
      <SliderControls
        label="testimonial"
        onPrevious={() => setPage((current) => (current - 1 + pageCount) % pageCount)}
        onNext={() => setPage((current) => (current + 1) % pageCount)}
      />
    </section>
  )
}
