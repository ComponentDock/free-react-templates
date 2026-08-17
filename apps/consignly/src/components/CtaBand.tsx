import { ButtonLink } from '@free-react-templates/ui'
import { CTA } from '../data'

/* CTA band — full-width photo with a navy overlay and a Get started
   button. */
export function CtaBand() {
  return (
    <section
      aria-label="Call to action"
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-40"
      style={{ backgroundImage: `url(${CTA.image})` }}
    >
      <div className="absolute inset-0 bg-brand/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-4xl font-bold leading-snug text-white md:text-5xl">
          {CTA.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/90">{CTA.text}</p>
        <ButtonLink
          href="#about"
          className="mt-8 rounded bg-brand px-10 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          {CTA.buttonLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
