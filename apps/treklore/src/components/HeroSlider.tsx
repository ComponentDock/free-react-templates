import { useState, useEffect, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'

const slides = [
  { image: 'https://picsum.photos/seed/treklore-hero1/1920/800', headline: 'Let us take you away' },
  { image: 'https://picsum.photos/seed/treklore-hero2/1920/800', headline: 'Discover the world' },
  { image: 'https://picsum.photos/seed/treklore-hero3/1920/800', headline: 'Adventure awaits' },
]

const navItems = ['Offers', 'Testimonials', 'Latest']

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const id = setInterval(advance, 5000)
    return () => clearInterval(id)
  }, [advance])

  return (
    <section aria-label="Hero slider" className="relative h-[80vh] min-h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${i + 1} of ${slides.length}`}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-700',
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none',
          )}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-navy/40" />
          <div className="relative flex h-full items-center justify-center">
            <h2 className="font-display text-5xl font-bold uppercase tracking-wider text-white drop-shadow-lg md:text-7xl">
              {slide.headline}
            </h2>
          </div>
        </div>
      ))}

      {/* Right-side nav dots */}
      <div className="absolute right-6 top-1/2 z-10 -translate-y-1/2 space-y-4">
        {navItems.map((item, i) => (
          <button
            key={item}
            type="button"
            onClick={() => setCurrent(i)}
            className={cn(
              'text-right text-xs font-display uppercase tracking-wide transition-colors',
              i === current ? 'text-white' : 'text-white/40 hover:text-white/70',
            )}
            aria-label={`Go to ${item}`}
          >
            <span className="block text-[10px]">0{i + 1}</span>
            <span className="block">{item}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
