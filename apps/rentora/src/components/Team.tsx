import { CheckCircle, PaintBucket, Ruler } from 'lucide-react'
import { TEAM } from '../data'

const CHECK_ICONS = {
  paint: PaintBucket,
  check: CheckCircle,
  ruler: Ruler,
} as const

/* Team (source: section.team_part — photo-left split with a family photo
   on a warm block, heading with a gold underline, three icon checklist
   items, and a gold "Read More" button). */
export function Team() {
  return (
    <section id="about" aria-label="About the team" className="relative bg-white py-[130px] md:py-[130px]">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-12 px-[15px] lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-6 -top-6 h-full w-full bg-[#e89d67]" aria-hidden="true" />
          <img
            src={TEAM.image}
            alt="Family standing in front of their new home"
            className="relative z-10 h-[460px] w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="relative pb-4 text-[40px] font-bold leading-[1.25] text-ink">
            {TEAM.heading}
            <span
              className="absolute bottom-0 left-0 h-[2px] w-[90px] bg-brand"
              aria-hidden="true"
            />
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-gray-600">{TEAM.blurb}</p>

          <ul className="mt-8 space-y-4">
            {TEAM.checklist.map((item) => {
              const Icon = CHECK_ICONS[item.icon as keyof typeof CHECK_ICONS]
              return (
                <li key={item.text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-[15px] capitalize text-ink">{item.text}</span>
                </li>
              )
            })}
          </ul>

          <a
            href="#properties"
            className="mt-8 inline-block bg-brand px-[42px] py-[10px] text-[15px] font-medium capitalize text-white transition-colors hover:bg-brand-hover"
          >
            {TEAM.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
