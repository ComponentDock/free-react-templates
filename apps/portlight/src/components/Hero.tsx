import { cn } from '@free-react-templates/ui'
import { useState } from 'react'

const SLIDES = [
  {
    image: 'https://picsum.photos/seed/portlight-hotel-1/1920/1080',
    subtitle: 'More than a hotel... an experience',
    title: 'Hotel for the whole family, all year round.',
  },
  {
    image: 'https://picsum.photos/seed/portlight-hotel-2/1920/1080',
    subtitle: 'Luxury & Comfort',
    title: 'Your perfect getaway awaits you here.',
  },
] as const

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  const [current, setCurrent] = useState(0)

  return (
    <section id="home" className={cn('relative h-[80vh] min-h-[500px] overflow-hidden', className)}>
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === current ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              {SLIDES[current]!.subtitle}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              {SLIDES[current]!.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-3 w-3 rounded-full transition-colors',
              i === current ? 'bg-brand' : 'bg-white/50',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
