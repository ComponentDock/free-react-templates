import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/** Testimonial carousel (reference `.site-section.block-13.overlay.bg-image`):
 *  a fixed photo background with a dark overlay, a white heading, and a
 *  carousel of white quote cards (Georgia italic serif) with round avatars. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const goTo = (next: number) => setIndex((next + total) % total)

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative bg-cover bg-fixed bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/equity-testi-bg/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-[rgba(52,58,64,0.4)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-4xl font-bold text-white">Testimonial</h2>

        <div className="mt-12 bg-white p-10">
          <blockquote className="font-serif text-lg italic leading-relaxed text-[#25262a]">
            &ldquo;{testimonials[index]!.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={testimonials[index]!.image}
              alt={testimonials[index]!.name}
              className="h-[60px] w-[60px] rounded-full object-cover"
              loading="lazy"
            />
            <p className="font-heading text-lg font-bold text-[#25262a]">
              {testimonials[index]!.name}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
        >
          <ChevronLeft className="h-10 w-10" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
        >
          <ChevronRight className="h-10 w-10" aria-hidden="true" />
        </button>

        <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
          {testimonials.map((_, dot) => (
            <span
              key={dot}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                dot === index ? 'bg-primary-600' : 'bg-[#ccc]',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
