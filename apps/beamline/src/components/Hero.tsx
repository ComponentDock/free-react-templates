import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[620px] items-center bg-coal">
      <img
        src="https://picsum.photos/seed/beamline-hero/1600/900"
        alt="Underside of a modern white geometric roof against the sky"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-coal/80 via-coal/50 to-coal/30" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <h1 className="max-w-2xl text-4xl font-extralight leading-tight text-white sm:text-6xl">
          Modern Innovative Architecture
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light text-white/85">
          From as low as $20. A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Explore Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-paper"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
              <Play className="h-4 w-4" aria-hidden="true" fill="currentColor" />
            </span>
            Watch our video
          </a>
        </div>
      </div>
    </section>
  )
}
