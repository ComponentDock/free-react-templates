import { useState, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

function formatMonth(year: number, month: number): string {
  const date = new Date(year, month, 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase()
}

function addMonths(date: Date, delta: number): Date {
  const newDate = new Date(date)
  newDate.setMonth(newDate.getMonth() + delta)
  return newDate
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isToday(date: Date): boolean {
  return isSameDay(date, new Date())
}

interface CalendarProps {
  label: string
  initialViewDate?: Date
}

export function Calendar({ label, initialViewDate }: CalendarProps) {
  const [viewDate, setViewDate] = useState(initialViewDate ?? new Date())

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
    setViewDate((d) => addMonths(d, -1))
  }, [])

  const goToNextMonth = useCallback(() => {
    setViewDate((d) => addMonths(d, 1))
  }, [])

  return (
    <div className="mx-auto w-full max-w-[585px] bg-white p-2.5 shadow-[0px_4px_26px_-22px_rgba(0,0,0,0.14)]">
      {/* Month navigation header */}
      <div className="relative flex h-[55px] items-center justify-center">
        <button
          onClick={goToPrevMonth}
          aria-label={`${label}: previous month`}
          className="absolute left-0 flex h-10 w-10 items-center justify-center text-[--color-chevron] transition-colors hover:text-[--color-accent]"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-center text-base font-bold uppercase text-[--color-heading]">
          {formatMonth(year, month)}
        </h2>
        <button
          onClick={goToNextMonth}
          aria-label={`${label}: next month`}
          className="absolute right-0 flex h-10 w-10 items-center justify-center text-[--color-chevron] transition-colors hover:text-[--color-accent]"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Weekday header row */}
      <div className="grid grid-cols-7">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="h-[68px] w-[14.28571%] text-center text-sm font-bold leading-[69px] text-[--color-weekday]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7">
        {cells.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="h-[68px] w-[14.28571%]" />
          }

          const cellDate = new Date(year, month, day)
          const today = isToday(cellDate)

          return (
            <button
              key={day}
              aria-label={`${day} ${formatMonth(year, month)}${today ? ' (today)' : ''}`}
              className={cn(
                'h-[68px] w-[14.28571%] border border-transparent text-center text-base font-normal leading-[69px] transition-colors hover:border-[--color-border-hover]',
                today && 'bg-[--color-today] font-bold text-white',
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
