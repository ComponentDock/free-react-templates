import { CheckCircle2 } from 'lucide-react'
import { TRUST } from '../data'

/* Trust section recreated from the ColorLib "Cloud83" about block: a light
   band with the "The only ones / We Generate Trust" title, a photo, an
   intro paragraph, and a four-item checklist with brand-green check icons. */

export function Trust() {
  return (
    <section id="about-section" className="bg-light py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img
          src={TRUST.image}
          alt="Stratus team working together"
          className="w-full rounded-[5px] object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-[16px] text-body">{TRUST.sub}</p>
          <h2 className="mt-2 text-[40px] font-bold text-heading">{TRUST.heading}</h2>
          <p className="mt-6 text-[16px] leading-relaxed text-body">{TRUST.intro}</p>
          <ul className="mt-8 space-y-4">
            {TRUST.checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[16px] text-heading">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
