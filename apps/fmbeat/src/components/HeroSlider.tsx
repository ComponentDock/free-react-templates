import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const locations = ['Berlin', 'Bucharest', 'London', 'Budapest', 'Tel Aviv', 'Moscow']

const slides = [
  {
    heading: 'DJ Khaled Exclusive Interview',
    description: 'The legendary producer sits down for an in-depth conversation',
  },
  {
    heading: 'Summer Festival Lineup Announced',
    description: 'The biggest names in electronic music converge for three days',
  },
  {
    heading: 'New Album Release: Midnight Sessions',
    description: 'A groundbreaking collection from the underground scene',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      data-testid="hero-slider"
      className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/fmbeat-hero/1920/962)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark-deep/70" />

      {/* Location strip */}
      <div className="absolute top-0 left-0 right-0 z-10 hidden md:flex justify-center gap-6 py-4 bg-black/40">
        {locations.map((loc) => (
          <div
            key={loc}
            className="flex items-center gap-1.5 text-white/70 text-xs uppercase tracking-wider"
          >
            <MapPin size={12} className="text-brand-yellow" />
            <span>{loc}</span>
          </div>
        ))}
      </div>

      {/* Slider content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-3xl px-4">
          {slides.map((slide, i) => (
            <div
              key={slide.heading}
              className={cn(
                'transition-all duration-700 ease-in-out',
                i === current
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12 absolute inset-0 flex items-center justify-center pointer-events-none',
              )}
            >
              <div>
                <span className="text-brand-yellow text-sm md:text-base font-medium uppercase tracking-widest mb-4 block">
                  Up Next
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight bg-black/40 inline-block px-4 py-2 rounded">
                  {slide.heading}
                </h1>
                <p className="text-white/70 text-lg hidden md:block">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              'w-3 h-3 rounded-full transition-colors',
              i === current ? 'bg-brand-yellow' : 'bg-white/30 hover:bg-white/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}
