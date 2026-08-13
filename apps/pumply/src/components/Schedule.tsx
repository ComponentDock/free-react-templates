import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { scheduleDays, scheduleRows, type ScheduleDay } from '../data'

export function Schedule() {
  const [activeDay, setActiveDay] = useState<ScheduleDay>('Monday')

  return (
    <section id="schedule-section" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black text-primary">Schedule</h2>
          <p className="mt-4 text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="mt-10 border-b border-primary">
          <div
            role="tablist"
            aria-label="Class days"
            className="flex flex-wrap justify-center gap-2 pb-4"
          >
            {scheduleDays.map((day) => (
              <button
                key={day}
                type="button"
                role="tab"
                aria-selected={activeDay === day}
                onClick={() => setActiveDay(day)}
                className={cn(
                  'rounded-[4px] px-5 py-2.5 text-sm font-bold transition-colors',
                  activeDay === day ? 'bg-primary text-white' : 'text-white hover:text-primary',
                )}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        <div role="tabpanel" className="mt-8 overflow-x-auto">
          <table className="w-full border border-[#dee2e6] text-left text-white">
            <tbody>
              {scheduleRows.map((row) => (
                <tr key={row.name} className="border-b border-[#dee2e6] odd:bg-white/5">
                  <td className="px-4 py-5 font-semibold">{row.name}</td>
                  <td className="px-4 py-5">{row.time}</td>
                  <td className="px-4 py-5">{row.trainer}</td>
                  <td className="px-4 py-5 text-right">
                    <a
                      href="#contact-section"
                      className="font-bold text-primary transition-colors hover:text-primary-hover"
                    >
                      Join Now
                    </a>
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
