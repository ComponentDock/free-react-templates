import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/* Testimonials (source: div.testimonial_area.testimonial_bg_1.overlay —
   image background with a 50% black overlay, centered quote carousel with
   prev/next). Recreated as a two-slide accessible carousel. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const slide = TESTIMONIALS[index]!

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#6a4cff_0%,#7c32ff_100%)] py-[120px]">
      {/* Overlay band approximating the source background image + overlay. */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-[760px] px-[15px] text-center">
        <p className="font-serif text-[20px] leading-8 text-white">&ldquo;{slide.quote}&rdquo;</p>
        <p className="mt-8 text-[16px] text-white/90">{slide.author}</p>
        <img
          src={slide.image}
          alt=""
          loading="lazy"
          className="mx-auto mt-6 h-20 w-20 rounded-full border-4 border-white/30 object-cover"
        />
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            disabled={index === 0}
            onClick={() => setIndex((current) => current - 1)}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors',
              index === 0 ? 'cursor-not-allowed opacity-40' : 'hover:bg-white/20',
            )}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            disabled={index === TESTIMONIALS.length - 1}
            onClick={() => setIndex((current) => current + 1)}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors',
              index === TESTIMONIALS.length - 1
                ? 'cursor-not-allowed opacity-40'
                : 'hover:bg-white/20',
            )}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
