import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonial() {
  const [active, setActive] = useState(0)
  const item = testimonials[active]!

  const goNext = () => setActive((i) => (i + 1) % testimonials.length)
  const goPrev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section aria-label="Testimonials" className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-[40px] font-light">Testimonial</h2>

        <div className="relative mt-12 px-12">
          <blockquote className="mx-auto max-w-2xl">
            <p className="text-xl leading-relaxed text-white/90">{item.quote}</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="size-16 rounded-full object-cover"
              />
              <span className="text-left">
                <span className="block font-display text-[26px] text-white">{item.name}</span>
                <span className="mt-1 block text-sm text-white/70">{item.role}</span>
              </span>
            </div>
          </blockquote>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="absolute left-0 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="absolute right-0 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => setActive(i)}
              className={cn(
                'size-3 rounded-full transition-colors',
                i === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
