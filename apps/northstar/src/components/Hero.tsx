import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

const slides = [
  { id: 1, heading: 'Empower Your Mind', sub: 'Transform Your Life' },
  { id: 2, heading: 'Unlock Your Potential', sub: 'Achieve Your Dreams' },
  { id: 3, heading: 'Live Your Best Life', sub: 'Start Your Journey' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex h-[80vh] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(https://picsum.photos/seed/northstar-hero-${slide.id}/1920/1080)`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <p className="mb-4 text-lg tracking-wide uppercase">We are</p>
        <h1 className="mb-6 text-4xl font-bold font-heading md:text-6xl">
          {slides[current]!.heading}
        </h1>
        <p className="mb-8 text-xl">{slides[current]!.sub}</p>
        <button
          onClick={() => scrollTo('about')}
          className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-[#0265c5]"
        >
          Learn More <ChevronRight size={16} />
        </button>
      </div>
    </section>
  )
}
