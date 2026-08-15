import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]!
  const total = heroSlides.length

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000)
    return () => clearInterval(id)
  }, [total])

  return (
    <section
      id="home-section"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-3/4 bg-gradient-to-b from-black/70 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center text-white">
        <h1 className="font-heading text-3xl font-black uppercase leading-tight md:text-[3rem]">
          {slide.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/90">{slide.paragraph}</p>
        <a
          href="#properties-section"
          className="mt-8 inline-block rounded bg-brand px-10 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          {slide.cta}
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className={cn('h-2.5 w-2.5 rounded-full', i === index ? 'bg-brand' : 'bg-white/60')}
          />
        ))}
      </div>
    </section>
  )
}
