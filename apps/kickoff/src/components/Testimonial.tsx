import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCarousel } from '../carousel'
import { testimonials } from '../data'

/** Testimonial section (reference `.testimony-section`): dark background
 *  image with the uppercase subheading, white heading, and a quote carousel
 *  (avatar, name, role, quote) with prev/next controls. */
export function Testimonial() {
  const { start, next, prev } = useCarousel(testimonials.slides.length)
  const slide = testimonials.slides[start]!

  return (
    <section aria-label="Testimonials" className="relative py-24">
      <img
        src={testimonials.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <p className="text-sm tracking-wider text-white/90 uppercase">{testimonials.subheading}</p>
        <h2 className="mt-2 text-4xl font-black text-white">{testimonials.heading}</h2>

        <div className="relative mt-12">
          <blockquote className="text-lg leading-relaxed text-white/90 italic">
            &ldquo;{slide.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={slide.avatar}
              alt={slide.name}
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <h3 className="text-lg font-bold text-white">{slide.name}</h3>
              <p className="text-sm text-white/70">{slide.role}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -left-4 hidden -translate-y-1/2 text-white/70 transition-colors hover:text-gold sm:block"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute top-1/2 -right-4 hidden -translate-y-1/2 text-white/70 transition-colors hover:text-gold sm:block"
          >
            <ChevronRight className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
