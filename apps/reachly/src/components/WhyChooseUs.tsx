import { Quote } from 'lucide-react'
import { whyChooseUs } from '../data'

/* Why Choose Us (source: section.about-low-area — heading row with a
   right-aligned "Explore More" underline link above a border-bottom
   divider, then two numbered stats (450+ / 860), a body paragraph and a
   staff quote with an icon). */
export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-[120px]">
      <div className="mx-auto max-w-[1200px] px-[15px]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-6 border-b border-gray-200 pb-[25px]">
          <div>
            <span className="mb-[18px] block text-[13px] font-medium uppercase tracking-[0.1em] text-brand">
              {whyChooseUs.kicker}
            </span>
            <h2 className="max-w-xl font-heading text-[36px] font-bold leading-snug text-navy">
              {whyChooseUs.heading}
            </h2>
          </div>
          <a
            href="#about"
            className="relative pb-1 text-base font-medium text-navy transition-all hover:tracking-[1px] hover:text-brand after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {whyChooseUs.exploreLabel}
          </a>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="grid gap-10 sm:grid-cols-2">
            {whyChooseUs.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-bold text-ink">
                  {stat.value}
                  {stat.suffix}
                </p>
                <h3 className="mt-2 text-2xl text-ink">{stat.label}</h3>
              </div>
            ))}
          </div>
          <div>
            <p className="text-base leading-[1.8] text-copy">{whyChooseUs.paragraph}</p>
            <blockquote className="mt-6 flex gap-3">
              <Quote className="h-8 w-8 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-lg italic text-navy">{whyChooseUs.quote}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
