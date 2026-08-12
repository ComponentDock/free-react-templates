import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { AVATAR_SEEDS, TESTIMONIALS, TESTIMONIALS_TITLE } from '../data'

const STARS = [1, 2, 3, 4, 5] as const

/**
 * Testimonials — quote slider (source `div.h1-testimonial-active` + avatar
 * thumbnails `div.single-man-slider`): two quote slides with five-star
 * ratings and attributions, prev/next arrows, and four clickable avatar
 * thumbnails that switch slides.
 */
export function Testimonials() {
  const [active, setActive] = useState(0)
  const testimonial = TESTIMONIALS[active]!

  const goTo = (index: number) => setActive((index + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="bg-lilac py-24" aria-label="Testimonials">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
            {TESTIMONIALS_TITLE}
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl bg-white p-10 text-center shadow-sm">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(active - 1)}
            className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line text-ink transition-colors hover:bg-brand hover:border-brand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(active + 1)}
            className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line text-ink transition-colors hover:bg-brand hover:border-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center justify-center gap-1" aria-label="5 out of 5 stars">
            {STARS.map((star) => (
              <Star key={star} className="h-5 w-5 fill-brand text-brand" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-6 text-lg leading-relaxed text-body">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-bold uppercase tracking-wide text-ink">
            - {testimonial.author}, {testimonial.role}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          {AVATAR_SEEDS.map((seed, index) => (
            <button
              key={seed}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index % TESTIMONIALS.length === active ? 'true' : undefined}
              onClick={() => goTo(index)}
              className={cn(
                'rounded-full transition-all',
                index % TESTIMONIALS.length === active
                  ? 'ring-4 ring-brand/40'
                  : 'opacity-60 hover:opacity-100',
              )}
            >
              <img
                src={`https://picsum.photos/seed/${seed}/64/64`}
                alt=""
                aria-hidden="true"
                className="h-16 w-16 rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
