import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Robert Johnson',
    quote:
      'Absolutely love working with BizPlanner. Their team delivered beyond expectations and the quality was outstanding.',
    image: 'https://picsum.photos/seed/bizplanner-client-1/100/100',
  },
  {
    name: 'Amanda Peterson',
    quote:
      'Professional, creative, and responsive. BizPlanner helped transform our online presence completely.',
    image: 'https://picsum.photos/seed/bizplanner-client-2/100/100',
  },
  {
    name: 'Thomas Williams',
    quote:
      'The best investment we made for our business. Highly recommend BizPlanner to anyone looking for quality.',
    image: 'https://picsum.photos/seed/bizplanner-client-3/100/100',
  },
]

export function Clients() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const goTo = (index: number) => setCurrent(index)

  const t = testimonials[current]!

  return (
    <section id="our-client" className="bg-charcoal py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold uppercase tracking-wide">Our Happy Clients</h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 p-2 text-white/70 hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="mx-12 flex flex-col items-center">
            <img
              src={t.image}
              alt={t.name}
              className="mb-4 h-16 w-16 rounded-full border-2 border-primary-500 object-cover"
            />
            <Quote className="mb-4 text-primary-500" size={24} />
            <p className="mb-4 text-base italic leading-relaxed text-gray-300">"{t.quote}"</p>
            <p className="text-sm font-bold uppercase">{t.name}</p>
          </div>
          <button
            onClick={next}
            className="absolute right-0 p-2 text-white/70 hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full ${i === current ? 'bg-primary-500' : 'bg-white/40'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
