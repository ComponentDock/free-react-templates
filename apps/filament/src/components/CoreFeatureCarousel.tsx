import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

interface CoreFeatureCarouselProps {
  className?: string
}

const slides = [
  {
    image: 'https://picsum.photos/seed/filament-cf1/600/400',
    alt: 'Core feature one',
  },
  {
    image: 'https://picsum.photos/seed/filament-cf2/600/400',
    alt: 'Core feature two',
  },
  {
    image: 'https://picsum.photos/seed/filament-cf3/600/400',
    alt: 'Core feature three',
  },
]

export function CoreFeatureCarousel({ className }: CoreFeatureCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]!

  return (
    <section aria-label="Core feature carousel" className={cn('bg-paper py-24', className)}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left text */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand">
              Core Feature
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-snug text-ink md:text-4xl">
              Some of the best <span className="font-bold text-brand">core features</span> that make
              us different
            </h2>
            <p className="mb-8 leading-relaxed text-ink-light">
              Discover the powerful features that set our template apart. Built with modern web
              technologies for the best user experience.
            </p>
            <a
              href="#more"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              style={{ borderRadius: '20px' }}
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right carousel */}
          <div className="relative flex-1">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute -left-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img src={slide.image} alt={slide.alt} className="h-80 w-full object-cover" />
            </div>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute -right-5 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
