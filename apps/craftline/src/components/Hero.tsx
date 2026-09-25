import { Download, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Slide {
  image: string
  heading: string
  subheading: string
  description: string
  cta: string
  ctaIcon: LucideIcon
  ctaHref: string
}

const slides: Slide[] = [
  {
    image: 'https://picsum.photos/seed/craftline-hero1/1200/800',
    heading: 'Hi!',
    subheading: "I'm Alex",
    description: 'A passionate designer crafting digital experiences',
    cta: 'Download CV',
    ctaIcon: Download,
    ctaHref: '#contact',
  },
  {
    image: 'https://picsum.photos/seed/craftline-hero2/1200/800',
    heading: 'I am',
    subheading: 'a Designer',
    description: 'Creating beautiful and functional interfaces',
    cta: 'View Portfolio',
    ctaIcon: Briefcase,
    ctaHref: '#work',
  },
]

const slide: Slide = slides[0]!

export function Hero() {
  const Icon = slide.ctaIcon
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {slides.map((s, i) => (
        <div key={i} className={i === 0 ? 'absolute inset-0' : 'hidden'}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${s.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          {slide.heading}
          <br />
          {slide.subheading}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
          {slide.description}
        </p>
        <a
          href={slide.ctaHref}
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-medium px-6 py-3 rounded-md transition-colors"
        >
          {slide.cta}
          <Icon className="w-4 h-4" />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-brand' : 'bg-white/50'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
