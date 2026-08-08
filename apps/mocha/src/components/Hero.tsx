import { ArrowDown } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-50 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <p className="font-display text-lg font-semibold italic text-primary-600 dark:text-primary-400">
            Specialty Coffee Roasters
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Crafted with Passion &amp;{' '}
            <span className="italic text-primary-600 dark:text-primary-400">Precision</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            From bean to cup, we obsess over every detail. Experience specialty coffee the way it
            was meant to be — fresh-roasted, expertly brewed, and served with care.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#menu" className="rounded-full px-8 py-4 text-base">
              View Our Menu
            </ButtonLink>
            <ButtonLink
              href="#join"
              variant="outline"
              className="rounded-full border-primary-600 px-8 py-4 text-base text-primary-700 hover:bg-primary-100 hover:text-primary-800 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-gray-800 dark:hover:text-primary-200"
            >
              Order Online
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            className="absolute -inset-10 rounded-full bg-amber-300/60 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="absolute -inset-20 rounded-full bg-primary-100 blur-3xl"
            aria-hidden="true"
          />
          <img
            src="https://picsum.photos/seed/mocha-hero/640/640"
            alt="Barista serving a hand-crafted specialty coffee"
            className="relative aspect-square w-full rounded-full object-cover shadow-xl ring-8 ring-white dark:ring-gray-900"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 pb-8 text-primary-500 dark:text-primary-400">
        <span className="text-xs font-medium uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </div>
    </section>
  )
}
