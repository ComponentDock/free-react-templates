import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button, ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    image: 'https://picsum.photos/seed/fixly-hero-1/1920/1080',
    eyebrow: 'Welcome to Fixly Auto Repair Shop',
    headline: 'Looking for the Right Vehicle Repair Service?',
    copy: 'We are experts in car repair and maintenance. Our skilled mechanics use modern equipment to keep your vehicle safe and reliable on every road.',
  },
  {
    image: 'https://picsum.photos/seed/fixly-hero-2/1920/1080',
    eyebrow: 'Fixly Auto Repair Shop',
    headline: 'Best Auto Repair Shop and Maintenance Services',
    copy: 'From oil changes to electrical diagnostics, we take care of every detail so you can drive with total confidence.',
  },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!

  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url('${slide.image}')` }}
    >
      <div className="absolute inset-0 bg-coal/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-40">
        <div className="max-w-2xl text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            {slide.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">
            {slide.headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80">{slide.copy}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="bg-brand text-white hover:bg-brand-dark">
              Make An Appointment
            </Button>
            <ButtonLink
              href="#services"
              variant="outline"
              className="h-12 border-white/40 px-6 text-base text-white hover:bg-white/10"
            >
              See Services
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:border-brand"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:border-brand"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
