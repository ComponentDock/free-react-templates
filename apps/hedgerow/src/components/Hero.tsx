import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { prefersReducedMotion } from './Reveal'
import { hero } from '../content'

/**
 * The gradient line cycles through three phrases: fade down over 300 ms, swap,
 * fade back, every 3 s. Reduced motion keeps the first phrase and never starts
 * an interval.
 */
function useTypewriter(phrases: readonly string[]) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const pending = useRef<number | null>(null)

  useEffect(() => {
    if (prefersReducedMotion()) {
      return
    }

    const swap = window.setTimeout
    const cycle = window.setInterval(() => {
      setVisible(false)
      pending.current = swap(() => {
        setIndex((value) => (value + 1) % phrases.length)
        setVisible(true)
      }, 300)
    }, 3000)

    return () => {
      window.clearInterval(cycle)
      if (pending.current !== null) {
        window.clearTimeout(pending.current)
      }
    }
  }, [phrases])

  return { phrase: phrases[index] as string, visible }
}

/** One blurred disc behind the hero, drifting at its own rate on scroll. */
function ParallaxBlob({ factor }: { factor: number }) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) {
      return
    }

    const update = () => setOffset(Math.round(window.scrollY * factor))
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [factor])

  return (
    <span
      aria-hidden="true"
      data-parallax={factor}
      className="pointer-events-none absolute -z-10 rounded-full blur-3xl"
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
    />
  )
}

export function Hero() {
  const { phrase, visible } = useTypewriter(hero.phrases)

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white"
    >
      <ParallaxBlob factor={0.15} />
      <ParallaxBlob factor={-0.1} />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -left-24 -z-10 h-[500px] w-[500px] rounded-full bg-primary-200/50 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-primary-100/40 blur-3xl"
      />

      <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            {hero.badge}
          </p>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {hero.headlineLead}
            <br />
            <span
              data-typewriter
              className={`text-gradient inline-block transition-all duration-300 ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              {phrase}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">{hero.lede}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={hero.primary.target}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {hero.primary.label}
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href={hero.secondary.target}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
            >
              {hero.secondary.label}
            </a>
          </div>

          <dl
            id="about"
            className="mt-16 grid scroll-mt-24 grid-cols-2 gap-8 border-t border-gray-200 pt-10 text-left sm:grid-cols-4"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-gray-600">{stat.label}</dt>
                <dd className="text-3xl font-bold text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <img
          src={hero.image}
          alt={hero.imageAlt}
          width={1400}
          height={700}
          loading="eager"
          className="mx-auto mt-16 aspect-[2/1] w-full max-w-5xl rounded-2xl object-cover shadow-2xl ring-1 ring-gray-200 lg:mt-24"
        />
      </div>
    </section>
  )
}
