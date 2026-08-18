import { Phone } from 'lucide-react'
import { CONSULT_PHONE, CTA } from '../data'

export function CtaBand() {
  return (
    <section id="contact" aria-label="Contact call to action" className="bg-cta">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-4 py-10 lg:flex-row lg:gap-4">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-2xl font-normal text-brand">{CTA.heading}</h2>
          <p className="mt-3 text-2xl text-ink">{CTA.quote}</p>
          <p className="mt-4 text-base font-light leading-relaxed text-ink/80">{CTA.blurb}</p>
          <a
            href={CTA.buttonHref}
            className="mt-7 inline-block bg-brand px-10 py-4 text-lg text-white transition-colors hover:bg-accent"
          >
            {CTA.button}
          </a>
        </div>
        <div className="text-center lg:text-right">
          <p className="text-base text-ink/70">{CTA.callLabel}</p>
          <p className="mt-2 flex items-center justify-center gap-3 text-3xl text-ink lg:justify-end">
            <Phone className="h-8 w-8 text-brand" aria-hidden="true" />
            {CONSULT_PHONE}
          </p>
        </div>
      </div>
    </section>
  )
}
