import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { useCarousel } from '../carousel'
import { testimonials } from '../data'

/** Testimonials carousel (reference `#testimonials-section`): a centered
 *  four-slide quote carousel with round avatars, 1.5rem italic quotes and
 *  bold names, round prev/next arrows and dot pagination (active dot teal).
 *  Implemented with client-side state — no external carousel dependency. */
export function Testimonials() {
  const { index, next, prev, goTo } = useCarousel(testimonials.slides.length)
  const slide = testimonials.slides[index]!

  return (
    <section
      id="testimonials-section"
      aria-label="Testimonials"
      className="bg-paper py-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-[30px] font-black text-ink lg:text-[40px]">
          {testimonials.heading}
        </h2>

        <div className="relative mx-auto mt-12 max-w-[800px] text-center">
          <figure className="mb-4 flex justify-center">
            <img
              src={slide.avatar}
              alt={slide.name}
              className="h-[100px] w-[100px] max-w-[100px] rounded-full object-cover shadow"
              loading="lazy"
            />
          </figure>
          <blockquote className="text-2xl text-ink italic">&ldquo;{slide.quote}&rdquo;</blockquote>
          <p className="mt-4 font-bold text-ink">{slide.name}</p>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 left-0 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-paper transition-colors hover:bg-ink"
          >
            <ChevronLeft className="h-[25px] w-[25px]" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute top-1/2 right-0 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-paper transition-colors hover:bg-ink"
          >
            <ChevronRight className="h-[25px] w-[25px]" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.slides.map((slideItem, slideIndex) => (
            <button
              key={slideItem.name}
              type="button"
              onClick={() => goTo(slideIndex)}
              aria-label={`Go to testimonial ${slideIndex + 1}`}
              aria-current={slideIndex === index ? 'true' : undefined}
              className={cn(
                'h-[10px] w-[10px] rounded-full bg-[#dee2e6] transition-colors',
                slideIndex === index && 'bg-brand',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
