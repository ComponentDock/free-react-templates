import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () =>
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((current) => (current + 1) % testimonials.length)

  return (
    <section
      aria-label="Our satisfied customer says"
      className="bg-[linear-gradient(45deg,#56c8fb,#627bed)] py-24"
    >
      <div className="mx-auto max-w-[800px] px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Our satisfied customer says</h2>

        <div
          className="relative mt-14 min-h-[180px]"
          role="group"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.role}
              aria-hidden={active !== index}
              className={cn(
                'transition-opacity duration-500',
                active === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
              )}
            >
              <p className="text-lg font-light leading-relaxed text-white">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-8">
                <p className="text-base font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm font-light text-white/90">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
