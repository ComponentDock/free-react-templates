import { btnBrand, btnWhite } from '../brand'
import { pics } from '../data'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-magenta-500/20 via-transparent to-navy-950"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-36 pb-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/70">
            <span className="h-2 w-2 rounded-full bg-ember-500" aria-hidden="true" />
            Live gaming arena
          </p>
          <h1 className="font-display text-5xl leading-tight text-white uppercase sm:text-6xl lg:text-7xl">
            Best Highlights <span className="text-magenta-500">of the Latest</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
            Join the arena&apos;s best fighters in epic battles, live matches, and non-stop action.
            Watch every clash and rise through the ranks.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#pricing" className={btnBrand}>
              Install Now
            </a>
            <a href="#streams" className={btnWhite}>
              Watch Tutorial
            </a>
          </div>
        </div>
        <img
          src={pics.hero}
          alt="Gaming arena hero"
          className="mx-auto aspect-square w-full max-w-md rounded-full object-cover ring-4 ring-magenta-500/40 lg:max-w-lg"
        />
      </div>
    </section>
  )
}
