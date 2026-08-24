import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    image: 'https://picsum.photos/seed/gastro-hero1/1920/1080',
    subtitle: 'Welcome to',
    heading: 'Gastronome',
  },
  {
    image: 'https://picsum.photos/seed/gastro-hero2/1920/1080',
    subtitle: 'Experience',
    heading: 'Fine Dining',
  },
  {
    image: 'https://picsum.photos/seed/gastro-hero3/1920/1080',
    subtitle: 'Discover',
    heading: 'Italian Cuisine',
  },
]

export function HeroSlider() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive((c) => (c + 1) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[active]!

  return (
    <section id="home" className="relative h-[700px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          aria-hidden={i !== active}
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.heading}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <p className="font-accent text-2xl md:text-3xl">{slide.subtitle}</p>
        <h1 className="mt-2 text-5xl font-bold md:text-7xl">{slide.heading}</h1>
        <a
          href="#menu"
          className="mt-8 rounded-[10px] bg-white px-8 py-3 text-sm font-semibold text-text-dark transition-colors hover:bg-brand hover:text-white"
        >
          View Menu
        </a>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-3 w-3 rounded-full transition-colors ${i === active ? 'bg-brand' : 'bg-white/50'}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
