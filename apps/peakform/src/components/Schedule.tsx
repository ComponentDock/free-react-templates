import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const

type Day = (typeof days)[number]

interface ScheduleRow {
  className: string
  time: string
  instructor: string
}

const scheduleData: Record<Day, ScheduleRow[]> = {
  Sunday: [
    { className: 'Power Yoga', time: '7:00 AM', instructor: 'John Smith' },
    { className: 'HIIT Training', time: '9:00 AM', instructor: 'Mike Johnson' },
    { className: 'Zumba Dance', time: '11:00 AM', instructor: 'Maria Garcia' },
  ],
  Monday: [
    { className: 'CrossFit', time: '6:00 AM', instructor: 'Sarah Williams' },
    { className: 'Boxing Basics', time: '8:00 AM', instructor: 'David Brown' },
    { className: 'Pilates Core', time: '10:00 AM', instructor: 'Emma Davis' },
  ],
  Tuesday: [
    { className: 'Running Club', time: '6:30 AM', instructor: 'Mike Johnson' },
    { className: 'Weight Lifting', time: '8:00 AM', instructor: 'Sarah Williams' },
    { className: 'Power Yoga', time: '5:00 PM', instructor: 'John Smith' },
  ],
  Wednesday: [
    { className: 'Boxing Basics', time: '7:00 AM', instructor: 'David Brown' },
    { className: 'Zumba Dance', time: '9:00 AM', instructor: 'Maria Garcia' },
    { className: 'CrossFit', time: '5:00 PM', instructor: 'Sarah Williams' },
  ],
  Thursday: [
    { className: 'Pilates Core', time: '6:00 AM', instructor: 'Emma Davis' },
    { className: 'Running Club', time: '8:00 AM', instructor: 'Mike Johnson' },
    { className: 'HIIT Training', time: '5:00 PM', instructor: 'Mike Johnson' },
  ],
  Friday: [
    { className: 'CrossFit', time: '6:00 AM', instructor: 'Sarah Williams' },
    { className: 'Power Yoga', time: '9:00 AM', instructor: 'John Smith' },
    { className: 'Boxing Basics', time: '4:00 PM', instructor: 'David Brown' },
  ],
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<Day>('Sunday')

  return (
    <section className="relative py-16 md:py-24" aria-label="Class Schedule">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/peakform-schedule/1920/800"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase text-center mb-8">
          Class Schedule
        </h2>

        {/* Day tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Days">
          {days.map((day) => (
            <button
              key={day}
              role="tab"
              aria-selected={activeDay === day}
              onClick={() => setActiveDay(day)}
              className={cn(
                'px-5 py-2 text-sm font-bold uppercase rounded-full transition-colors',
                activeDay === day
                  ? 'bg-brand text-white'
                  : 'bg-white/10 text-white hover:bg-white/20',
              )}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-3 text-sm font-bold text-white uppercase">Class</th>
                <th className="py-3 text-sm font-bold text-white uppercase">Time</th>
                <th className="py-3 text-sm font-bold text-white uppercase">Instructor</th>
                <th className="py-3 text-sm font-bold text-white uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[activeDay].map((row) => (
                <tr key={row.className} className="border-b border-white/10">
                  <td className="py-4 text-sm text-white">{row.className}</td>
                  <td className="py-4 text-sm text-white/70">{row.time}</td>
                  <td className="py-4 text-sm text-white/70">{row.instructor}</td>
                  <td className="py-4">
                    <button className="rounded-full bg-brand px-5 py-1.5 text-xs font-bold uppercase text-white hover:bg-primary-600 transition-colors">
                      Join Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
