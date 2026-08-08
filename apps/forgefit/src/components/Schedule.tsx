import { cn } from '@free-react-templates/ui'

type Level = 'Beginner' | 'Intermediate' | 'Advanced'

interface ClassEntry {
  time: string
  name: string
  coach: string
  level: Level
}

const schedule: { day: string; classes: ClassEntry[] }[] = [
  {
    day: 'Monday',
    classes: [
      { time: '6:00 AM', name: 'Morning HIIT', coach: 'Coach Marcus', level: 'Intermediate' },
      { time: '8:00 AM', name: 'Yoga Flow', coach: 'Sarah Chen', level: 'Beginner' },
      { time: '12:00 PM', name: 'Strength Basics', coach: 'Coach Marcus', level: 'Beginner' },
      { time: '5:30 PM', name: 'Boxing Fundamentals', coach: 'Diego Reyes', level: 'Beginner' },
      { time: '7:00 PM', name: 'CrossFit WOD', coach: 'Emily Park', level: 'Advanced' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '6:00 AM', name: 'Power Lifting', coach: 'Coach Marcus', level: 'Advanced' },
      { time: '9:00 AM', name: 'Pilates Core', coach: 'Sarah Chen', level: 'Beginner' },
      { time: '12:00 PM', name: 'HIIT Express', coach: 'Emily Park', level: 'Intermediate' },
      { time: '5:30 PM', name: 'MMA Conditioning', coach: 'Diego Reyes', level: 'Intermediate' },
      { time: '7:00 PM', name: 'Yoga Restore', coach: 'Sarah Chen', level: 'Beginner' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '6:00 AM', name: 'CrossFit WOD', coach: 'Emily Park', level: 'Intermediate' },
      { time: '8:00 AM', name: 'Stretch & Recover', coach: 'Sarah Chen', level: 'Beginner' },
      { time: '12:00 PM', name: 'Boxing Sparring', coach: 'Diego Reyes', level: 'Advanced' },
      { time: '5:30 PM', name: 'Strength & Power', coach: 'Coach Marcus', level: 'Intermediate' },
      { time: '7:00 PM', name: 'HIIT Burn', coach: 'Emily Park', level: 'Advanced' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '6:00 AM', name: 'Morning Yoga', coach: 'Sarah Chen', level: 'Beginner' },
      { time: '9:00 AM', name: 'Functional Training', coach: 'Emily Park', level: 'Intermediate' },
      { time: '12:00 PM', name: 'HIIT Express', coach: 'Coach Marcus', level: 'Intermediate' },
      { time: '5:30 PM', name: 'Kickboxing', coach: 'Diego Reyes', level: 'Intermediate' },
      { time: '7:00 PM', name: 'Hypertrophy Lab', coach: 'Coach Marcus', level: 'Advanced' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '6:00 AM', name: 'CrossFit Open', coach: 'Emily Park', level: 'Advanced' },
      { time: '8:00 AM', name: 'Vinyasa Yoga', coach: 'Sarah Chen', level: 'Intermediate' },
      { time: '12:00 PM', name: 'Strength Fundamentals', coach: 'Coach Marcus', level: 'Beginner' },
      { time: '5:30 PM', name: 'Boxing Circuit', coach: 'Diego Reyes', level: 'Intermediate' },
      { time: '7:00 PM', name: 'Total Body HIIT', coach: 'Emily Park', level: 'Advanced' },
    ],
  },
]

const levelClasses: Record<Level, string> = {
  Beginner: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400',
  Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400',
  Advanced: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400',
}

export function Schedule() {
  return (
    <section id="schedule" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Schedule
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          This Week's Classes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Find the perfect class that fits your schedule. From early morning to late evening, we
          have you covered.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {schedule.map(({ day, classes }) => (
            <div
              key={day}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                {day}
              </h3>
              <ul className="mt-4 space-y-4">
                {classes.map((entry) => (
                  <li
                    key={entry.time}
                    className="border-b border-gray-200 pb-4 last:border-0 last:pb-0 dark:border-gray-800"
                  >
                    <p className="text-xs font-bold text-primary-600 dark:text-primary-400">
                      {entry.time}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      {entry.name}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{entry.coach}</p>
                    <span
                      className={cn(
                        'mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium',
                        levelClasses[entry.level],
                      )}
                    >
                      {entry.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
