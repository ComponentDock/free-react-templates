import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    eyebrow: 'Committed to success',
    title: 'We help to grow your business',
    subtext:
      'Consilio partners with ambitious companies to turn strategy into measurable growth — from market entry to operational scale.',
    image: 'https://picsum.photos/seed/consilio-1/1920/900',
  },
  {
    eyebrow: 'Committed to success',
    title: 'Strategy that delivers results',
    subtext:
      'Our consultants bring deep industry expertise and a practical playbook that moves your business forward, quarter after quarter.',
    image: 'https://picsum.photos/seed/consilio-2/1920/900',
  },
] as const

const SLIDE_INTERVAL_MS = 6000

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [])

  const slide = slides[current]!

  return (
    <section aria-label="Featured highlights" className="relative overflow-hidden bg-brand-deep">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <p className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
          <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
          {slide.eyebrow}
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
          {slide.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-200">{slide.subtext}</p>
        <div className="mt-9">
          <a
            href="#services"
            className="inline-flex rounded bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Our Services
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2.5" aria-label="Slides">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
            onClick={() => setCurrent(index)}
            className={cn(
              'h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
              index === current ? 'w-8 bg-accent' : 'w-2.5 bg-white/60 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
