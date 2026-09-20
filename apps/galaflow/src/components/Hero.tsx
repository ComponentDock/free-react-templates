import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const slides = [
  {
    date: '12 Jan – 20 Jan 2020',
    heading: 'Business Conference',
    description: "Join the world's most innovative minds at the Business Conference.",
  },
  {
    date: '25 Mar – 28 Mar 2020',
    heading: 'Tech Summit 2020',
    description: 'Explore the future of technology with industry leaders.',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]!

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/galaflow-hero-${current}/1920/1080)`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 text-white/10 font-[family-name:var(--font-heading)] text-6xl uppercase tracking-widest select-none hidden lg:block">
        Innovative
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-white">
        <span className="mb-4 inline-block text-sm font-medium font-[family-name:var(--font-sans)] uppercase tracking-wider text-[#FDE449]">
          {slide.date}
        </span>
        <h1 className="mb-6 text-6xl font-bold font-[family-name:var(--font-heading)] uppercase leading-tight md:text-8xl lg:text-[120px]">
          {slide.heading}
        </h1>
        <p className="mb-8 max-w-xl text-lg font-[family-name:var(--font-sans)] text-white/70">
          {slide.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="rounded-[5px] bg-[#FDE449] px-8 py-3 text-sm font-semibold font-[family-name:var(--font-sans)] text-[#302072] transition hover:bg-[#e6cf3f]">
            Join Now
          </Button>
          <Button className="flex items-center gap-2 rounded-[5px] border-2 border-white px-8 py-3 text-sm font-semibold font-[family-name:var(--font-sans)] text-white transition hover:bg-white hover:text-[#302072]">
            <Play size={16} fill="currentColor" />
            Watch Video
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === current ? 'w-8 bg-[#FDE449]' : 'w-2 bg-white/40'
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
