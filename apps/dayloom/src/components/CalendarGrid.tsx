import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

function toLocalDateString(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

interface CalendarGridProps {
  selectedDate: Date
  onSelectDate: (date: Date) => void
  events: { date: string; title: string }[]
}

export function CalendarGrid({ selectedDate, onSelectDate, events }: CalendarGridProps) {
  const [viewDate, setViewDate] = useState(new Date(selectedDate))

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const cells = (() => {
    const result: (number | null)[] = []
    for (let i = 0; i < firstDay; i++) {
      result.push(null)
    }
    for (let d = 1; d <= daysInMonth; d++) {
      result.push(d)
    }
    return result
  })()

  const goToPrevMonth = useCallback(() => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
  }, [])

  const goToNextMonth = useCallback(() => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
  }, [])

  const monthName = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <div
      role="region"
      aria-label="Calendar grid"
      className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
    >
      <div className="flex items-center justify-between pb-6 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-900">{monthName}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevMonth}
            aria-label="Previous month"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goToNextMonth}
            aria-label="Next month"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 pt-4 text-center">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="py-2 text-xs font-semibold uppercase tracking-wider text-slate-400"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 pt-2">
        {cells.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="h-24 rounded-xl bg-slate-50/50" />
          }

          const cellDate = new Date(year, month, day)
          const dateString = toLocalDateString(cellDate)
          const isSelected =
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === month &&
            selectedDate.getFullYear() === year
          const isToday = new Date().toDateString() === cellDate.toDateString()

          const dayEvents = events.filter((e) => e.date === dateString)

          return (
            <button
              key={day}
              onClick={() => onSelectDate(cellDate)}
              aria-label={`${day} ${monthName}${isToday ? ' (today)' : ''}`}
              className={cn(
                'group relative flex h-24 flex-col justify-between rounded-xl border p-2 text-left transition-all hover:border-indigo-500 hover:bg-indigo-50/30',
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20'
                  : 'border-slate-100 bg-white',
                isToday && 'font-bold text-indigo-600',
              )}
            >
              <span
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium',
                  isToday
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 group-hover:text-indigo-600',
                )}
              >
                {day}
              </span>
              {dayEvents.length > 0 && (
                <div className="flex flex-col gap-1 w-full overflow-hidden">
                  {dayEvents.slice(0, 2).map((ev, i) => (
                    <span
                      key={i}
                      className="truncate rounded-md bg-indigo-100 px-1.5 py-0.5 text-[10px] font-medium text-indigo-700"
                    >
                      {ev.title}
                    </span>
                  ))}
                  {dayEvents.length > 2 && (
                    <span className="text-[9px] font-semibold text-slate-400">
                      +{dayEvents.length - 2} more
                    </span>
                  )}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
