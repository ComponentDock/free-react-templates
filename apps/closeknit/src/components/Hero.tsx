import { useEffect, useState } from 'react'
import { ArrowRight, Play, X } from 'lucide-react'
import { HERO } from '../content'
import { useReducedMotion } from '../lib/motion'

const PHRASE_MS = 3000

/** The h1's second line: three phrases, one every three seconds. */
function Typewriter() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced) {
      return
    }
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % HERO.phrases.length)
    }, PHRASE_MS)
    return () => clearInterval(timer)
  }, [reduced])

  return <span className="text-gradient">{HERO.phrases[index]}</span>
}

/**
 * Centred gradient hero: badge, typewriter headline, lede, three controls, the
 * four-stat row behind a hairline, then the framed figure. `Watch Demo` opens a
 * locally drawn panel — the modal mechanics are the reference's, the footage is
 * not.
 */
export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    if (!demoOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDemoOpen(false)
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [demoOpen])

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="hero-float absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-200/50 blur-3xl" />
        <div className="hero-float-reverse absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            {HERO.badge}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {HERO.title}
            <br />
            <Typewriter />
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">{HERO.lede}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700"
            >
              {HERO.primary}
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="#circles"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50"
            >
              {HERO.secondary}
            </a>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center gap-3 text-sm font-medium text-gray-700"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25">
                <Play aria-hidden="true" className="h-5 w-5" />
              </span>
              {HERO.watch}
            </button>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4">
            {HERO.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl font-bold text-gray-900 tabular-nums sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm text-gray-600">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
            <img
              src={HERO.figure.src}
              alt={HERO.figure.alt}
              loading="eager"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {demoOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Close demo"
            onClick={() => setDemoOpen(false)}
            className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setDemoOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default"
          />
          <div className="relative z-10 w-full max-w-4xl rounded-2xl bg-gray-900 p-8 text-center text-white shadow-2xl">
            <div className="flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800">
              <p className="text-lg font-semibold">A two-minute tour of one circle</p>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Demo footage is not part of this build — the walkthrough covers creating a circle,
              posting to it, and exporting everything.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
