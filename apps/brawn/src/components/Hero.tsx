import { Play } from 'lucide-react'
import { HERO, VIDEO_URL } from '../content'

/**
 * One static 100vh band (the reference's `.home-slider` is bound in script but
 * the markup holds a single slide), 40% black wash over the photo, an 80 px
 * uppercase headline and the 60 px white play disc.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Best fitness in the city"
      data-band="hero"
      className="relative flex h-screen min-h-[700px] items-center justify-center bg-cover bg-top"
      style={{ backgroundImage: `url(${HERO.image})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-[855px] px-4 text-center text-white">
        <h1 className="font-display text-[40px] leading-[48px] font-bold text-white uppercase md:text-[80px] md:leading-[96px]">
          {HERO.headline}
        </h1>
        <div className="mt-[30px] flex flex-col items-center gap-6">
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={HERO.playLabel}
            className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-ink transition-all duration-300 hover:h-20 hover:w-20"
          >
            <Play aria-hidden="true" className="h-5 w-5 fill-current" />
          </a>
          <span className="text-[1.05rem] text-white">{HERO.playCaption}</span>
        </div>
      </div>
    </section>
  )
}
