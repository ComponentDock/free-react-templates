import { cta } from '../data'

/** Call to action section with background image, heading, and button. */
export function CallToAction() {
  return (
    <section className="relative py-24" data-testid="cta">
      {/* Background */}
      <img
        src={cta.background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="mb-8 text-3xl font-bold leading-snug text-white md:text-4xl">
          {cta.heading}
        </h2>
        <button
          type="button"
          className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-white hover:text-navy"
        >
          {cta.button}
        </button>
      </div>
    </section>
  )
}
