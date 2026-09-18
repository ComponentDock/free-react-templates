import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const slides = [
  {
    heading: 'We Are Digital Agency',
    sub: 'Crafting innovative digital experiences that transform brands and drive growth.',
    img: 'https://picsum.photos/seed/krypton-hero1/1200/600',
  },
  {
    heading: 'Creative Solutions',
    sub: 'Strategic design and technology to elevate your business to the next level.',
    img: 'https://picsum.photos/seed/krypton-hero2/1200/600',
  },
  {
    heading: 'Think Big, Build Bold',
    sub: 'Full-service digital agency delivering measurable results for ambitious brands.',
    img: 'https://picsum.photos/seed/krypton-hero3/1200/600',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent((i) => (i + 1) % slides.length)

  return (
    <section id="home" aria-label="Hero slider" className="relative overflow-hidden bg-ink">
      <div className="relative h-[500px] sm:h-[600px]">
        {slides.map((s, i) => (
          <div
            key={s.heading}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={s.img}
              alt=""
              className="h-full w-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {slides[current]!.heading}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/90">{slides[current]!.sub}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink
                  href="#services"
                  className="rounded-md bg-primary-500 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-primary-600"
                >
                  Our Services
                </ButtonLink>
                <ButtonLink
                  href="#portfolio"
                  className="rounded-md border border-white bg-transparent px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Portfolio
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${i === current ? 'bg-primary-500' : 'bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
