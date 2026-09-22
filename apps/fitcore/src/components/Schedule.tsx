import { useState } from 'react'

const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

type ClassEntry = { time: string; name: string; instructor: string }

const scheduleData: Record<string, ClassEntry[]> = {
  Saturday: [
    { time: '6:00 AM – 8:00 AM', name: 'Kick Boxing', instructor: 'Jordan Blake' },
    { time: '8:00 AM – 10:00 AM', name: 'CrossFit', instructor: 'Casey Rivera' },
    { time: '10:00 AM – 12:00 PM', name: 'Yoga Flow', instructor: 'Morgan Hayes' },
  ],
  Sunday: [
    { time: '7:00 AM – 9:00 AM', name: 'Morning Stretch', instructor: 'Morgan Hayes' },
    { time: '9:00 AM – 11:00 AM', name: 'Spin Class', instructor: 'Jordan Blake' },
  ],
  Monday: [
    { time: '6:00 AM – 8:00 AM', name: 'HIIT Training', instructor: 'Casey Rivera' },
    { time: '10:00 AM – 12:00 PM', name: 'Pilates', instructor: 'Morgan Hayes' },
    { time: '5:00 PM – 7:00 PM', name: 'Weight Training', instructor: 'Jordan Blake' },
  ],
  Tuesday: [
    { time: '7:00 AM – 9:00 AM', name: 'Cardio Blast', instructor: 'Jordan Blake' },
    { time: '10:00 AM – 12:00 PM', name: 'Functional Fitness', instructor: 'Casey Rivera' },
  ],
  Wednesday: [
    { time: '6:00 AM – 8:00 AM', name: 'Kick Boxing', instructor: 'Jordan Blake' },
    { time: '10:00 AM – 12:00 PM', name: 'Yoga Flow', instructor: 'Morgan Hayes' },
    { time: '5:00 PM – 7:00 PM', name: 'CrossFit', instructor: 'Casey Rivera' },
  ],
  Thursday: [
    { time: '7:00 AM – 9:00 AM', name: 'HIIT Training', instructor: 'Casey Rivera' },
    { time: '10:00 AM – 12:00 PM', name: 'Spin Class', instructor: 'Jordan Blake' },
  ],
  Friday: [
    { time: '6:00 AM – 8:00 AM', name: 'Morning Stretch', instructor: 'Morgan Hayes' },
    { time: '10:00 AM – 12:00 PM', name: 'Pilates', instructor: 'Morgan Hayes' },
    { time: '5:00 PM – 7:00 PM', name: 'Weight Training', instructor: 'Jordan Blake' },
  ],
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState('Monday')

  return (
    <section id="schedule" className="py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block border-l-2 border-brand pl-6 font-display text-2xl font-light uppercase tracking-wider text-brand">
            Our Time Schedule
          </span>
          <h2 className="font-display text-4xl font-bold uppercase text-ink md:text-5xl">
            Select the Perfect Time You Need Now
          </h2>
        </div>

        {/* Day tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {days.map((day) => (
            <button
              key={day}
              type="button"
              role="tab"
              aria-selected={activeDay === day}
              aria-label={`Show ${day} schedule`}
              className={`px-6 py-3 font-display text-sm uppercase tracking-wider transition-colors ${
                activeDay === day ? 'bg-brand text-white' : 'bg-gray-100 text-ink hover:bg-gray-200'
              }`}
              onClick={() => setActiveDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Class list for active day */}
        <div role="tabpanel" aria-label={`${activeDay} schedule`}>
          <div className="grid gap-4">
            {scheduleData[activeDay]?.map((cls) => (
              <div
                key={`${cls.time}-${cls.name}`}
                className="flex flex-col items-center justify-between gap-4 border-b border-gray-200 py-6 text-center sm:flex-row sm:text-left"
              >
                <span className="font-display text-lg text-brand">{cls.time}</span>
                <h3 className="font-display text-2xl font-bold uppercase text-ink">{cls.name}</h3>
                <span className="text-sm text-muted">
                  by <span className="font-semibold text-ink">{cls.instructor}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
