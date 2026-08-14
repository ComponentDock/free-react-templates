import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/* Testimonial carousel: one slide at a time with prev/next arrows and
   dot indicators for the five client quotes. */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const current = TESTIMONIALS[index]!

  const next = () => setIndex((prev) => (prev + 1) % total)
  const prev = () => setIndex((prev) => (prev - 1 + total) % total)

  return (
    <section id="testimonial" className="bg-panel/40 px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-brand uppercase">
          Testimony
        </p>
        <h2 className="text-base font-bold tracking-[0.2em] text-muted uppercase">
          Our satisfied customer says
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/90">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in
        </p>
        <article className="mx-auto mt-12 max-w-xl">
          <img
            src={current.avatar}
            alt=""
            className="mx-auto mb-6 h-20 w-20 rounded-full border-2 border-brand object-cover"
          />
          <p className="font-serif text-lg italic leading-relaxed text-white/90">
            &ldquo;{current.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm font-bold text-white">{current.name}</p>
          <p className="mt-1 text-xs text-brand">{current.role}</p>
        </article>
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand hover:text-brand"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((testimonial, dotIndex) => (
              <button
                key={`${testimonial.role}-${dotIndex}`}
                type="button"
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  'h-2 w-2 rounded-full border border-white/50 transition',
                  dotIndex === index ? 'bg-brand' : 'bg-transparent',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand hover:text-brand"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
