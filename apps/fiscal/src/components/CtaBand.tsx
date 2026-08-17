import { ButtonLink } from '@free-react-templates/ui'
import { CTA } from '../data'

/* CtaBand — full-width photo band with a dark overlay, white heading and
   copy, and a solid pill Contact us button. */
export function CtaBand() {
  return (
    <section
      id="cta-section"
      aria-label="Call to action"
      className="relative bg-cover bg-center px-4 py-32"
      style={{ backgroundImage: `url(${CTA.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold uppercase text-white md:text-4xl">
          {CTA.heading}
        </h2>
        <p className="mt-4 leading-relaxed text-white/90">{CTA.text}</p>
        <ButtonLink
          href="#contact-section"
          className="mt-8 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          {CTA.buttonLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
