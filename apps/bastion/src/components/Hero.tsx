import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const slides = [
  {
    num: '#01',
    title: 'Exterior Building',
    text: 'Modern architecture for bold businesses — clean lines, honest materials, and spaces that work as hard as you do.',
    image: 'https://picsum.photos/seed/bastion-1/1920/1080',
  },
  {
    num: '#02',
    title: 'American Building',
    text: 'Timeless structures rooted in tradition, engineered for the future of your community.',
    image: 'https://picsum.photos/seed/bastion-2/1920/1080',
  },
  {
    num: '#03',
    title: "Louie's Residences",
    text: 'Residential design that turns houses into homes — light, warmth, and thoughtful detail in every room.',
    image: 'https://picsum.photos/seed/bastion-3/1920/1080',
  },
  {
    num: '#04',
    title: 'Business Building',
    text: 'Commercial spaces designed for performance, from the first concept sketch to final handover.',
    image: 'https://picsum.photos/seed/bastion-4/1920/1080',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!
  const next = () => setIndex((current) => (current + 1) % slides.length)
  const prev = () => setIndex((current) => (current - 1 + slides.length) % slides.length)

  return (
    <section
      id="home"
      aria-label="Featured projects"
      className="relative flex min-h-[640px] items-center overflow-hidden bg-charcoal"
    >
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brand">
          Featured Projects
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          <span className="text-brand">{slide.num}</span> {slide.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-200">{slide.text}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="#contact" className="bg-brand text-charcoal hover:bg-accent">
            Request a quote
          </ButtonLink>
          <ButtonLink
            href="#portfolio"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:text-white"
          >
            View our work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="mt-14 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  i === index ? 'w-8 bg-brand' : 'w-2.5 bg-white/40 hover:bg-white/70',
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:text-charcoal"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:text-charcoal"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
