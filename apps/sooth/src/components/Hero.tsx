import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { Reveal } from './Reveal'
import { VideoModal } from './VideoModal'

const phrases = ['Peace & Harmony', 'Rest & Renewal', 'Calm & Balance'] as const

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhraseIndex((index) => (index + 1) % phrases.length)
    }, 3500)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950"
    >
      {/* Decorative blur orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-900/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-accent-200/20 blur-3xl dark:bg-accent-900/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 text-center lg:px-8 lg:pt-28 lg:pb-24">
        <Reveal>
          <div className="mx-auto flex h-px w-16 bg-accent-400" aria-hidden="true" />
          <h1 className="font-heading mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Indulge in Pure{' '}
            <span className="text-gradient italic" aria-live="polite">
              {phrases[phraseIndex]}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            The art of relaxation at our premier spa and beauty salon. Step into a sanctuary of
            calm, where every treatment is crafted to restore your body, mind, and spirit.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-primary-700"
            >
              Book Your Treatment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-900"
            >
              View Services
            </a>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2 rounded-full px-6 py-4 text-base font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              </span>
              Watch Demo
            </button>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={150} className="mt-16">
          <dl className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-200 pt-8 dark:divide-gray-800 dark:border-gray-800">
            <div className="px-4">
              <dt className="text-sm text-gray-500 dark:text-gray-400">Years of Excellence</dt>
              <dd className="font-heading mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                15+
              </dd>
            </div>
            <div className="px-4">
              <dt className="text-sm text-gray-500 dark:text-gray-400">Luxury Treatments</dt>
              <dd className="font-heading mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                50+
              </dd>
            </div>
            <div className="px-4">
              <dt className="text-sm text-gray-500 dark:text-gray-400">Client Rated</dt>
              <dd className="font-heading mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                5-Star
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}
