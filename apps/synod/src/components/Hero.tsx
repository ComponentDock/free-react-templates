import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroImage, heroTitle, heroSubtitle } from '../data'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[600px] items-center overflow-hidden bg-dark">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h1 className="max-w-lg text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {heroTitle}
        </h1>
        <p className="mt-4 max-w-md text-lg text-white/85">{heroSubtitle}</p>
        <a
          href="#about"
          className="mt-8 inline-block rounded bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand/90"
        >
          Join us
        </a>
      </div>

      {/* Decorative arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-white/60 p-3 text-white/60 transition-colors hover:border-white hover:text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-white/60 p-3 text-white/60 transition-colors hover:border-white hover:text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
