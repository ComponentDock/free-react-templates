import { useEffect, useState } from 'react'
import { ArrowRight, BadgeCheck, Phone, ShieldCheck } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export const rotatingWords = ['Fast & Reliable', 'Safe & Secure', 'Smooth & Easy'] as const

const heroStats = [
  { value: '25,000+', label: 'Moves Completed' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '15+', label: 'Years Experience' },
  { value: 'Same-Day', label: 'Available' },
] as const

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((index) => (index + 1) % rotatingWords.length)
    }, 2600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-900/40 dark:text-primary-300">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Licensed &amp; Insured in All 50 States
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Moving Made{' '}
            <span key={wordIndex} className="text-gradient">
              {rotatingWords[wordIndex]}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            From local moves to cross-country relocations, our professional team handles every
            detail with care — so you can focus on your new beginning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href="#quote"
              className="rounded-full px-6 py-3 text-sm shadow-lg shadow-primary-600/20"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="tel:+15558901234"
              variant="outline"
              className="rounded-full px-6 py-3 text-sm"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call (555) 890-1234
            </ButtonLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/movere-1/640/560"
            alt="Movere moving crew loading a truck"
            className="w-full rounded-2xl object-cover shadow-xl shadow-primary-900/10"
            width={640}
            height={560}
            loading="lazy"
          />
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-700">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Fully Insured</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">All belongings protected</p>
            </div>
          </div>
          <div
            className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-primary-200/50 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -left-6 -z-10 h-40 w-40 rounded-full bg-accent-200/30 blur-3xl"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
