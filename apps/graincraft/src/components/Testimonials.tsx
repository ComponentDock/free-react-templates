import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Graincraft built our entire kitchen remodel from scratch. The craftsmanship is incredible — every joint, every surface is perfect.',
    name: 'Michael Torres',
    role: 'Homeowner',
    seed: 'graincraft-testimonial-1',
  },
  {
    quote:
      'We contracted them for our office buildout and the custom millwork exceeded our expectations. Professional from start to finish.',
    name: 'Sarah Mitchell',
    role: 'Office Manager',
    seed: 'graincraft-testimonial-2',
  },
  {
    quote:
      'The attention to detail in the crown molding and trim work throughout our home is remarkable. Highly recommended.',
    name: 'David Chen',
    role: 'Interior Designer',
    seed: 'graincraft-testimonial-3',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 text-center">
          <Quote className="mx-auto h-10 w-10 text-brand/30" aria-hidden="true" />
          <blockquote className="mt-6 text-lg leading-relaxed text-mist dark:text-gray-400">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={`https://picsum.photos/seed/${t.seed}/80/80`}
              alt={t.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-brand"
            />
            <div className="text-left">
              <p className="font-bold text-ink dark:text-white">{t.name}</p>
              <p className="text-sm text-mist dark:text-gray-400">{t.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white dark:hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-3 w-3 rounded-full transition-colors ${
                  i === current ? 'bg-brand' : 'bg-ink/20 dark:bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white dark:hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
