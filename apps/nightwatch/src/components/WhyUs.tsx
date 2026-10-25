import { cn } from '@free-react-templates/ui'
import { ROSTER, ROSTER_DAYS, ROSTER_RELIEF, WHY_US } from '../content'
import { containerClass, SectionHeading } from './ui'
import { Reveal } from './Reveal'

const CHIP_W = 121.6
const CHIP_H = 60
const GAP = 12
const LEFT = 72
const TOP = 170

/**
 * The reference's single content image is not a photograph — it is a drawn
 * roster of five weeks of cover. Redrawn here as inline SVG: one glance shows
 * the same initials every day, with relief nights marked.
 */
export function RosterPanel() {
  return (
    <svg
      viewBox="0 0 800 600"
      role="img"
      aria-label="Five weeks of cover: the same named crew every night, relief nights marked"
      className="h-auto w-full rounded-2xl"
      data-testid="roster-panel"
    >
      <rect width="800" height="600" rx="16" fill="#0d1522" />
      <rect x="40" y="40" width="720" height="520" rx="12" fill="#162135" />
      <text x="72" y="98" fill="#ffffff" fontSize="26" fontWeight="700" fontFamily="Inter, sans-serif">
        {ROSTER.title}
      </text>

      {ROSTER_DAYS.map((day, column) => (
        <text
          key={day}
          x={LEFT + column * (CHIP_W + GAP) + CHIP_W / 2}
          y="146"
          fill="#65799f"
          fontSize="13"
          fontFamily="'JetBrains Mono', monospace"
          textAnchor="middle"
        >
          {day}
        </text>
      ))}

      {ROSTER_RELIEF.map((week, row) =>
        week.map((relief, column) => (
          <g key={`${row}-${column}`} data-testid="roster-chip" data-relief={relief}>
            <rect
              x={LEFT + column * (CHIP_W + GAP)}
              y={TOP + row * (CHIP_H + GAP)}
              width={CHIP_W}
              height={CHIP_H}
              rx="8"
              fill={relief ? '#22304a' : '#f7c948'}
            />
            <text
              x={LEFT + column * (CHIP_W + GAP) + CHIP_W / 2}
              y={TOP + row * (CHIP_H + GAP) + CHIP_H / 2 + 6}
              fill={relief ? '#65799f' : '#162135'}
              fontSize="17"
              fontWeight="600"
              fontFamily="'JetBrains Mono', monospace"
              textAnchor="middle"
            >
              {relief ? ROSTER.reliefInitials : ROSTER.crewInitials}
            </text>
          </g>
        )),
      )}

      <text x="72" y="566" fill="#65799f" fontSize="13" fontFamily="Inter, sans-serif">
        {ROSTER.footnote}
      </text>
    </svg>
  )
}

export function WhyUs() {
  return (
    <section id="why-us" className="bg-ink-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className={cn(containerClass, 'grid items-center gap-16 lg:grid-cols-2')}>
        <figure className="order-last min-w-0 lg:order-first">
          <Reveal>
            <RosterPanel />
            <figcaption className="mt-3 text-sm leading-5 text-ink-400">{WHY_US.caption}</figcaption>
          </Reveal>
        </figure>

        <div>
          <Reveal delay={120}>
            <SectionHeading title={WHY_US.title} lead={WHY_US.lead} eyebrow={WHY_US.eyebrow} />
            <dl className="mt-8 space-y-6">
              {WHY_US.rules.map((rule) => (
                <div key={rule.title} className="border-l-2 border-primary-600 pl-5">
                  <dt className="text-base leading-6 font-bold text-ink-800 dark:text-white">
                    {rule.title}
                  </dt>
                  <dd className="mt-1 text-base leading-6 text-ink-500">{rule.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
