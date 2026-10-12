import { useEffect, useState, type KeyboardEvent } from 'react'
import { cn } from '@free-react-templates/ui'

interface Testimonial {
  id: string
  portrait: string
  quote: string
  name: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'marsh',
    portrait: 'https://picsum.photos/seed/presto-testimonial-1/120/120',
    quote:
      'We moved eleven client sites over a single weekend and nothing broke. When one certificate renewal needed a hand, an engineer picked up the phone at eleven on a Sunday night.',
    name: 'Devon Marsh',
    role: 'Creative director, Studio Kite',
  },
  {
    id: 'lindqvist',
    portrait: 'https://picsum.photos/seed/presto-testimonial-2/120/120',
    quote:
      'Page loads dropped by nearly half after the switch, and the staging copies mean our designers can ship without ever touching production.',
    name: 'Aria Lindqvist',
    role: 'Founder, Northfern',
  },
]

/** How long each testimonial is held before the slider advances. */
const AUTOPLAY_MS = 6000

/** True when the visitor asked their system for less motion. */
function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * The dark testimonial band: a white title and blurb beside a two-slide slider
 * with portraits, quotes and labelled dot indicators. Dots and arrow keys move
 * between slides; autoplay pauses on hover and focus and stays off entirely when
 * the visitor prefers reduced motion.
 */
export function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const current = TESTIMONIALS[active]!

  useEffect(() => {
    if (paused || prefersReducedMotion()) {
      return
    }
    const timer = setInterval(() => {
      setActive((index) => (index + 1) % TESTIMONIALS.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused])

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      setActive((index) => (index + 1) % TESTIMONIALS.length)
    } else if (event.key === 'ArrowLeft') {
      setActive((index) => (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    }
  }

  return (
    <section
      id="testimonials"
      aria-label="Customer stories"
      className="bg-gradient-to-b from-violet-deep to-violet pt-[190px] pb-[90px]"
    >
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="grid gap-14 lg:grid-cols-[4fr_6fr] lg:items-center">
          <div>
            <h2 className="font-heading text-[31px] leading-[1.3] font-semibold text-white md:text-[35px]">
              Stories from our customers
            </h2>
            <p className="mt-4 text-base text-white/60">
              Teams of every size run on Presto — from a single portfolio to a storefront serving
              thousands of orders a day.
            </p>
          </div>

          <div
            role="group"
            aria-label="Testimonials slider"
            tabIndex={-1}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="rounded-lg"
          >
            <figure data-testid="testimonial-slide">
              <blockquote className="text-xl leading-[1.7] text-white">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={current.portrait}
                  alt=""
                  width={120}
                  height={120}
                  loading="lazy"
                  className="h-[70px] w-[70px] rounded-full object-cover"
                />
                <span>
                  <span className="font-heading block text-[21px] font-medium text-white">
                    {current.name}
                  </span>
                  <span className="block text-sm text-white/60">{current.role}</span>
                </span>
              </figcaption>
            </figure>

            <ul className="mt-10 flex items-center gap-3">
              {TESTIMONIALS.map((item, index) => (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-label={`Show testimonial ${index + 1}: ${item.name}`}
                    aria-current={index === active ? 'true' : undefined}
                    onClick={() => setActive(index)}
                    className={cn(
                      'h-2.5 w-2.5 rounded-full transition-colors',
                      index === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
