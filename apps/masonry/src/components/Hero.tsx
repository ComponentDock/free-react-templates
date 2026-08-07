import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Building for Society
          </p>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-tight text-ink dark:text-white sm:text-6xl">
            Precise Created Only For You
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-mist dark:text-gray-400">
            If you are looking at blank cassettes on the web, you are at the right place. We design
            precise architecture with care — from concept sketches to the final brick.
          </p>
          <Button
            size="lg"
            className="mt-10 rounded-none bg-brand px-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
          >
            Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/seed/astral-hero-1/420/520"
            alt="Modern concrete architecture facade"
            className="mt-8 h-72 w-full object-cover"
            loading="eager"
          />
          <img
            src="https://picsum.photos/seed/astral-hero-2/420/520"
            alt="Glass and steel building detail"
            className="h-72 w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
