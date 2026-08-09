import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Fanny Spencer',
    quote:
      'I have been a regular for three years and Peter has never let me down — every cut is exactly what I asked for, and the hot-towel shave is pure therapy.',
    thumb: 'https://picsum.photos/seed/tonsor-ts-1/120/120',
  },
  {
    name: 'Marcus Reid',
    quote:
      'The beard sculpting here is an art form. I get compliments everywhere I go, and I send all my friends to Tonsor.',
    thumb: 'https://picsum.photos/seed/tonsor-ts-2/120/120',
  },
  {
    name: 'Sofia Lane',
    quote:
      'Nancy turned a routine appointment into a mini spa day. The executive wash left my hair feeling incredible for weeks.',
    thumb: 'https://picsum.photos/seed/tonsor-ts-3/120/120',
  },
  {
    name: 'Daniel Ortiz',
    quote:
      'Booking is easy, the shop is spotless, and the barbers actually listen. This is how every barbershop should run.',
    thumb: 'https://picsum.photos/seed/tonsor-ts-4/120/120',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  const active = testimonials[index]!

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative bg-cover bg-center py-24 sm:py-28"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/tonsor-testimonials/1920/900)' }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">What Clients Say</h2>

        <figure aria-live="polite" className="mt-10">
          <blockquote className="mx-auto max-w-xl text-sm font-light leading-relaxed text-gray-200">
            “{active.quote}”
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-display text-lg font-semibold text-white">{active.name}</p>
            <div
              className="mt-2 flex items-center justify-center gap-1"
              aria-label="Rated 5 out of 5 stars"
            >
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
              ))}
            </div>
          </figcaption>
        </figure>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((testimonial, i) => {
            const isActive = i === index
            return (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-pressed={isActive}
                className={cn(
                  'h-14 w-14 overflow-hidden rounded-full ring-2 transition-all',
                  isActive
                    ? 'bg-gradient-to-r from-brand to-gold ring-gold/70'
                    : 'ring-white/30 hover:ring-gold/60',
                )}
              >
                <img
                  src={testimonial.thumb}
                  alt=""
                  className="h-full w-full rounded-full object-cover mix-blend-multiply"
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
