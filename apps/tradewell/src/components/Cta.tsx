import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section className="bg-white py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-16 text-center sm:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgb(255 255 255 / 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.2) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Start Building Wealth?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Open your free account in minutes. No minimum deposit required. Start investing with
              as little as $1.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink
                href="#pricing"
                className="rounded-xl bg-white px-8 py-3.5 font-semibold text-primary-700 hover:bg-primary-50"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="#pricing"
                variant="outline"
                className="rounded-xl border-white/40 px-8 py-3.5 font-semibold text-white hover:bg-white/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                View Pricing
              </ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-primary-100">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                No account minimums
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                Commission-free trading
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                SIPC insured up to $500K
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
