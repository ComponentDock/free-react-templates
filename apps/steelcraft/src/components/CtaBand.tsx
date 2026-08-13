import { ArrowRight } from 'lucide-react'
import { cta } from '../data'

/** Dark call-to-action band with a 5px brand-red top border, white heading,
 *  paragraph and a flat red Contact Us button anchored to the footer. */
export function CtaBand() {
  return (
    <section className="border-t-[5px] border-brand bg-ink py-20 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-4xl font-normal leading-tight text-white">{cta.heading}</h2>
        <p className="mt-4 text-white/70">{cta.paragraph}</p>
        <a
          href={cta.href}
          className="mt-8 inline-flex items-center bg-brand px-[33px] py-[21px] text-lg text-white transition-colors hover:bg-[#c41212]"
        >
          {cta.cta}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
