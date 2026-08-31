import { useState, useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const SLIDES = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/ravello-1/1920/1148',
    alt: 'Mediterranean coastal town with terracotta roofs and small boats',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/ravello-2/1920/1148',
    alt: 'Woman in white dress on a hanging swing chair by turquoise sea',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/ravello-3/1920/1148',
    alt: 'Woman sitting on a longtail boat bow with limestone karsts',
  },
] as const

const INTERVAL_MS = 5000
const FADE_MS = 1500

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [nextIndex, setNextIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = SLIDES.length

  const goTo = useCallback(
    (index: number) => {
      const target = (index + total) % total
      if (target === current) return
      setNextIndex(target)
      setFading(true)
      setTimeout(() => {
        setCurrent(target)
        setFading(false)
      }, FADE_MS)
    },
    [current, total],
  )

  const next = useCallback(() => goTo(current + 1), [goTo, current])
  const prev = useCallback(() => goTo(current - 1), [goTo, current])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const prefersReduced = mq.matches
    if (prefersReduced || fading) return
    timerRef.current = setInterval(next, INTERVAL_MS)
    return () => {
      clearInterval(timerRef.current!)
    }
  }, [next, fading])

  const slide = SLIDES[current]!
  const displaySlide = fading ? SLIDES[nextIndex]! : slide

  return (
    <section className="py-[7em]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <h2 className="mb-12 text-center text-[28px] font-normal leading-normal text-ink dark:text-white md:mb-16 md:pb-6">
          Featured Destinations
        </h2>

        <div className="relative overflow-hidden" role="region" aria-label="Image carousel">
          {/* Slides */}
          <div className="relative h-[300px] w-full sm:h-[400px] md:h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity"
              style={{
                backgroundImage: `url(${displaySlide.image})`,
                boxShadow: '0px 20px 35px -30px rgba(0,0,0,0.26)',
              }}
            >
              <img
                src={displaySlide.image}
                alt={displaySlide.alt}
                className="h-full w-full object-cover"
              />
              {/* Bottom-darkening gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Navigation arrows — always visible, bare white chevrons */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-white opacity-100 transition-opacity hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronLeft className="h-8 w-8 md:h-[30px] md:w-[30px]" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-white opacity-100 transition-opacity hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronRight className="h-8 w-8 md:h-[30px] md:w-[30px]" />
            </button>

            {/* Dot indicators — overlaid at bottom center of slides */}
            <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-[5px]">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    'h-[10px] w-[10px] rounded-full transition-colors duration-300',
                    i === current ? 'bg-brand' : 'bg-white/50 hover:bg-white/70',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
