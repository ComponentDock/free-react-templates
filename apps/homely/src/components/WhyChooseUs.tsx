import { Clock, Percent, ShieldCheck, Zap } from 'lucide-react'
import { WHY_CHOOSE_US } from '../data'
import { SectionTitle } from './SectionTitle'

const ICONS = [Zap, ShieldCheck, Clock, Percent]

/* Second services band on the soft green surface: four centered feature
   cards ("Why choose us?"). */
export function WhyChooseUs() {
  return (
    <section aria-label="Why choose us" className="bg-soft py-[110px]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title={WHY_CHOOSE_US.title} subtitle={WHY_CHOOSE_US.subtitle} />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.items.map((item, index) => {
            const Icon = ICONS[index]!
            return (
              <article key={item.title} className="text-center">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="mx-auto mb-4 size-10 text-brand"
                />
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm leading-[1.7] text-body">{item.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
