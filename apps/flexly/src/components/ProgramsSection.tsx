import { useState } from 'react'
import {
  Activity,
  Bike,
  Dumbbell,
  Flame,
  Heart,
  PersonStanding,
  Target,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { PROGRAMS } from '../data'
import { cn } from '@free-react-templates/ui'

const PROGRAM_ICONS: LucideIcon[] = [
  Dumbbell,
  Heart,
  Zap,
  Flame,
  Activity,
  PersonStanding,
  Bike,
  Target,
]

/* Programs — light section with a vertical pill-nav list of eight
   programs; the active tab's panel (title + paragraph) shows on the
   right. Accessible tablist pattern. */
export function ProgramsSection() {
  const [active, setActive] = useState(0)
  const program = PROGRAMS[active]!

  return (
    <section id="programs-section" aria-label="Programs" className="bg-light py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3">
        <div
          role="tablist"
          aria-label="Programs list"
          aria-orientation="vertical"
          className="flex flex-col gap-1"
        >
          {PROGRAMS.map((item, i) => {
            const Icon = PROGRAM_ICONS[i]!
            return (
              <button
                key={item.label}
                type="button"
                role="tab"
                id={`program-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`program-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  'flex items-center gap-3 rounded-full px-5 py-3 text-left text-[14px] font-bold transition-colors',
                  i === active ? 'bg-brand text-white' : 'bg-white text-black hover:bg-brand/10',
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
                {item.label}
              </button>
            )
          })}
        </div>

        <div className="md:col-span-2">
          <div
            role="tabpanel"
            id={`program-panel-${active}`}
            aria-labelledby={`program-tab-${active}`}
            className="rounded-lg bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-black">{program.title}</h3>
            <p className="mt-4 leading-relaxed text-black/70">{program.text}</p>
            <a
              href="#contact-section"
              className="mt-6 inline-block rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand/80"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
