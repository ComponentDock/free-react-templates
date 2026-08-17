import { CTA_BAND } from '../data'
import { PillLink } from './Pill'

/* CtaBand — near-black band with a white headline and an orange pill. */
export function CtaBand() {
  return (
    <section aria-label="Call to action" id="contact" className="bg-night py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="font-display text-[30px] font-semibold text-white">{CTA_BAND.heading}</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">{CTA_BAND.text}</p>
        </div>
        <PillLink href="#contact" className="shrink-0">
          {CTA_BAND.ctaLabel}
        </PillLink>
      </div>
    </section>
  )
}
