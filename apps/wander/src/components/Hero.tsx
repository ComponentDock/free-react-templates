import { Play } from 'lucide-react'
import { hero } from '../data'

/* Reference: .site-hero.overlay — full-viewport background photo with a
   solid rgba(0,0,0,.2) overlay, centered 80px Abril Fatface headline,
   30px weight-200 subheading (with a bordered "Component Dock" link), a
   ghost outline CTA and a bottom-center scroll-down link (rotated play
   icon + uppercase label) anchored to the Welcome section. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.photo})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-display text-[64px] leading-none text-white lg:text-[80px]">
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-[30px] font-extralight leading-[1.5] text-white">
          {hero.subheading.pre}
          <a
            href={hero.ctaHref}
            className="border-b-2 border-white/50 text-white/50 transition-colors hover:border-white hover:text-white"
          >
            {hero.subheading.link}
          </a>
          {hero.subheading.post}
        </p>
        <a
          href={hero.ctaHref}
          className="mt-8 inline-block rounded border-2 border-white px-8 py-3 text-[15px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-brand hover:bg-brand"
        >
          {hero.ctaLabel.toUpperCase()}
        </a>
      </div>
      <a
        href="#welcome"
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-center text-xs uppercase tracking-[0.3em] text-white/80 transition-colors hover:text-white"
      >
        <span className="block rotate-90">
          <Play className="h-[13px] w-[13px]" aria-hidden="true" />
        </span>
        <span className="mt-1">{hero.scrollLabel}</span>
      </a>
    </section>
  )
}
