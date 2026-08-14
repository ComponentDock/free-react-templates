import { Aperture } from 'lucide-react'
import { HERO } from '../data'

/* Full-viewport hero: darkened background photo, centered brand line,
   uppercase headline, blurb and a ghost-outline "Contact Us" CTA that
   scrolls to the contact section. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO.photo})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl px-6 py-24 text-center">
        <p className="mb-6 flex items-center justify-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          <Aperture aria-hidden="true" className="h-5 w-5" />
          {HERO.brandLine}
          <span className="text-white/70" aria-hidden="true">
            ·
          </span>
          <span className="normal-case tracking-normal text-white/70">{HERO.brandSubtitle}</span>
        </p>
        <h1 className="mb-4 font-serif text-4xl leading-tight font-bold text-white uppercase md:text-6xl">
          {HERO.headlineTop} <br /> {HERO.headlineBottom}
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/90">{HERO.blurb}</p>
        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault()
            document.getElementById('contact')!.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-block border border-white/20 px-5 py-4 text-[10px] font-bold tracking-wider text-muted uppercase transition hover:border-brand hover:bg-brand hover:text-ink"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
