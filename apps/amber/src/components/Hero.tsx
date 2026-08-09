import { Clock } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/amber-hero/1600/900"
          alt="Barber at work in the chair"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-gold">
            Barber Shop
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Best Barber in your Town
          </h1>
          <p className="mt-6 flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-white/80">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Professional Care
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
          </p>
        </div>

        <div className="mt-12 max-w-sm rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur dark:bg-gray-950/95">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold uppercase tracking-wide text-ink dark:text-white">
            <Clock className="h-5 w-5 text-brand" aria-hidden="true" />
            Opening Hour
          </h2>
          <dl className="mt-5 space-y-3 text-sm text-mist dark:text-gray-400">
            <div className="flex items-center justify-between border-b border-dashed border-gray-200 pb-3 dark:border-gray-800">
              <dt>Mon-Fri (9.00-11.00)</dt>
              <dd className="font-semibold text-ink dark:text-white">9.00 - 11.00</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Sat (10.00-4.00)</dt>
              <dd className="font-semibold text-ink dark:text-white">10.00 - 4.00</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
