import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          Beautiful Carousel Showcase
        </h1>
        <p className="mt-6 mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
          Explore stunning travel destinations through an interactive carousel experience. Smooth
          transitions, thumbnail navigation, and captivating imagery — all in one elegant package.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#carousel"
            variant="primary"
            size="md"
            className="group inline-flex items-center gap-2"
          >
            Explore Carousel
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </ButtonLink>
          <ButtonLink href="#features" variant="outline" size="md">
            View Features
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
