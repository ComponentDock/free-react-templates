import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: 'https://picsum.photos/seed/inkvibe-hero1/1200/600',
    heading: 'We Provide Forever.',
    subtext:
      'Premium tattoo artistry that tells your unique story. Every design, crafted with precision and passion.',
    cta: 'Explore Our Work',
    href: '#portfolio',
  },
  {
    image: 'https://picsum.photos/seed/inkvibe-hero2/1200/600',
    heading: 'Art That Lives On.',
    subtext:
      'From custom designs to cover-ups, our artists bring your vision to life with stunning detail.',
    cta: 'Book a Session',
    href: '#pricing',
  },
  {
    image: 'https://picsum.photos/seed/inkvibe-hero3/1200/600',
    heading: 'Your Story, Inked.',
    subtext:
      'Consultation, design, and aftercare — a complete tattoo experience from start to finish.',
    cta: 'Meet Our Artists',
    href: '#team',
  },
] as const

export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={slides[0].image} alt="" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-void/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {slides[0].heading}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">{slides[0].subtext}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={slides[0].href}
            className="inline-flex items-center justify-center rounded bg-primary-400 px-8 py-3 text-sm font-bold text-void transition-colors hover:bg-primary-500"
          >
            {slides[0].cta}
          </a>
        </div>
      </div>

      {/* Slide navigation arrows */}
      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-void/50 p-2 text-white transition-colors hover:bg-void/80"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-void/50 p-2 text-white transition-colors hover:bg-void/80"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
