import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../content'
import { useReducedMotion } from '../lib/motion'
import { SectionHead } from './SectionHead'

const AUTOPLAY_MS = 5000

function slotsFor(width: number): number {
  if (width >= 1024) {
    return 3
  }
  return width >= 640 ? 2 : 1
}

/** Card slots per view, re-read on resize (3 / 2 / 1). */
function useSlots(): number {
  const [slots, setSlots] = useState(() => slotsFor(window.innerWidth))

  useEffect(() => {
    const onResize = () => setSlots(slotsFor(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return slots
}

/**
 * Three quotes in a carousel. At `lg` all three are visible, so there is no
 * second position and the arrows are not rendered at all; below that the track
 * advances one card at a time, five seconds apart, and pauses on hover.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()
  const slots = useSlots()
  const maxIndex = Math.max(0, TESTIMONIALS.length - slots)
  const position = Math.min(index, maxIndex)

  useEffect(() => {
    if (maxIndex === 0 || paused || reduced) {
      return
    }
    const timer = setInterval(() => {
      setIndex(position >= maxIndex ? 0 : position + 1)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [maxIndex, paused, reduced, position])

  return (
    <section
      id="testimonials"
      aria-label="Why people moved"
      className="overflow-hidden bg-gray-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          pill="Why people moved"
          title="Smaller turned out to be the feature"
          lede="Nobody asks for a smaller social network until they have used one."
        />

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ul
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${position * (100 / slots)}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <li
                key={testimonial.name}
                className="flex flex-none px-3"
                style={{ flexBasis: `${100 / slots}%` }}
              >
                <figure className="flex w-full flex-col rounded-2xl bg-white p-8 shadow-soft">
                  <div role="img" aria-label="Rated 5 out of 5" className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        aria-hidden="true"
                        className="h-4 w-4 fill-primary-400 text-primary-400"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-600"
                    >
                      {testimonial.initial}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-gray-900">
                        {testimonial.name}
                      </span>
                      <span className="block text-xs text-gray-500">{testimonial.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          {maxIndex > 0 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setIndex((value) => (value <= 0 ? maxIndex : value - 1))}
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 sm:flex"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }, (_, dot) => (
                  <button
                    key={dot}
                    type="button"
                    aria-label={`Go to slide ${dot + 1}`}
                    aria-current={dot === position ? 'true' : undefined}
                    onClick={() => setIndex(dot)}
                    className={cn(
                      'h-2.5 rounded-full transition-all',
                      dot === position ? 'w-8 bg-primary-600' : 'w-2.5 bg-gray-300',
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setIndex((value) => (value >= maxIndex ? 0 : value + 1))}
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 sm:flex"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
