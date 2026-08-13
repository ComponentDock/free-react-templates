import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { useCarousel } from '../carousel'
import { TESTIMONIALS, TESTIMONIAL_AUTHOR, TESTIMONIAL_BG, TESTIMONIAL_THUMB } from '../data'

/**
 * Testimonials — full-bleed background-image section (source
 * `.testmonial_area.overlay2`) with a client-side carousel of three centered
 * white quotes: a 47px white quote icon, a 22px quote paragraph, and an
 * author row with a small thumb and the name. Prev/next arrows plus dot
 * indicators control the slide; the active dot is gold.
 */
export function Testimonials() {
  const { start, next, prev, goTo } = useCarousel(TESTIMONIALS.length)
  const quote = TESTIMONIALS[start]!

  return (
    <section
      aria-label="Testimonials"
      className="relative isolate overflow-hidden py-32 lg:py-[135px]"
    >
      <img
        src={TESTIMONIAL_BG}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <div key={start} aria-live="polite">
          <Quote className="mx-auto h-[47px] w-[47px] text-paper" aria-hidden="true" />
          <blockquote className="mt-8 mb-11 text-xl leading-[34px] font-normal text-paper lg:text-[22px]">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <img
              src={TESTIMONIAL_THUMB}
              alt={TESTIMONIAL_AUTHOR}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-base text-paper">- {TESTIMONIAL_AUTHOR}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute top-1/2 left-0 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/40 text-paper transition-colors hover:bg-brand hover:border-brand sm:flex"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="absolute top-1/2 right-0 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/40 text-paper transition-colors hover:bg-brand hover:border-brand sm:flex"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="mt-8 flex justify-center gap-3">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={start === index}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                start === index ? 'bg-brand' : 'bg-paper/40 hover:bg-paper/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
