import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/confetti-hero/1600/900"
          alt="Conference venue"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:py-44">
        <div className="max-w-2xl">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Committed to success
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Digital Conference For Designers
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#"
              className="rounded bg-brand px-8 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              Download
            </a>
            <button
              type="button"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-brand"
              aria-label="Play video"
            >
              <Play className="h-6 w-6" fill="currentColor" />
            </button>
            <span className="hidden text-sm text-white/80 sm:block">
              Story Video
              <br />
              Watch
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
