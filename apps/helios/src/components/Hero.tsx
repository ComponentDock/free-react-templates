import { Leaf, Phone, Zap } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'
import { SavingsCalculator } from './SavingsCalculator'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white py-20 lg:py-28 dark:from-primary-950/40 dark:via-gray-950 dark:to-gray-950"
    >
      {/* Floating blurred blobs — soft green tint matching the demo hero */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-800/20"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl dark:bg-accent-700/10"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              <Leaf className="h-4 w-4" aria-hidden="true" />
              Go Solar Today
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Power Your Home With{' '}
              <span className="text-primary-600 dark:text-primary-400">Clean Energy</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600 dark:text-gray-400">
              Harness the power of the sun to reduce your energy bills and protect the environment.
              Our expert team designs, installs, and maintains solar systems for homes and
              businesses across the country.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href="#contact"
                className="px-8 py-3.5 text-base font-semibold shadow-lg shadow-primary-600/25"
              >
                Get Free Quote
              </ButtonLink>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 text-base font-semibold text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                Call (555) 123-4567
              </a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <Zap className="h-4 w-4 text-primary-500" aria-hidden="true" />
              Join 10,000+ homeowners who switched to solar
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <SavingsCalculator />
        </Reveal>
      </div>
    </section>
  )
}
