import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    headline: 'Welcome to Tressly',
    copy: 'Premium cuts, styling and care for the whole family.',
    cta: 'Book Online',
    href: '#contact',
    image: 'https://picsum.photos/seed/tressly-hero-1/1920/1080',
  },
  {
    headline: 'Hair Salon Expert',
    copy: 'Award-winning stylists who craft a look that is uniquely yours.',
    cta: 'Explore Services',
    href: '#services',
    image: 'https://picsum.photos/seed/tressly-hero-2/1920/1080',
  },
  {
    headline: 'Beautiful Hair, Healthy You!',
    copy: 'Treatments that keep your hair looking vibrant, every single day.',
    cta: 'Get Started',
    href: '#about',
    image: 'https://picsum.photos/seed/tressly-hero-3/1920/1080',
  },
] as const

export function Hero() {
  const [active, setActive] = useState(0)
  const slide = slides[active]!

  const goTo = (index: number) => setActive((index + slides.length) % slides.length)

  return (
    <section
      id="home"
      aria-label="Salon hero"
      className="relative isolate overflow-hidden bg-ink-900"
    >
      {slides.map((item, index) => (
        <div key={item.headline} className={index === active ? 'block' : 'hidden'}>
          <img
            src={item.image}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            loading="eager"
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-black/50" aria-hidden="true" />
      <div className="mx-auto flex min-h-[560px] max-w-6xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6">
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
          {slide.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">{slide.copy}</p>
        <ButtonLink
          href={slide.href}
          className="mt-9 rounded-full bg-leaf-500 px-8 text-sm font-semibold uppercase tracking-wider text-white hover:bg-leaf-600"
        >
          {slide.cta}
        </ButtonLink>
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={() => goTo(active - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur-sm transition-colors hover:bg-leaf-500"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(active + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur-sm transition-colors hover:bg-leaf-500"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.headline}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            className={
              index === active
                ? 'h-2.5 w-6 rounded-full bg-leaf-500 transition-all'
                : 'h-2.5 w-2.5 rounded-full bg-white/50 transition-all hover:bg-white'
            }
          />
        ))}
      </div>
    </section>
  )
}
