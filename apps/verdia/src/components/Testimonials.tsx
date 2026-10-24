import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Fannie Rowe',
    role: 'Patient',
    text: 'The care I received was exceptional. The staff was attentive and the facilities are world-class.',
  },
  {
    name: 'Mark Wilson',
    role: 'Patient',
    text: 'A wonderful experience from start to finish. Highly recommend their services to everyone.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    text: 'Professional and compassionate care that truly made a difference in my recovery.',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length)
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const current = TESTIMONIALS[active]!

  return (
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold">Enjoy our Client&apos;s Feedback</h2>
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <Quote className="mx-auto h-8 w-8 text-brand" />
          <p className="mt-4 text-lg text-white/80">{current.text}</p>
          <h4 className="mt-4 text-lg font-bold">{current.name}</h4>
          <p className="text-sm text-white/60">{current.role}</p>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full ${i === active ? 'bg-brand' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
