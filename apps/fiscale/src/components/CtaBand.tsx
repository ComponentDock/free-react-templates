import { CTA } from '../data'
import { PillLink } from './Pill'

/* CTA band — solid brand-blue band with a white headline and a translucent
   white pill button. */
export function CtaBand() {
  return (
    <section aria-label="Call to action" className="bg-accent py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <h2 className="font-display text-3xl font-bold text-white">{CTA.heading}</h2>
          <p className="mt-2 leading-relaxed text-white/50">{CTA.subtext}</p>
        </div>
        <PillLink href="#contact-section" variant="white">
          {CTA.buttonLabel}
        </PillLink>
      </div>
    </section>
  )
}
