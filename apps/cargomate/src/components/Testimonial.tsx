import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { useCarousel } from '../carousel'
import { testimonials } from '../data'

/** Testimonial area (reference `.testimonial-area`): a red #e72727 card
 *  with an italic quote, author avatar + name/role, and prev/next + dot
 *  controls cycling two slides. */
export function Testimonial() {
  const { start, next, prev, goTo } = useCarousel(testimonials.slides.length)
  const slide = testimonials.slides[start]!

  return (
    <section aria-label="Testimonials" className="pt-[100px] pb-24 lg:pt-[150px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-normal tracking-[1px] text-brand uppercase">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-[32px] leading-tight font-bold text-navy uppercase lg:text-[42px]">
            {testimonials.heading}
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="bg-brand px-4 py-[70px] text-center text-white shadow-[0px_40px_91px_-37px_rgba(231,39,39,0.5)]">
            <p className="mx-auto max-w-[458px] text-lg leading-relaxed italic">
              &ldquo;{slide.quote}&rdquo;
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <img
                src={slide.avatar}
                alt={slide.name}
                className="h-[70px] w-[70px] rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="font-heading text-lg font-normal text-white uppercase">
                  {slide.name}
                </h3>
                <p className="text-sm text-white/80">{slide.role}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -left-4 hidden h-11 w-11 -translate-y-1/2 items-center justify-center bg-navy text-white transition-colors hover:bg-brand sm:flex"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute top-1/2 -right-4 hidden h-11 w-11 -translate-y-1/2 items-center justify-center bg-navy text-white transition-colors hover:bg-brand sm:flex"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={start === index}
                className={cn(
                  'h-3 w-3 rounded-full transition-colors',
                  start === index ? 'bg-brand' : 'bg-line hover:bg-brand/60',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
