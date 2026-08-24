import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  text: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    text: "Havenridge made the entire home buying process seamless. Their agents were knowledgeable, responsive, and truly cared about finding us the perfect home. We couldn't be happier!",
    name: 'Robert Anderson',
    role: 'Homeowner',
    avatar: 'https://picsum.photos/seed/havenridge-testimonial-1/80/80',
  },
  {
    text: 'As a first-time buyer, I was nervous about the process. The Havenridge team guided me through every step and helped me find a property that perfectly fits my budget and lifestyle.',
    name: 'Jennifer Martinez',
    role: 'First-time Buyer',
    avatar: 'https://picsum.photos/seed/havenridge-testimonial-2/80/80',
  },
  {
    text: 'I sold my commercial property with Havenridge and was impressed by their professionalism and market expertise. They got me a price above my expectations in record time.',
    name: 'David Chen',
    role: 'Property Investor',
    avatar: 'https://picsum.photos/seed/havenridge-testimonial-3/80/80',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-500">
            Testimonials
          </p>
          <h2 className="text-3xl font-extrabold text-ink">Clients We Help</h2>
        </div>

        <div className="relative rounded-lg bg-white p-8 shadow-sm sm:p-12">
          <Quote className="mb-4 h-8 w-8 text-primary-500" aria-hidden="true" />
          <p className="mb-6 text-lg leading-relaxed text-smoke">{t.text}</p>

          <div className="flex items-center gap-4">
            <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-bold text-ink">{t.name}</p>
              <p className="text-sm text-smoke">{t.role}</p>
            </div>
          </div>

          <div className="absolute right-4 top-4 flex gap-2 sm:right-8 sm:top-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-smoke transition-colors hover:border-primary-500 hover:text-primary-500"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-smoke transition-colors hover:border-primary-500 hover:text-primary-500"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
