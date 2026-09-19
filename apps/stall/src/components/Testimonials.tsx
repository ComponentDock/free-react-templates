import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer Wilson',
    image: 'stall-test-1',
    quote: 'Amazing quality products! The customer service was outstanding and delivery was fast.',
  },
  {
    name: 'Robert Brown',
    image: 'stall-test-2',
    quote: 'Best online shopping experience I have ever had. Highly recommended!',
  },
  {
    name: 'Amanda Taylor',
    image: 'stall-test-3',
    quote: 'The products exceeded my expectations. Will definitely shop here again.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section id="testimonials" className="bg-light-bg py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-black uppercase tracking-wide text-heading">Testimonials</h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" />
        <div className="relative mt-12">
          <p className="text-4xl text-brand/30">&ldquo;</p>
          <p className="mt-2 text-lg italic text-body">"{t.quote}"</p>
          <img
            src={`https://picsum.photos/seed/${t.image}/100/100`}
            alt={t.name}
            className="mx-auto mt-6 h-16 w-16 rounded-full object-cover"
            width={64}
            height={64}
          />
          <p className="mt-3 font-bold text-heading">{t.name}</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border border-gray-300 p-2 text-gray-500 transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-gray-300 p-2 text-gray-500 transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
