import { useState, useEffect, useCallback } from 'react'
import { Button } from '@free-react-templates/ui'

const slides = [
  {
    image: 'https://picsum.photos/seed/nectar-hero-1/1600/800',
    heading: 'We Provide The',
    accent: 'Best',
    headingEnd: 'Construction Services',
    subheading:
      'Professional construction solutions for residential and commercial projects. Building dreams with precision and care.',
  },
  {
    image: 'https://picsum.photos/seed/nectar-hero-2/1600/800',
    heading: 'Building Your',
    accent: 'Future',
    headingEnd: 'With Excellence',
    subheading:
      'Trusted construction experts delivering quality craftsmanship. Your vision, our expertise, remarkable results.',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => setCurrent(index), [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- current is always in bounds
  const slide = slides[current]!

  return (
    <section id="home" className="relative h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="ml-auto max-w-xl text-right">
            <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {slide.heading} <span className="text-brand">{slide.accent}</span> {slide.headingEnd}
            </h1>
            <p className="mt-4 text-lg text-white/80">{slide.subheading}</p>
            <Button
              className="mt-6 bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
              aria-label="Request a quote"
            >
              Request A Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={current === index}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              current === index ? 'bg-brand' : 'bg-white/50'
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
