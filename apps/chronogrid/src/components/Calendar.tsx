import { useState, useMemo, useCallback } from 'react'
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
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
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

interface CalendarProps {
  initialViewDate?: Date
  initialSelectedDate?: Date
}

export function Calendar({
  initialViewDate = new Date(2020, 11, 1),
  initialSelectedDate = new Date(2020, 11, 19),
}: CalendarProps) {
  const [viewDate, setViewDate] = useState(initialViewDate)
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate)

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const cells = useMemo(() => {
    const result: (number | null)[] = []
    for (let i = 0; i < firstDay; i++) {
      result.push(null)
    }
    for (let d = 1; d <= daysInMonth; d++) {
      result.push(d)
    }
    return result
  }, [firstDay, daysInMonth])

  const goToPrevMonth = useCallback(() => {
    setViewDate((d) => addMonths(d, -1))
  }, [])

  const goToNextMonth = useCallback(() => {
    setViewDate((d) => addMonths(d, 1))
  }, [])

  const selectDate = useCallback(
    (day: number) => {
      setSelectedDate(new Date(year, month, day))
    },
    [year, month],
  )

  return (
    <div className="w-full max-w-[480px] bg-white p-6">
      <h1
        className="mb-6 text-center text-[28px] font-semibold leading-tight"
        style={{ color: 'var(--color-future)' }}
      >
        Calendar #01
      </h1>

      {/* Month navigation */}
      <div className="mb-4 flex items-center justify-between px-2">
        <button
          onClick={goToPrevMonth}
          aria-label="Previous month"
          className="p-2 transition-colors hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ChevronLeft size={20} style={{ color: 'var(--color-chevron)' }} />
        </button>
        <span className="text-base font-medium" style={{ color: 'var(--color-month)' }}>
          {formatMonth(year, month)}
        </span>
        <button
          onClick={goToNextMonth}
          aria-label="Next month"
          className="p-2 transition-colors hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ChevronRight size={20} style={{ color: 'var(--color-chevron)' }} />
        </button>
      </div>

      {/* Weekday header bar */}
      <div className="mb-0 grid grid-cols-7" style={{ backgroundColor: 'var(--color-accent)' }}>
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-2 text-center text-[13px] font-medium text-white">
            {day}
          </div>
        ))}
      </div>

      {/* Date grid */}
      <div className="grid grid-cols-7">
        {cells.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="aspect-square border border-gridline" />
          }

          const cellDate = new Date(year, month, day)
          const isSelected = isSameDay(cellDate, selectedDate)
          const isPast = cellDate < selectedDate && !isSelected

          return (
            <button
              key={day}
              onClick={() => selectDate(day)}
              aria-label={`${day} ${formatMonth(year, month)}`}
              aria-selected={isSelected}
              className={cn(
                'flex aspect-square items-center justify-center border border-gridline text-[14px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
                isSelected && 'rounded-full bg-accent font-medium text-white',
                !isSelected && isPast && 'bg-white',
                !isSelected && !isPast && 'bg-white',
              )}
              style={
                !isSelected
                  ? { color: isPast ? 'var(--color-past)' : 'var(--color-future)' }
                  : undefined
              }
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
