import { HERO_IMAGE } from '../data'

/* Hero (source: section.site-hero.overlay — full-viewport background photo
   with a dark overlay, centered white serif headline and a mouse scroll
   indicator). The floating booking bar is rendered right after and pulled up
   over the hero's bottom edge. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center px-4 pt-24 text-center">
        <h1 className="font-display text-5xl font-bold text-white md:text-6xl">
          Stay With Us &amp; Relax
        </h1>
        <a
          href="#about"
          aria-label="Scroll to the about section"
          className="mt-14 block rounded-full p-2 transition-colors hover:bg-white/10"
        >
          <span className="flex h-10 w-7 items-start justify-center rounded-3xl border-2 border-white/70 pt-2">
            <span className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
          </span>
        </a>
      </div>
    </section>
  )
}
