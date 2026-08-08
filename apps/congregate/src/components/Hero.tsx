import { ArrowDown, ArrowRight, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-charcoal-900">
      <img
        src="https://picsum.photos/seed/congregate-1/1920/1080"
        alt="Hands holding an open Bible"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Everyone is welcome here.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-300">
          Whether you&apos;re exploring faith for the first time or looking for a church home, you
          belong at Congregate.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <ButtonLink
            href="#service-times"
            className="rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-white hover:bg-amber-600"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
            Plan Your Visit
          </ButtonLink>
          <a
            href="#watch"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Watch Online
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#service-times"
          className="mt-16 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-white"
        >
          Scroll
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
