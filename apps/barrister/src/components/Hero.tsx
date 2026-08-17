import { HERO } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

/* Hero — full-width photo background under a dark slate overlay, gold
   uppercase kicker, white serif headline, gold-outline CTA, and a thin
   gold vertical rule accent at the bottom-left. */
export function Hero() {
  return (
    <section
      id="home-section"
      aria-label="Hero"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate py-40"
    >
      <img
        src={HERO.photo}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate/90" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand">
          {HERO.kicker}
        </p>
        <h1 className="mt-6 font-display text-[34px] font-bold leading-tight text-white md:text-5xl">
          {HERO.headline}
        </h1>
        <ButtonLink
          href="#services-section"
          className="mt-8 rounded border border-brand px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-brand transition-colors hover:bg-brand hover:text-black"
        >
          {HERO.button}
        </ButtonLink>
      </div>
      <div className="absolute bottom-0 left-4 h-[100px] w-px bg-brand" aria-hidden="true" />
    </section>
  )
}