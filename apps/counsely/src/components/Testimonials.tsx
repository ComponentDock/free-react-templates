import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

/** Client-side testimonials carousel: one translucent quote card at a time
 *  with prev/next controls and dot indicators. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.slides.length

  const next = () => setIndex((current) => (current + 1) % count)
  const prev = () => setIndex((current) => (current - 1 + count) % count)

  const active = testimonials.slides[index]!

  return (
    <section aria-label="Testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-brand">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-bold text-ink">{testimonials.headline}</h2>
        </div>

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Happy clients carousel"
        >
          <figure className="rounded border border-black/[0.02] bg-white/10 px-5 py-8 text-center shadow-[0_5px_21px_-14px_rgba(0,0,0,0.14)]">
            <blockquote className="text-base italic leading-relaxed text-slate-body">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-3">
              <img src={active.photo} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold text-ink">{active.name}</p>
                <span className="text-sm font-medium text-brand">{active.position}</span>
              </div>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 sm:-left-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 sm:-right-12"
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
