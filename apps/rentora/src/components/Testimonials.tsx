import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials (source: div.review_part — "Our Happy Customer Says About
   us" with an owl-carousel of four quote slides; recreated as a prev/next
   slider). */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const slide = TESTIMONIALS.slides[index]!

  const prev = () => setIndex((i) => (i === 0 ? TESTIMONIALS.slides.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === TESTIMONIALS.slides.length - 1 ? 0 : i + 1))

  return (
    <section aria-label="Testimonials" className="bg-soft py-[130px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <h2 className="relative mb-16 pb-4 text-center text-[40px] font-bold leading-[1.25] text-ink">
          {TESTIMONIALS.heading}
          <span
            className="absolute bottom-0 left-1/2 h-[2px] w-[90px] -translate-x-1/2 bg-brand"
            aria-hidden="true"
          />
        </h2>

        <div className="relative mx-auto max-w-[820px] bg-white px-10 py-12 text-center shadow-[1px_15px_30px_rgba(20,48,58,0.1)]">
          <blockquote>
            <p className="text-[17px] italic leading-relaxed text-ink">“{slide.quote}”</p>
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={`https://picsum.photos/seed/${slide.seed}/80/80`}
              alt={`Portrait of ${slide.name}`}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-[16px] font-semibold text-ink">{slide.name}</p>
              <p className="text-[13px] text-muted">{slide.role}</p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-brand"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-brand"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
