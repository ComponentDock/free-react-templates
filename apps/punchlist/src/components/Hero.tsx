import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { HERO, HERO_STATS } from '../content'
import { useReducedMotion } from '../lib/motion'
import { ActionButton, ActionLink, Container } from './ui'

/**
 * Centred hero on a cream-to-white wash: the fee pill, the two-line `h1` with
 * the typewriter on the gradient line, the lede, two actions, the hairline stat
 * row — then a 2:1 photograph inside the container.
 */
export function Hero({ onOpenQuote }: { readonly onOpenQuote: () => void }) {
  const [phrase, setPhrase] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      return undefined
    }
    const id = setInterval(() => {
      setPhrase((current) => (current + 1) % HERO.phrases.length)
    }, 3000)
    return () => clearInterval(id)
  }, [reduced])

  return (
    <section
      id="hero"
      data-band="hero"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />
        <div className="float-slower absolute -right-16 top-40 h-64 w-64 rounded-full bg-primary-100/40 blur-3xl" />
      </div>

      <Container className="relative pb-20 pt-16 sm:pt-28 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
            </span>
            {HERO.pill}
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            {HERO.heading}{' '}
            <span
              data-typewriter
              className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
            >
              {HERO.phrases[phrase]}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-gray-600 sm:text-xl dark:text-gray-300">
            {HERO.lede}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ActionButton size="lg" className="w-full sm:w-auto" onClick={onOpenQuote}>
              {HERO.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionButton>
            <ActionLink href="#rates" size="lg" variant="secondary" className="w-full sm:w-auto">
              {HERO.secondaryCta}
            </ActionLink>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4 dark:border-gray-800">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm leading-5 text-gray-600 dark:text-gray-400">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="mx-auto mt-16 max-w-5xl">
          <img
            src={HERO.photo}
            alt={HERO.photoAlt}
            width={1200}
            height={600}
            className="aspect-[2/1] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-gray-200"
          />
        </figure>
      </Container>
    </section>
  )
}
