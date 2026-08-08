import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  { seed: 'pinnacle-hero-1', alt: 'City skyline at dusk' },
  { seed: 'pinnacle-hero-2', alt: 'Modern city architecture at twilight' },
  { seed: 'pinnacle-hero-3', alt: 'Golden bridge over a river at night' },
] as const

export function Hero() {
  const [active, setActive] = useState(0)

  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-night">
      <div className="relative h-[90vh] min-h-[560px]">
        {slides.map((slide, index) => (
          <div
            key={slide.seed}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              index === active ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
            aria-hidden={index !== active}
          >
            <img
              src={`https://picsum.photos/seed/${slide.seed}/1600/900`}
              alt={index === active ? slide.alt : ''}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-night/60" />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-16">
          <div className="w-full max-w-md border-b-4 border-brand bg-night/80 px-8 py-10 text-center backdrop-blur-sm sm:px-10">
            <h1 className="font-display text-3xl font-light uppercase tracking-wide text-white sm:text-4xl">
              Dream Heaven City
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              If you are looking at blank cassettes on the web, you have come to the right place —
              we design spaces worth dreaming about.
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-3 border-y border-white/60 py-2 text-xs font-medium uppercase tracking-[3px] text-white transition-colors hover:border-brand hover:text-brand"
            >
              Details
            </a>
          </div>
        </div>

        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-4 sm:px-8">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setActive((i) => (i === 0 ? slides.length - 1 : i - 1))}
            className="rounded-full bg-night/40 p-2 text-white transition-colors hover:bg-brand hover:text-ink"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setActive((i) => (i + 1) % slides.length)}
            className="rounded-full bg-night/40 p-2 text-white transition-colors hover:bg-brand hover:text-ink"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.seed}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              className={cn(
                'h-2.5 rounded-full transition-colors',
                index === active ? 'w-8 bg-brand' : 'w-2.5 bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
