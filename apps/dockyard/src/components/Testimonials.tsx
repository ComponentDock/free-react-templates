import { useEffect, useState } from 'react'
import { testimonials } from '../data'
import { prefersReducedMotion } from '../lib/motion'
import { cn } from '@free-react-templates/ui'

const VISIBLE = 3

/**
 * Four quotes in a three-up rail: the window advances one card per dot (the reference cloned its
 * slides to loop, this renders the window instead), autoplay pauses on hover or focus and stops
 * entirely when the visitor asked for reduced motion. The rail also answers the arrow keys.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reducedMotion = prefersReducedMotion()

  const windowed = Array.from(
    { length: VISIBLE },
    (_, offset) => testimonials[(index + offset) % testimonials.length]!,
  )

  useEffect(() => {
    if (reducedMotion || paused) {
      return
    }
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => {
      clearInterval(timer)
    }
  }, [paused, reducedMotion])

  const advance = (step: number) => {
    setIndex((current) => (current + step + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" aria-label="Happy clients" className="bg-surface py-[5em]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[5em] max-w-[66%] text-center">
          <h2 className="text-[32px] font-medium text-brand normal-case lg:text-[48px]">
            Happy Clients
          </h2>
          <p className="mt-4 text-[16px] text-body">
            Four shippers on what happens when a booking does — or does not — go to plan.
          </p>
        </div>

        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => {
            setPaused(true)
          }}
          onMouseLeave={() => {
            setPaused(false)
          }}
          onFocusCapture={() => {
            setPaused(true)
          }}
          onBlurCapture={() => {
            setPaused(false)
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') {
              advance(1)
            }
            if (event.key === 'ArrowLeft') {
              advance(-1)
            }
          }}
        >
          <ul className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {windowed.map((person, position) => (
              <li
                key={person.name}
                className={cn(
                  'bg-white p-[30px]',
                  position === 1 && 'max-sm:hidden',
                  position === 2 && 'max-md:hidden',
                )}
              >
                <blockquote className="font-quote text-[18px] leading-[1.6] text-ink italic">
                  “{person.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={person.portrait}
                    alt={person.name}
                    width={120}
                    height={120}
                    loading="lazy"
                    className="size-[60px] rounded-full object-cover"
                  />
                  <h3 className="text-[18px] font-medium text-ink uppercase">{person.name}</h3>
                </div>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((person, dot) => (
              <li key={`dot-${person.name}`}>
                <button
                  type="button"
                  aria-label={`Show testimonial ${dot + 1}`}
                  aria-current={dot === index ? 'true' : undefined}
                  onClick={() => {
                    setIndex(dot)
                  }}
                  className={cn(
                    'size-[7px] rounded-full transition-colors',
                    dot === index ? 'bg-brand' : 'bg-price-suffix',
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
