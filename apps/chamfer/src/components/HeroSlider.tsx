import { useState, useEffect } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    image: 'https://picsum.photos/seed/chamfer-hero-1/1920/1080',
    subheading: 'Welcome to Chamfer',
    heading: 'Modern Interior & Design',
  },
  {
    image: 'https://picsum.photos/seed/chamfer-hero-2/1920/1080',
    subheading: 'Creative Studio',
    heading: 'Crafting Beautiful Spaces',
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

  const activeSlide = slides[current]!

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.heading}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === current ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(0,12,32,0.8)]" />
        </div>
      ))}

      <div className="relative z-10 flex h-full max-w-6xl items-center px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="font-display text-lg font-medium uppercase tracking-widest text-brand-red">
            {activeSlide.subheading}
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase leading-tight text-white md:text-7xl">
            {activeSlide.heading}
          </h1>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-none bg-brand-red px-10 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-red-dark"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#video"
        className="absolute bottom-10 right-10 z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors hover:border-brand-red hover:text-brand-red"
        aria-label="Play video"
      >
        <Play className="h-6 w-6" />
      </a>
    </section>
  )
}
