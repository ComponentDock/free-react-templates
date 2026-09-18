import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/presswell-hero/1600/900"
          alt="Professional laundry service workspace"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Laundry Service
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Quality laundry service in your city
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We take care about the cleanness of your clothes — professional wash, dry cleaning, and
            ironing delivered to your door.
          </p>
          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Explore Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
