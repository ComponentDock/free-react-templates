import { BOOKING_CTA } from '../data'

export function BookingCta() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${BOOKING_CTA.image})` }}
    >
      <div className="absolute inset-0 bg-dark/80" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-4xl font-bold text-white">{BOOKING_CTA.heading}</h2>
        <p className="mt-4 text-lg text-white/70">{BOOKING_CTA.text}</p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded bg-brand px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          {BOOKING_CTA.buttonLabel}
        </a>
      </div>
    </section>
  )
}
