import { Check } from 'lucide-react'
import { WHY_US, WHY_US_IMAGE } from '../data'
import { SectionHeading } from './SectionHeading'

/* Why Us — bordered section: orange-checkmark checklist beside an image
   block (cover background). */
export function WhyUs() {
  return (
    <section id="why-us" className="border-t border-[#e9ecef] bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Why Us"
              blurb="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            />
            <ul className="space-y-5">
              {WHY_US.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Check aria-hidden="true" className="h-4 w-4 text-brand" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            role="img"
            aria-label="Why choose Haulage"
            className="min-h-[320px] rounded bg-cover bg-center"
            style={{ backgroundImage: `url('${WHY_US_IMAGE}')` }}
          />
        </div>
      </div>
    </section>
  )
}
