import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'
import { prefersReducedMotion } from '../lib/motion'

/** How long one quote holds the band before the next one takes it. */
export const SLIDE_INTERVAL_MS = 2000

/**
 * Cream testimonial band: one quote at a time above a thumbnail rail, advanced on an interval that
 * stops on hover, on focus and entirely for a visitor who asks for reduced motion.
 */
export function Testimonials() {
  const reduce = prefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || reduce) {
      return
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, SLIDE_INTERVAL_MS)

    return () => {
      window.clearInterval(id)
    }
  }, [paused, reduce])

  const quote = testimonials[index]!

  const go = (delta: number) => {
    setIndex((current) => (current + delta + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="relative bg-cream px-4 py-[70px] md:py-[80px] xl:py-[130px]"
      onMouseEnter={() => {
        setPaused(true)
      }}
      onMouseLeave={() => {
        setPaused(false)
      }}
      onFocus={() => {
        setPaused(true)
      }}
      onBlur={() => {
        setPaused(false)
      }}
    >
      <div className="mx-auto max-w-[860px] text-center">
        <Quote aria-hidden="true" className="mx-auto h-[100px] w-[115px] text-gold-soft/20" />

        <div role="group" aria-roledescription="carousel" aria-label="Client testimonials">
          <p className="mt-[95px] mb-[30px] text-[18px] leading-[1.8] text-muted italic">
            {quote.quote}
          </p>
          <h3 className="mt-[50px] text-[22px] font-medium text-ink">{quote.name}</h3>
          <p className="text-[14px] text-muted">{quote.role}</p>
        </div>

        <div className="mt-[30px] flex items-center justify-center gap-[15px]">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => {
              go(-1)
            }}
            className="hidden size-[55px] items-center justify-center border-[5px] border-hairline text-hairline transition-colors hover:border-gold hover:text-gold md:flex"
          >
            <ChevronLeft aria-hidden="true" className="size-6" />
          </button>

          <ul className="flex items-center gap-[10px]">
            {testimonials.map((item, position) => (
              <li key={item.name}>
                <button
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-pressed={position === index}
                  onClick={() => {
                    setIndex(position)
                  }}
                  className={cn(
                    'block size-[55px] overflow-hidden border-2 transition-colors',
                    position === index ? 'border-gold' : 'border-transparent',
                  )}
                >
                  <img
                    src={item.avatar}
                    alt=""
                    width={110}
                    height={110}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => {
              go(1)
            }}
            className="hidden size-[55px] items-center justify-center border-[5px] border-hairline text-hairline transition-colors hover:border-gold hover:text-gold md:flex"
          >
            <ChevronRight aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
