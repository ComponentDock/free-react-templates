import { nextMatch } from '../data'

/** PromoBanner: rounded photographic banner with a yellow overlay and a
 *  fixed/parallax background treatment. */
export function PromoBanner() {
  return (
    <div
      className="relative mt-12 overflow-hidden rounded-2xl bg-cover bg-fixed bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sideline-promo/1600/500)' }}
    >
      <div className="absolute inset-0 bg-[rgba(238,198,10,0.9)]" aria-hidden="true" />
      <div className="relative px-6 py-16 text-center">
        <p className="text-sm font-light uppercase tracking-[0.25em] text-black/80">
          {nextMatch.league}
        </p>
        <h3 className="mt-2 text-2xl font-bold uppercase text-black md:text-4xl">
          {nextMatch.home} vs {nextMatch.away}
        </h3>
        <p className="mt-2 text-sm uppercase tracking-widest text-black/80">
          {nextMatch.date} — {nextMatch.time}
        </p>
      </div>
    </div>
  )
}
