import { Briefcase, ClipboardCheck, Globe, Search, ShieldCheck, TrendingUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { whyChooseUs, type WhyIcon } from '../data'

const iconMap: Record<WhyIcon, typeof Briefcase> = {
  search: Search,
  briefcase: Briefcase,
  shield: ShieldCheck,
  globe: Globe,
  clipboard: ClipboardCheck,
  trending: TrendingUp,
}

/** Why Choose Us? (source: .ftco-section — subheading "Services" + 6 icon
 *  items in a 3-column grid): Business Analysis · Business Consulting ·
 *  Business Insurance · Global Investigation · Audit & Evaluation ·
 *  Marketing Strategy. */
export function WhyChooseUs() {
  return (
    <section id="services" aria-label="Why Choose Us" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-bold uppercase tracking-[2px] text-brand">
          {whyChooseUs.subheading}
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ink lg:text-4xl">
          {whyChooseUs.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
          {whyChooseUs.intro}
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className={cn('mt-5 text-lg font-semibold text-ink')}>{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
