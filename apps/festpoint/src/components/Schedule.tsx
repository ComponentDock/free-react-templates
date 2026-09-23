import { useState } from 'react'
import { Clock, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

type Session = { time: string; title: string; speaker: string; location: string }

const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4'] as const
type Day = (typeof days)[number]

const schedule: Record<Day, Session[]> = {
  'Day 1': [
    {
      time: '09:00 — 10:00',
      title: 'Opening Keynote',
      speaker: 'John Adams',
      location: 'Main Hall',
    },
    {
      time: '10:30 — 12:00',
      title: 'Web Performance Deep Dive',
      speaker: 'Paul George',
      location: 'Room A',
    },
    {
      time: '14:00 — 15:30',
      title: 'Design Systems at Scale',
      speaker: 'Angelie Crawford',
      location: 'Room B',
    },
  ],
  'Day 2': [
    {
      time: '09:00 — 10:00',
      title: 'AI in Production',
      speaker: 'James Smith',
      location: 'Main Hall',
    },
    {
      time: '10:30 — 12:00',
      title: 'React Server Components',
      speaker: 'John Adams',
      location: 'Room A',
    },
    {
      time: '14:00 — 15:30',
      title: 'Accessibility Workshop',
      speaker: 'Paul George',
      location: 'Room B',
    },
  ],
  'Day 3': [
    {
      time: '09:00 — 10:00',
      title: 'Cloud Native Patterns',
      speaker: 'James Smith',
      location: 'Main Hall',
    },
    {
      time: '10:30 — 12:00',
      title: 'TypeScript Advanced Types',
      speaker: 'Angelie Crawford',
      location: 'Room A',
    },
  ],
  'Day 4': [
    {
      time: '09:00 — 10:00',
      title: 'Panel Discussion',
      speaker: 'All Speakers',
      location: 'Main Hall',
    },
    {
      time: '11:00 — 12:00',
      title: 'Closing Ceremony',
      speaker: 'Organizers',
      location: 'Main Hall',
    },
  ],
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<Day>(days[0])

  return (
    <section id="schedule" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fest-400">
            Schedule
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Event <span className="text-fest-400">Schedule</span>
          </h2>
        </div>

        {/* Day tabs */}
        <div className="mb-8 flex justify-center gap-2">
          {days.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setActiveDay(day)}
              className={cn(
                'rounded px-6 py-2 text-sm font-semibold transition-colors',
                activeDay === day
                  ? 'bg-fest-400 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              )}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Sessions */}
        <div className="space-y-4">
          {schedule[activeDay].map((session: Session) => (
            <div
              key={session.title}
              className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-fest-100 text-fest-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                  <p className="text-sm text-gray-500">
                    by <span className="font-medium text-gray-700">{session.speaker}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 sm:flex-col sm:items-end">
                <span>{session.time}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {session.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
