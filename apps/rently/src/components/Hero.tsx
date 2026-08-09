import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/rently-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-coal/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-40">
        <div className="max-w-2xl text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Premium car rental
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Fast &amp; Easy Way To <span className="text-brand">Rent A Car</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <button
            type="button"
            aria-label="Play intro video"
            className="mt-10 inline-flex items-center gap-4 text-left"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-105">
              <Play className="ml-0.5 h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Easy steps for renting a car
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
