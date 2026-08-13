import { Play } from 'lucide-react'
import { hero } from '../data'

/** Hero cover (reference `.hero-wrap.js-fullheight`): fullscreen background
 *  photo with a 40% black overlay, a right-positioned column with the white
 *  56px headline, 20px subtext, and a circular play button + "Watch Games". */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center bg-slate"
    >
      <img
        src={hero.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="ml-auto max-w-2xl">
          <h1 className="text-4xl leading-tight font-bold text-white md:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-5 text-xl text-white/80">{hero.subtext}</p>
          <p className="mt-8 flex items-center gap-3">
            <a
              href="#games"
              aria-label={hero.watchLabel}
              className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gold"
            >
              <Play className="h-6 w-6" aria-hidden="true" />
            </a>
            <span className="text-lg text-white">{hero.watchLabel}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
