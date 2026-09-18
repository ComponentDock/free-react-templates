import { useSlideCarousel } from '../hooks/useInterval'
import { ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    subheading: 'Discover Greece',
    headline: 'Explore Your Travel Destinations Like Never Before',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/trekly-hero-1/1200/700',
    label: 'Greece',
  },
  {
    subheading: 'Discover Africa',
    headline: 'Never Stop Exploring the World Around You',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/trekly-hero-2/1200/700',
    label: 'Africa',
  },
]

export function Hero() {
  const { current, setCurrent } = useSlideCarousel(slides.length)
  const slide = slides[current]!

  return (
    <section id="home" className="relative min-h-[600px] overflow-hidden bg-ocean-900 pt-16">
      <div className="mx-auto flex min-h-[584px] max-w-7xl items-center">
        <div className="grid w-full grid-cols-1 items-center md:grid-cols-2">
          {/* Text side */}
          <div className="relative z-10 px-6 py-12 md:px-12">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-ocean-300">
              {slide.subheading}
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              {slide.headline}
            </h1>
            <p className="mb-6 max-w-md text-base text-white/70">{slide.description}</p>
            <a
              href="#destinations"
              className="inline-flex items-center gap-2 rounded-full bg-ocean-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-ocean-500"
            >
              Discover <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          {/* Image side */}
          <div className="relative hidden h-[584px] md:block">
            <img
              src={slide.image}
              alt={slide.label}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/80 to-transparent" />
            <div className="absolute bottom-8 left-8 rounded-lg bg-ocean-600/90 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm">
              {slide.label}
            </div>
          </div>
        </div>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'h-2 rounded-full transition-all',
              i === current ? 'w-8 bg-ocean-400' : 'w-2 bg-white/40',
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
