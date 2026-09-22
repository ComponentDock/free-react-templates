import { useState } from 'react'

const SLIDES = [
  {
    image: 'https://picsum.photos/seed/luxstay-slide-1/1920/800',
    subtitle: 'Luxury & Comfort',
    title: 'Discover Your Perfect Stay',
  },
  {
    image: 'https://picsum.photos/seed/luxstay-slide-2/1920/800',
    subtitle: 'Exquisite Dining',
    title: 'Experience World-Class Cuisine',
  },
  {
    image: 'https://picsum.photos/seed/luxstay-slide-3/1920/800',
    subtitle: 'Relax & Unwind',
    title: 'Premium Spa & Wellness',
  },
  {
    image: 'https://picsum.photos/seed/luxstay-slide-4/1920/800',
    subtitle: 'Event Venues',
    title: 'Host Unforgettable Events',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  return (
    <section aria-label="Hero slider" className="relative h-[650px] overflow-hidden bg-black">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <p className="mb-2 text-lg tracking-wider uppercase">{slide.subtitle}</p>
            <h1 className="mb-6 font-heading text-5xl font-light md:text-6xl">{slide.title}</h1>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#rooms"
                className="rounded-full bg-brand-blue px-8 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-blue-600"
              >
                View Detail
              </a>
              <a
                href="#about"
                className="rounded-full bg-accent-orange px-8 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-orange-600"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand-blue' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
