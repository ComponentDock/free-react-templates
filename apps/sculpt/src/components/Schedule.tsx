import { useState } from 'react'
import {
  Dumbbell,
  Flame,
  Flower2,
  HeartPulse,
  PersonStanding,
  Target,
  Waves,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { DAILY_CLASSES, WEEK_DAYS, type ClassIconName } from '../data'
import { SectionHeading } from './SectionHeading'

const CLASS_ICONS: Record<ClassIconName, LucideIcon> = {
  'heart-pulse': HeartPulse,
  flame: Flame,
  'flower-2': Flower2,
  zap: Zap,
  target: Target,
  dumbbell: Dumbbell,
  waves: Waves,
  'person-standing': PersonStanding,
}

/**
 * Schedule — light-grey section with white pill weekday tabs (active day
 * filled brand orange) and a grid of eight daily classes with an orange
 * icon, the time (orange underline), program name, and trainer.
 */
export function Schedule() {
  const [activeDay, setActiveDay] = useState(WEEK_DAYS[0]!)

  return (
    <section id="schedule" aria-label="Class schedule" className="bg-light py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Our Class Schedule"
          intro="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-1 rounded-full bg-white p-1">
          {WEEK_DAYS.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setActiveDay(day)}
              aria-pressed={day === activeDay}
              className={`rounded-full px-5 py-2 text-sm transition-colors ${
                day === activeDay
                  ? 'bg-brand text-white'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="mt-10 border-b border-[#d9d9d9]">
          {DAILY_CLASSES.map((entry) => {
            const Icon = CLASS_ICONS[entry.icon]!
            return (
              <div
                key={`${activeDay}-${entry.program}`}
                className="flex flex-col border-b border-[#d9d9d9] py-6 text-center sm:flex-row sm:items-center"
              >
                <div className="sm:w-1/6">
                  <Icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
                </div>
                <div className="sm:w-1/6">
                  <span className="border-b border-brand px-4 py-1 text-xs text-ink">
                    {entry.time}
                  </span>
                </div>
                <div className="sm:w-1/6">
                  <h3 className="text-lg font-light text-ink">{entry.program}</h3>
                </div>
                <div className="sm:w-1/6">
                  <p className="text-[13px] text-ink">{entry.trainer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
