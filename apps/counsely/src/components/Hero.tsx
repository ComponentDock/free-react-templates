import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { hero } from '../data'

/** Full-viewport hero: photo background under a black overlay, gold uppercase
 *  subheading, white headline whose final word rotates through a gold
 *  typed-word cycle, and a gold "Get Legal Advice" CTA. */
export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((current) => (current + 1) % hero.rotatingWords.length),
      2000,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-brand">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.5] text-white md:text-5xl lg:text-[48px]">
            {hero.headline}{' '}
            <span className="text-brand">
              {hero.rotatingWords[wordIndex]}
              <span aria-hidden="true" className="ml-0.5 inline-block animate-pulse">
                |
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            {hero.description}
          </p>
          <a
            href={hero.cta.href}
            className="mt-10 inline-flex items-center gap-2 rounded border border-brand bg-brand px-6 py-3 text-base font-medium text-white transition-colors hover:border-brand hover:bg-transparent hover:text-brand"
          >
            {hero.cta.label} <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
