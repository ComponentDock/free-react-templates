import { ArrowRight } from 'lucide-react'
import { IMAGES, INTRO } from '../data'
import { greenButton } from './buttonClasses'

/** Intro CTA — full-width photo band under a #222222/50 overlay with a
    green subheading, a white heading with green highlight, and an
    appointment button. */
export function IntroCta() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.appointment})` }}
    >
      <div className="absolute inset-0 bg-dark/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand">
          {INTRO.subheading}
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl text-white sm:text-5xl">
          Get Health and <span className="text-brand">{INTRO.highlight}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70">
          Work one-on-one with a certified nutrition coach to build eating and movement habits that
          stick.
        </p>
        <a href="#appointment" className={`${greenButton} mt-8 gap-2`}>
          {INTRO.cta}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
