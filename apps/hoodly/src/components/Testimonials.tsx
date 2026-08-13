import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

/** Centered testimonial carousel: one slide at a time with avatar, italic
 *  quote, name, and position, plus prev/next controls and dot indicators. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.slides.length

  const next = () => setIndex((current) => (current + 1) % count)
  const prev = () => setIndex((current) => (current - 1 + count) % count)

  const active = testimonials.slides[index]!

  return (
    <section aria-label="Testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials carousel"
        >
          <figure className="px-4 text-center">
            <img
              src={active.photo}
              alt=""
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
            <blockquote className="mx-auto mt-6 max-w-2xl text-xl italic leading-9 text-muted">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-[22px] font-bold text-ink">{active.name}</p>
              <span className="text-base text-muted">{active.position}</span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 sm:-left-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 sm:-right-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.slides.map((slide, dotIndex) => (
            <button
              key={slide.name}
              type="button"
              aria-label={`Go to slide ${dotIndex + 1}`}
              aria-current={dotIndex === index ? 'true' : undefined}
              onClick={() => setIndex(dotIndex)}
              className={
                dotIndex === index
                  ? 'h-2.5 w-6 rounded-full bg-brand transition-all'
                  : 'h-2.5 w-2.5 rounded-full bg-black/20 transition-all hover:bg-brand/50'
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
