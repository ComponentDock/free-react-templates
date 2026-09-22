import { useState } from 'react'
import {
  HeartPulse,
  Dumbbell,
  Swords,
  Shield,
  PersonStanding,
  Bike,
  Waves,
  Flame,
} from 'lucide-react'
import { daysOfWeek, scheduleEntries, scheduleTitle, scheduleSubtitle } from '../data'
import { cn } from '@free-react-templates/ui'

const iconMap = {
  'heart-pulse': HeartPulse,
  dumbbell: Dumbbell,
  swords: Swords,
  shield: Shield,
  'person-standing': PersonStanding,
  bike: Bike,
  waves: Waves,
  flame: Flame,
} as const

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="schedule-section" aria-label="Schedule" className="bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink">{scheduleTitle}</h2>
          <p className="mt-4 text-body">{scheduleSubtitle}</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {daysOfWeek.map((day, i) => (
            <button
              key={day}
              type="button"
              aria-pressed={i === activeDay}
              onClick={() => setActiveDay(i)}
              className={cn(
                'rounded px-4 py-2 text-sm font-medium transition-colors',
                i === activeDay ? 'bg-brand text-white' : 'bg-white text-ink hover:bg-brand/10',
              )}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {scheduleEntries.map((entry, idx) => {
            const Icon = iconMap[entry.icon]
            return (
              <div
                key={`${activeDay}-${idx}`}
                className="rounded bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-3 text-xs font-medium text-muted">{entry.time}</p>
                <h3 className="mt-1 text-lg font-bold text-ink">{entry.title}</h3>
                <p className="mt-1 text-sm text-muted">{entry.trainer}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
