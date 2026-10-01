import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

interface Testimonial {
  name: string
  quote: string
  img: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Vongchong Smith',
    quote:
      'Booking took less than five minutes and the car was spotless. AutoDock is now the only service I use for business trips.',
    img: 'autodock-client-1',
  },
  {
    name: 'Amader Tuni',
    quote:
      'Fair prices, friendly staff, and they delivered the car right to my apartment. Highly recommended for families.',
    img: 'autodock-client-2',
  },
  {
    name: 'Atex Tuntuni Smith',
    quote:
      'I rented an SUV for a week-long road trip. Zero paperwork stress and the insurance options gave me real peace of mind.',
    img: 'autodock-client-3',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = TESTIMONIALS[index]!

  const goPrev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const goNext = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle title="Testimonials" />
        <figure className="border border-line bg-white p-10 text-center shadow-sm">
          <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
          <blockquote className="mx-auto mt-6 max-w-2xl text-lg italic leading-relaxed text-ink">
            “{current.quote}”
          </blockquote>
          <figcaption className="mt-8">
            <img
              src={`https://picsum.photos/seed/${current.img}/160/160`}
              alt={current.name}
              className="mx-auto h-20 w-20 rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 text-lg font-bold uppercase text-ink">{current.name}</h3>
          </figcaption>
        </figure>
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center border-2 border-brand text-ink transition-colors hover:bg-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center border-2 border-brand text-ink transition-colors hover:bg-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
