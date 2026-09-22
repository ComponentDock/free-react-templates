import { PROMO } from '../data'

/** Promo — full-width parallax background with promotional heading,
    Book Now button, and countdown text. */
export function Promo() {
  return (
    <section
      className="relative flex min-h-[400px] items-center justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${PROMO.image})` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">{PROMO.heading}</h2>
        <p className="mt-4 text-lg text-white/80">{PROMO.countdown}</p>
        <button
          type="button"
          className="mt-8 rounded bg-brand px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          {PROMO.buttonLabel}
        </button>
      </div>
    </section>
  )
}
