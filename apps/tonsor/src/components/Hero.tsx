import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    src: 'https://picsum.photos/seed/tonsor-1/1920/1080',
    alt: 'Barber cutting a client\u2019s hair',
  },
  {
    src: 'https://picsum.photos/seed/tonsor-2/1920/1080',
    alt: 'Barber trimming a beard with a straight razor',
  },
  {
    src: 'https://picsum.photos/seed/tonsor-3/1920/1080',
    alt: 'Classic barbershop interior with leather chairs',
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" aria-label="Intro" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
              i === index ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-4xl flex-col items-center justify-center px-4 py-40 text-center sm:px-6">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          For All Occasion HairStyle is a Must Try Fashion
        </h1>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-gray-300">
          Inappropriate behavior is often laughed off as “boys will be boys,” women face higher
          conduct standards — treat yourself to a professional cut and shave that lasts all day.
        </p>
        <a
          href="#about"
          className="mt-10 flex items-center gap-4 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-brand to-gold text-white shadow-lg shadow-brand/30">
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:text-gold">
            Watch Intro Video
          </span>
        </a>
      </div>
    </section>
  )
}
