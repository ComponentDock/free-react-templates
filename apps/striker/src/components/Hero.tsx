import { hero } from '../data'
import { Countdown } from './Countdown'

/** Hero (reference `.hero.overlay`): photographic background with a dark
 *  overlay, content in the right column — headline, subtext, five-unit
 *  countdown, red "Book Ticket" CTA and a white "Learn More" link. */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
        <div className="ml-auto max-w-xl">
          <h1 className="text-4xl font-bold text-white lg:text-6xl">{hero.headline}</h1>
          <p className="mt-4 leading-relaxed text-white/70">{hero.subtext}</p>

          <Countdown target={hero.target} className="mt-8" />

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#matches"
              className="border-2 border-brand bg-brand px-6 py-3 text-xs font-black uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-transparent"
            >
              {hero.cta}
            </a>
            <a
              href="#news"
              className="text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-brand"
            >
              {hero.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
