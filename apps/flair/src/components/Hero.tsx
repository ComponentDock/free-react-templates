import { Play } from 'lucide-react'
import { HERO, IMAGES } from '../data'

/* Hero — the 900px full-height photo hero with the dark navy overlay, the
   "Watch The Overview" video link (play glyph in a white circle), the 48px
   white headline and the gradient-framed About Us / Get a quote CTAs. */
export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative z-10 flex h-[900px] w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${IMAGES.hero}')` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(4,8,29,0.7)]" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <a
          href={HERO.videoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center text-white"
        >
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
            <Play aria-hidden="true" className="h-3 w-3 fill-accent text-accent" />
          </span>
          <span className="mt-2 text-[12px] font-medium uppercase tracking-[2px]">
            {HERO.videoLabel}
          </span>
          <span aria-hidden="true" className="mt-2 block h-[2px] w-[70px] bg-white" />
        </a>
        <h1 className="mt-[30px] max-w-[820px] text-[32px] font-bold leading-[1.2] text-white lg:text-[48px]">
          {HERO.headline}
        </h1>
        <div className="mt-[50px] flex flex-wrap items-center justify-center gap-4">
          <a href="#about" className="fancy-btn fancy-btn-active">
            {HERO.aboutLabel}
          </a>
          <a href="#contact" className="fancy-btn">
            {HERO.quoteLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
