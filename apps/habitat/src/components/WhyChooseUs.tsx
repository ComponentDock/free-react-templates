import { Check } from 'lucide-react'
import { whyUs } from '../data'

/* Reference: section.services-section — two-column split: left h2 "Why
   choose homes?" (navy 500) + "Because we we are the best in the
   business." (36px #6f6f8a) + paragraph; right a six-item check list. */
export function WhyChooseUs() {
  return (
    <section aria-label="Why choose us" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-[36px] font-normal leading-[1.3] text-muted">
            <span className="font-medium text-navy">{whyUs.headingTop}</span>
            <br />
            {whyUs.headingBottom}
          </h2>
          <p className="mt-6 leading-relaxed">{whyUs.text}</p>
        </div>
        <ul className="grid content-center gap-4">
          {whyUs.points.map((point) => (
            <li key={point.slice(0, 24)} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                <Check size={14} aria-hidden="true" />
              </span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
