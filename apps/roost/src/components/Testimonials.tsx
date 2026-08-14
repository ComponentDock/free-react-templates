import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

const AUTOPLAY_MS = 3000

/* Testimonials (source: div.site-section.bg-primary — brand-green section
   with an owl carousel of three testimonials: avatar, quote, 20px white
   name, uppercase meta at 30% opacity; autoplay + dots). */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [count])

  const slide = TESTIMONIALS[index]!

  return (
    <section className="bg-brand py-16 md:py-20">
      <div className="mx-auto max-w-[760px] px-[15px] text-center">
        <figure className="flex items-start gap-4 text-left">
          <img
            src={`https://picsum.photos/seed/${slide.seed}/120/120`}
            alt={`Portrait of ${slide.name}`}
            loading="lazy"
            className="h-16 w-16 shrink-0 rounded-full object-cover"
          />
          <div>
            <blockquote className="text-[15px] leading-relaxed text-white/90">
              &ldquo;{slide.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4">
              <h3 className="text-[20px] font-semibold text-white">{slide.name}</h3>
              <span className="mt-1 block text-[13px] uppercase tracking-wide text-white/30">
                {slide.meta}
              </span>
            </figcaption>
          </div>
        </figure>

        <div className="mt-10 flex justify-center gap-2">
          {TESTIMONIALS.map((item, dotIndex) => (
            <button
              key={item.seed}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Go to testimonial slide ${dotIndex + 1}`}
              aria-current={index === dotIndex}
              className={cn(
                'h-2.5 rounded-full transition-all',
                index === dotIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
