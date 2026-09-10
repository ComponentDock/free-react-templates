import { Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  'Veloce Garage completely transformed my car. The engine overhaul was done perfectly and they finished ahead of schedule. Highly recommend their services!',
  "Outstanding customer service and fair pricing. They diagnosed a complex electrical issue that two other shops couldn't figure out. Will be coming back.",
  'The upgrade package they installed made my car feel brand new. Professional team, clean workshop, and transparent billing throughout the entire process.',
] as const

export function Testimonial() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="bg-dark-bg py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Quote className="mx-auto mb-6 h-10 w-10 text-primary-400" aria-hidden="true" />
        <p className="text-lg leading-relaxed text-white/90">"{testimonials[current]}"</p>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-colors ${
                idx === current ? 'w-8 bg-primary-400' : 'w-2.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
