import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: 'https://picsum.photos/seed/websmith-hero1/1600/900',
    alt: 'Modern web development workspace',
  },
  {
    src: 'https://picsum.photos/seed/websmith-hero2/1600/900',
    alt: 'Creative design studio',
  },
  {
    src: 'https://picsum.photos/seed/websmith-hero3/1600/900',
    alt: 'Digital agency team collaboration',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <section id="home-section" className="relative flex min-h-[100vh] items-center overflow-hidden">
      {/* Background slider — anchored right 60% */}
      <div className="absolute bottom-0 right-0 top-0 z-0 w-[60%] overflow-hidden">
        <div className="relative h-full w-full" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
          <img
            src={slides[current]!.src}
            alt={slides[current]!.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Mobile overlay — full width with white overlay */}
        <div className="absolute inset-0 bg-white/50 md:hidden" />

        {/* Navigation arrows */}
        <div className="absolute bottom-[120px] right-[50px] flex flex-col gap-2.5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-black"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-black"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Intro text — left 40% */}
      <div className="relative z-10 w-full px-6 md:w-[40%] lg:pl-16">
        <h1 className="text-[4rem] font-black leading-none text-white md:text-[8rem]">
          Websmith Web Studio
        </h1>
        <p className="mt-6 text-[1.4rem] text-black md:text-white">
          We are web studio in New York.
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
          Crafting exceptional digital experiences that drive results and inspire growth for
          ambitious brands worldwide.
        </p>
        <a
          href="#contact-section"
          className="mt-8 inline-block rounded-[30px] border-2 border-brand bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:border-black hover:bg-black"
        >
          Start a project
        </a>
      </div>
    </section>
  )
}
