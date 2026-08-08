import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-white py-24 dark:bg-gray-950 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/villa-1/720/640"
          alt="Villa featured design"
          className="aspect-[9/8] w-full rounded-3xl object-cover shadow-xl"
          loading="eager"
        />
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-dark">
            Villa Interior Studio
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-ink dark:text-white sm:text-6xl">
            Design with <span className="text-brand">love</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist dark:text-white/60">
            Inappropriate behavior is often laughed off as “boys will be boys,” women face higher
            conduct standards – especially in the workplace.
          </p>
          <Button
            className="mt-8 rounded-full bg-brand px-8 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            size="lg"
          >
            Get Started <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
