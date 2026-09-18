import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Brook presents your services with flexible, convenient and compact layouts. You can select your favorite layouts and elements for customization with unlimited possibilities.',
    name: 'Robart Brown',
    role: 'Creative Designer',
  },
  {
    quote:
      'Pixel-perfect representation of the designers intended representation presents your services with flexible, convenient and compact layouts.',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]!

  return (
    <section className="bg-navy-dark py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Quote className="mx-auto mb-6 h-10 w-10 text-brand" aria-hidden="true" />
        <p className="mb-8 text-lg leading-relaxed text-white/90 italic">&ldquo;{t.quote}&rdquo;</p>
        <div className="flex items-center justify-center gap-4">
          <img
            src={`https://picsum.photos/seed/advisory-testi-${current}/60/60`}
            alt={t.name}
            className="h-12 w-12 rounded-full object-cover"
            loading="lazy"
          />
          <div className="text-left">
            <p className="font-bold text-white">{t.name}</p>
            <p className="text-sm text-white/70">{t.role}</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            type="button"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-3 w-3 rounded-full transition-colors ${i === current ? 'bg-brand' : 'bg-white/30'}`}
                type="button"
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            type="button"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
