import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  name: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    image: 'locate-person-1',
    quote:
      'This platform completely changed how I explore my city. I discovered amazing restaurants and hidden gems I never knew existed.',
  },
  {
    name: 'James Cooper',
    image: 'locate-person-2',
    quote:
      'As a traveler, this is my go-to app for finding local experiences. The reviews are honest and the recommendations are spot on.',
  },
  {
    name: 'Emily Rodriguez',
    image: 'locate-person-3',
    quote:
      'I listed my small business here and saw a noticeable increase in foot traffic. The platform is easy to use and very effective.',
  },
  {
    name: 'David Kim',
    image: 'locate-person-4',
    quote:
      'Clean interface, great search functionality, and reliable information. This is exactly what the local discovery space needed.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current] as Testimonial

  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-10 text-3xl font-light text-primary-500">Satisfied Customers</h2>
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="px-12">
            <img
              src={`https://picsum.photos/seed/${t.image}/100/100`}
              alt={t.name}
              className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
            />
            <p className="mb-2 font-semibold text-gray-800">{t.name}</p>
            <blockquote className="text-sm italic text-gray-500">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === current ? 'bg-primary-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
