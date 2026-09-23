import { useState, useEffect } from 'react'

const slides = [
  {
    heading: 'Interior Design Solution For Your Business',
    image: 'https://picsum.photos/seed/plano-hero-1/1920/1080',
  },
  {
    heading: 'Creative Spaces That Inspire',
    image: 'https://picsum.photos/seed/plano-hero-2/1920/1080',
  },
] as const

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.heading} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {slides[current]!.heading}
            </h1>
            <a
              href="#projects"
              className="mt-8 inline-block bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
            >
              View Works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              index === current ? 'bg-accent' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
