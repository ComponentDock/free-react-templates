import { useState } from 'react'

const days: ReadonlyArray<{ label: string; letter: string }> = [
  { label: 'Sunday', letter: 'S' },
  { label: 'Monday', letter: 'M' },
  { label: 'Tuesday', letter: 'T' },
  { label: 'Wednesday', letter: 'W' },
  { label: 'Thursday', letter: 'T' },
  { label: 'Friday', letter: 'F' },
  { label: 'Saturday', letter: 'S' },
]

const classNames: ReadonlyArray<string> = [
  'Power Lifting',
  'HIIT Circuit',
  'Spin Cycling',
  'Boxing Basics',
  'Core Strength',
]

const times: ReadonlyArray<string> = [
  '7:30am - 9:00am',
  '9:30am - 11:00am',
  '12:00pm - 1:30pm',
  '4:00pm - 5:30pm',
  '6:00pm - 7:30pm',
]

const trainers: ReadonlyArray<string> = [
  'Justin Daniel',
  'Matthew Davidson',
  'Anna Stevens',
  'Sofia Lopez',
  'Carla Reyes',
]

interface TimedClass {
  time: string
  name: string
  trainer: string
  duration: string
}

const weeklySchedule: Record<string, ReadonlyArray<TimedClass>> = Object.fromEntries(
  days.map((day, dayIndex) => [
    day.label,
    classNames.map((name, index) => ({
      time: `${day.label} ${times[index]!}`,
      name,
      trainer: trainers[(dayIndex + index) % trainers.length]!,
      duration: '30 minutes',
    })),
  ]),
)

export function Schedule() {
  const [activeDay, setActiveDay] = useState(days[0]!.label)
  const panel = weeklySchedule[activeDay]!

  return (
    <section id="schedule" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xl text-[#ababab]">Fitness Sched</span>
          <h2 className="mt-2 text-3xl font-black text-brand md:text-[2.5rem]">Schedule</h2>
          <p className="mt-4 text-muted">
            Pick a day to see when each class runs — every slot is led by a certified trainer.
          </p>
        </div>

        <div role="tablist" aria-label="Class days" className="grid grid-cols-7 gap-2">
          {days.map((day) => {
            const active = day.label === activeDay
            return (
              <button
                key={day.label}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={day.label}
                onClick={() => setActiveDay(day.label)}
                className={
                  active
                    ? 'bg-brand py-3 text-sm font-black text-white'
                    : 'bg-[#eee] py-3 text-sm font-black text-ink transition-colors hover:bg-brand/70 hover:text-white'
                }
              >
                {day.letter}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          aria-label={`${activeDay} classes`}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {panel.map((item) => (
            <article
              key={`${activeDay}-${item.name}`}
              className="flex items-center justify-between gap-4 rounded border border-gray-100 p-5 shadow-[0_5px_20px_0_rgba(0,0,0,0.1)]"
            >
              <div>
                <p className="text-sm text-[#aeaeae]">{item.time}</p>
                <h3 className="mt-1 text-lg font-bold text-ink">{item.name}</h3>
                <p className="mt-1 text-sm text-[#aeaeae]">
                  By {item.trainer} · {item.duration}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
