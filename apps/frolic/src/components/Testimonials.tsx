import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

const statColors: Record<string, string> = {
  lagoon: 'text-lagoon',
  sunflower: 'text-sunflower',
  leaf: 'text-leaf',
  cherry: 'text-cherry',
}

/** Testimonials section (reference `.site-section.bg-light`): centered
 *  heading, a coral panel with three cyclable slides (photo, name, role,
 *  quote), and a four-column colored stats row below. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.slides.length
  const slide = testimonials.slides[index]!

  const goTo = (next: number) => setIndex((next + total) % total)

  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-mist py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <p className="text-center font-cursive text-2xl text-coral">{testimonials.eyebrow}</p>
        <h2 className="mt-3 text-center text-4xl font-bold text-black">{testimonials.heading}</h2>

        <div className="relative mt-12 bg-coral p-[30px]">
          <div className="text-center">
            <img
              src={slide.image}
              alt={slide.name}
              className="mx-auto h-20 w-20 object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 text-xl font-bold text-white">{slide.name}</h3>
            <p className="mt-1 text-base text-white/50">{slide.role}</p>
            <blockquote className="mt-4 text-xl text-white">&ldquo;{slide.quote}&rdquo;</blockquote>
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -left-4 hidden -translate-y-1/2 text-coral transition-colors hover:opacity-80 sm:block"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="absolute top-1/2 -right-4 hidden -translate-y-1/2 text-coral transition-colors hover:opacity-80 sm:block"
          >
            <ChevronRight className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {testimonials.stats.map(({ value, label, color }) => (
            <li key={label}>
              <p className={cn('text-3xl font-bold', statColors[color])}>{value}</p>
              <p className="mt-2 text-sm text-ink">{label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
