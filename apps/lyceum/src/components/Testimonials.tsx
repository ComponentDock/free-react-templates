import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import {
  nextSlideLabel,
  prevSlideLabel,
  slideIndicatorLabel,
  starsPerSlide,
  testimonials,
  testimonialsLabel,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function Testimonials() {
  const [active, setActive] = useState(0)
  const slide = testimonials[active]!

  return (
    <section aria-label={testimonialsLabel} className="py-[120px]">
      <div className="mx-auto max-w-[945px] px-4 sm:px-8">
        <div className="relative border border-border-soft px-6 pb-16 pt-[50px] text-center sm:px-12">
          <img
            src={`https://picsum.photos/seed/${slide.seed}/80/80`}
            alt=""
            className="mx-auto -mt-[100px] h-20 w-20 rounded-full object-cover"
          />
          <h2 className="mt-5 text-lg text-ink">{slide.name}</h2>
          <p className="mt-1 text-sm text-muted">{slide.role}</p>
          <div className="mt-5 flex items-center justify-center gap-1 text-star">
            {Array.from({ length: starsPerSlide }, (_, index) => (
              <Star key={index} aria-hidden="true" className="h-[14px] w-[14px] fill-current" />
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-[760px] text-sm leading-6 text-ink">{slide.quote}</p>

          <button
            type="button"
            aria-label={prevSlideLabel}
            onClick={() =>
              setActive((current) => (current - 1 + testimonials.length) % testimonials.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border-soft p-2 text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={nextSlideLabel}
            onClick={() => setActive((current) => (current + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border-soft p-2 text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={slideIndicatorLabel(index)}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => setActive(index)}
                className={cn(
                  'h-2 w-2 rounded-full transition-colors',
                  index === active ? 'bg-brand' : 'bg-border-soft',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
