import { Award, Gavel, Landmark, ShieldCheck } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { WHY_US, type CourtIcon } from '../data'

/* Court-themed icon cards — the source uses a flaticon font (Court Mace,
   Court Building, Crime, Authority Badge); lucide-react's closest court
   glyphs are used instead. */
const ICONS: Record<CourtIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  gavel: Gavel,
  landmark: Landmark,
  shield: ShieldCheck,
  badge: Award,
}

/* Why Us — gold kicker + heading paragraph block, a right-aligned intro
   paragraph, and a four-column row of court-themed icon cards. */
export function WhyUs() {
  return (
    <section aria-label="Why Us" className="px-4 pb-24 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-brand">
            {WHY_US.kicker}
          </p>
          <h3 className="mt-4 text-lg leading-relaxed text-ink">{WHY_US.heading}</h3>
        </div>

        <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:items-center">
          <p className="text-leading-relaxed text-muted lg:w-1/3 lg:text-right">
            {WHY_US.intro}
          </p>
          <ul className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-4">
            {WHY_US.items.map((item) => {
              const Icon = ICONS[item.icon]
              return (
                <li key={item.label} className="text-center">
                  <Icon
                    className="mx-auto h-12 w-12 text-brand"
                    aria-label={`${item.label} icon`}
                  />
                  <h4 className="mt-4 text-lg font-semibold text-slate">{item.label}</h4>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}