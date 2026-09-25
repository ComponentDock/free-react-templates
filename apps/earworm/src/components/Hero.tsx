import { useState } from 'react'
import { Heart, Share2, Download } from 'lucide-react'

const slides = [
  {
    heading: 'Subscribe Today',
    subtitle: 'The best stories told through sound, delivered weekly.',
    bgSeed: 'podcast-hero-1',
  },
  {
    heading: 'Listen Now',
    subtitle: 'Dive into conversations that matter.',
    bgSeed: 'podcast-hero-2',
  },
  {
    heading: 'Discover Today',
    subtitle: 'New episodes every week — never miss a beat.',
    bgSeed: 'podcast-hero-3',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  const slide = slides[current]!

  return (
    <section className="relative flex h-[700px] items-center justify-center overflow-hidden bg-heading md:h-[600px]">
      {/* Background image */}
      <img
        src={`https://picsum.photos/seed/${slide.bgSeed}/1920/950`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h2 className="mb-4 text-5xl font-semibold md:text-6xl lg:text-7xl">{slide.heading}</h2>
        <p className="mb-8 text-lg text-white/80">{slide.subtitle}</p>
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Subscribe with iTunes
          </a>
          <a
            href="#"
            className="rounded border border-white bg-white px-6 py-3 text-sm font-semibold text-heading transition-colors hover:bg-gray-100"
          >
            Subscribe with RSS
          </a>
        </div>

        {/* Featured episode player */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm sm:flex-row sm:text-left">
          <img
            src="https://picsum.photos/seed/podcast-ep-thumb/120/120"
            alt="Episode thumbnail"
            className="h-20 w-20 rounded object-cover"
          />
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs text-white/60">December 9, 2024</p>
            <h3 className="text-lg font-semibold text-white">Episode 203 — The Last Blockbuster</h3>
            <p className="text-sm text-white/70">By Admin | Tutorials | 00:02:56</p>
            <audio controls className="mt-2 w-full">
              <source src="" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className="mt-2 flex items-center justify-center gap-4 text-xs text-white/60 sm:justify-start">
              <button className="flex items-center gap-1 transition-colors hover:text-brand">
                <Heart className="h-3.5 w-3.5" /> Like (29)
              </button>
              <button className="flex items-center gap-1 transition-colors hover:text-brand">
                <Share2 className="h-3.5 w-3.5" /> Share (04)
              </button>
              <button className="flex items-center gap-1 transition-colors hover:text-brand">
                <Download className="h-3.5 w-3.5" /> Download (12)
              </button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
