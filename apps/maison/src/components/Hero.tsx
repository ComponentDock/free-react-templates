import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/maison-hero/720/640"
          alt="Maison featured design"
          className="aspect-[9/8] w-full object-cover"
          loading="eager"
        />
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-dark">
            Precise Concept design
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink dark:text-white sm:text-6xl">
            Precise Concept design for <span className="text-brand">Posh living</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist dark:text-white/60">
            If you are looking at blank cassettes on the web, you may be very confused at the
            difference in price. You may see some for as low as $17 each.
          </p>
          <ButtonLink
            href="#projects"
            className="mt-8 rounded-none bg-brand px-8 py-4 text-sm font-bold uppercase text-ink transition-colors hover:bg-brand-dark"
          >
            Learn More About Precise Design <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
