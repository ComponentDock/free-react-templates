import { Briefcase, Gavel, Landmark, Users, type LucideIcon } from 'lucide-react'
import { PRACTICE_AREAS, type PracticeArea } from '../data'

const ICONS: Record<PracticeArea['icon'], LucideIcon> = {
  briefcase: Briefcase,
  landmark: Landmark,
  gavel: Gavel,
  users: Users,
}

/**
 * PracticeArea — cream "Practice Area" section (source `.practice_area`):
 * a centered 42px ink title with a muted subtitle, then a 4-across no-gutters
 * photo grid. Hovering a card reveals a near-black rgba(31,31,31,0.9)
 * overlay with a lucide icon, the white 24px practice title, an ipsum line
 * and a gold "Learn More" link.
 */
export function PracticeArea() {
  return (
    <section id="practice" className="bg-warm pb-24 lg:pb-[120px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <h3 className="font-heading text-[32px] leading-[48px] font-bold text-ink lg:text-[42px]">
            Practice Area
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-section-sub">
            Focused expertise across the matters that matter most — from the boardroom to the family
            home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {PRACTICE_AREAS.map((area) => {
            const Icon = ICONS[area.icon]
            return (
              <div key={area.title} className="group relative overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="aspect-square w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(31,31,31,0.9)] px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Icon className="h-9 w-9 text-paper" aria-hidden="true" />
                  <h4 className="mt-2.5 mb-5 font-body text-2xl font-normal text-paper">
                    {area.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-paper/80">{area.copy}</p>
                  <a
                    href="#appointment"
                    className="mt-4 text-base text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
