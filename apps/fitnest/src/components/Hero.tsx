import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/yoga-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-dark-bg/70" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">
          Welcome to Fitnest
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          What hurts today makes you stronger tomorrow
        </h1>
        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
        >
          Discover More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
