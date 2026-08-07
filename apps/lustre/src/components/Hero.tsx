import { useState } from 'react'
import { ChevronLeft, ChevronRight, Mouse } from 'lucide-react'

const slides = [
  {
    kicker: 'Our best offers',
    headline: 'The hair that you dream',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    kicker: 'Our best offers',
    headline: 'The hair that you dream',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    kicker: 'Our best offers',
    headline: 'The hair that you dream',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/lustre-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-400">
          {slide.kicker}
        </p>
        <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-white sm:text-7xl">
          The hair that you <span className="text-gold-500">dream</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">{slide.copy}</p>
        <a
          href="#services"
          className="mt-10 inline-block border-b-2 border-gold-500 pb-1 text-sm font-semibold uppercase tracking-widest text-gold-500 transition-colors hover:text-gold-400"
        >
          View our offers
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-white/70">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll Down</span>
        <Mouse className="h-5 w-5" aria-hidden="true" />
      </div>

      <div className="absolute bottom-10 right-6 flex items-center gap-3 text-white sm:right-10">
        <span className="font-display text-2xl font-bold text-gold-500">0{index + 1}.</span>
        <div className="h-1 w-24 bg-white/30">
          <div
            className="h-full bg-gold-500 transition-all"
            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIndex((value) => (value - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-gray-900"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => setIndex((value) => (value + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-gray-900"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  )
}
