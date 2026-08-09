import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-brand-soft transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Welcome to Terra
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl dark:text-white">
            Beauty &amp; Spa Wellness
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
          <ButtonLink href="#contact" variant="primary" className="mt-8 rounded-full px-8">
            Make An Appointment <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/terra-hero/560/640"
            alt="Spa wellness treatment"
            className="w-full max-w-md rounded-3xl object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
