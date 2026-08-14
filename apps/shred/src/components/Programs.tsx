import { useState } from 'react'
import {
  Activity,
  Bike,
  Dumbbell,
  Flame,
  HeartPulse,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { PROGRAMS } from '../data'
import { cn } from '@free-react-templates/ui'

const TAB_ICONS: Record<string, LucideIcon> = {
  dumbbell: Dumbbell,
  'heart-pulse': HeartPulse,
  activity: Activity,
  flame: Flame,
  zap: Zap,
  bike: Bike,
  users: Users,
  target: Target,
}

/* Fitness Program — light #f8f9fa section with a coral vertical tab strip
   of eight programs on the left and the active program pane on the right. */
export function Programs() {
  const [active, setActive] = useState(0)
  const program = PROGRAMS[active]!

  return (
    <section id="programs-section" aria-label="Fitness programs" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
            Our Programs
          </span>
          <h2 className="mt-2 text-4xl font-semibold text-black">Fitness Program</h2>
          <p className="mt-4 text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <nav
            role="tablist"
            aria-label="Fitness programs"
            className="flex flex-col bg-brand lg:col-span-2"
          >
            {PROGRAMS.map((item, i) => {
              const Icon = TAB_ICONS[item.icon]!
              const selected = i === active
              return (
                <button
                  key={item.label}
                  role="tab"
                  id={`program-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={`program-panel-${i}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    'flex items-center gap-4 px-6 py-4 text-left text-xl text-white/80 transition-colors',
                    selected && 'bg-white/20 text-white',
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          <div
            id={`program-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`program-tab-${active}`}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-semibold text-black">{program.title}</h3>
            {program.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-mist">
                {paragraph}
              </p>
            ))}
            <a
              href="#schedule-section"
              className="mt-6 inline-flex items-center gap-2 font-bold text-brand transition-colors hover:text-brand-dark"
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
