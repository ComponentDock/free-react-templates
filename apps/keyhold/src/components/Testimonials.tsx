import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const testimonials = [
  {
    quote:
      'Keyhold found my dream home in two weeks — the cash-offer team made the seller pick us every time.',
    name: 'Roger Scott',
    position: 'Marketing Manager',
    avatar: 'https://picsum.photos/seed/keyhold-t1/96/96',
  },
  {
    quote:
      'No downpayment sounded too good to be true until Keyhold walked us through every line item.',
    name: 'Amelia Grant',
    position: 'Software Engineer',
    avatar: 'https://picsum.photos/seed/keyhold-t2/96/96',
  },
  {
    quote:
      'The agents answered every question and locked our rate early. Smooth closing, zero surprises.',
    name: 'Daniel Brooks',
    position: 'Business Owner',
    avatar: 'https://picsum.photos/seed/keyhold-t3/96/96',
  },
  {
    quote:
      'We compared five listings in one afternoon. Their local experts knew the market inside out.',
    name: 'Priya Nair',
    position: 'Physician',
    avatar: 'https://picsum.photos/seed/keyhold-t4/96/96',
  },
  {
    quote:
      'From first tour to keys in hand, everything was transparent. Highly recommended for first-time buyers.',
    name: 'Marcus Hale',
    position: 'Teacher',
    avatar: 'https://picsum.photos/seed/keyhold-t5/96/96',
  },
] as const

/**
 * Testimonials — "Happy Clients" carousel on a light-gray band (source
 * `.testimony-section.bg-light`): one quote card at a time with circular
 * avatar, name, and position, plus accessible previous/next controls that
 * wrap around.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const item = testimonials[index]!

  const prev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((current) => (current + 1) % testimonials.length)

  return (
    <section aria-label="Testimonials" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <SectionHeading subheading="Testimonial" title="Happy Clients" />

        <div className="mt-14 rounded-[3px] bg-white p-8 text-center shadow-[0_5px_21px_-14px_rgba(0,0,0,0.14)] lg:p-12">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-brand">
            <Quote className="h-5 w-5" aria-hidden="true" />
          </span>
          <blockquote className="mt-6 text-lg leading-relaxed text-body">{item.quote}</blockquote>
          <img
            src={item.avatar}
            alt=""
            aria-hidden="true"
            className="mx-auto mt-6 h-16 w-16 rounded-full object-cover"
          />
          <p className="mt-3 text-base font-semibold text-ink">{item.name}</p>
          <p className="text-sm text-muted">{item.position}</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-soft transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-soft transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
