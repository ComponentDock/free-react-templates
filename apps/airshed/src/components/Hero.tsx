import { Check } from 'lucide-react'
import { HERO } from '../content'
import { BookingForm } from './BookingForm'
import { Container, Eyebrow, Reveal, Stars } from './ui'

/**
 * The ink-50 hero: seven columns of copy against a five-column booking card,
 * the headline's second sentence in brand violet — flat, not a gradient.
 */
export function Hero() {
  return (
    <section id="hero" className="bg-ink-50 py-14 lg:py-20 dark:bg-gray-900">
      <Container className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>{HERO.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-[-1.5px] text-ink-800 sm:text-5xl lg:text-6xl dark:text-white">
              {HERO.headline}{' '}
              <span className="text-primary-600 dark:text-primary-400">{HERO.headlineAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-ink-500 dark:text-gray-300">
              {HERO.lede}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-6 flex flex-wrap items-center gap-2">
            <Stars />
            <span className="text-sm font-bold text-ink-600 dark:text-gray-200">{HERO.score}</span>
            <span className="text-sm text-ink-500 dark:text-gray-400">{HERO.reviews}</span>
          </Reveal>

          <Reveal delay={150}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HERO.checks.map((check) => (
                <li key={check} className="flex items-start gap-2.5">
                  <Check
                    aria-hidden="true"
                    strokeWidth={2.5}
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400"
                  />
                  <span className="text-base font-medium leading-6 text-ink-700 dark:text-gray-200">
                    {check}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={200}>
            <BookingForm />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
