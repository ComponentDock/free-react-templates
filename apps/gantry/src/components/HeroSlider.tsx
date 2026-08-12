import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../data'

/* HeroSlider — a full-viewport photo slider (two slides) under a dark
   #222 overlay at 0.3 opacity, with a centered white headline whose one
   highlighted word is orange, and square white prev/next arrows. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slide = HERO_SLIDES[index]!
  const [before, after] = slide.headline.split(slide.highlight)

  const next = () => setIndex((i) => (i + 1) % HERO_SLIDES.length)
  const prev = () => setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={`https://picsum.photos/id/${slide.image}/1600/900`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#222]/30" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-heading text-5xl font-light leading-tight text-white lg:text-6xl">
          {before}
          <strong className="font-bold text-brand">{slide.highlight}</strong>
          {after}
        </h1>
        <p className="mt-6 text-lg leading-7 text-white/90">{slide.paragraph}</p>
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white p-3 text-black transition-colors hover:bg-brand hover:text-white"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white p-3 text-black transition-colors hover:bg-brand hover:text-white"
      >
        <ChevronRight size={28} />
      </button>
    </section>
  )
}
