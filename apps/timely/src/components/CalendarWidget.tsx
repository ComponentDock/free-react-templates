import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

const MONTH_NAMES = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
] as const

/** Reference "today" — December 19, 2020 — matching the original screenshot. */
const REF_YEAR = 2020
const REF_MONTH = 11 // 0-indexed December
const REF_DAY = 19

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function startDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

function buildGrid(year: number, month: number) {
  const total = daysInMonth(year, month)
  const offset = startDayOfWeek(year, month)
  const cells: (number | null)[] = []
  for (let i = 0; i < offset; i++) cells.push(null)
  for (let d = 1; d <= total; d++) cells.push(d)
  while (cells.length < 42) cells.push(null)
  return cells
}

export function CalendarWidget() {
  const [year, setYear] = useState(REF_YEAR)
  const [month, setMonth] = useState(REF_MONTH)
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const cells = buildGrid(year, month)
  const isRefMonth = year === REF_YEAR && month === REF_MONTH
  const displayDay = selectedDay ?? (isRefMonth ? REF_DAY : 1)

  const goToPrev = useCallback(() => {
    setSelectedDay(null)
    setMonth((m) => {
      if (m === 0) {
        setYear((y) => y - 1)
        return 11
      }
      return m - 1
    })
  }, [])

  const goToNext = useCallback(() => {
    setSelectedDay(null)
    setMonth((m) => {
      if (m === 11) {
        setYear((y) => y + 1)
        return 0
      }
      return m + 1
    })
  }, [])

  const resetToToday = useCallback(() => {
    setYear(REF_YEAR)
    setMonth(REF_MONTH)
    setSelectedDay(null)
  }, [])

  const selectDay = useCallback((day: number) => {
    setSelectedDay(day)
  }, [])

  const monthLabel = `${MONTH_NAMES[month]} - ${year}`

  return (
    <div className="mx-auto flex w-full max-w-[700px] overflow-hidden rounded-[5px] shadow-[0_19px_27px_-20px_rgba(0,0,0,0.16)] md:flex-row flex-col">
      {/* Left photo panel */}
      <div
        className="relative flex w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:w-[35%] md:min-h-[340px] min-h-[200px] py-8 md:py-0"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/twilight-1/800/1067)',
        }}
      >
        {/* Black overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-black opacity-50" />

        {/* Today pill */}
        <button
          onClick={resetToToday}
          className="absolute right-2 top-2 z-10 cursor-pointer rounded border border-[rgba(255,255,255,0.4)] px-2 py-0.5 text-[11px] uppercase text-[rgba(255,255,255,0.7)] transition-colors hover:border-white hover:text-white active:scale-[0.8]"
          aria-label="Reset to today"
        >
          Today
        </button>

        {/* Month label + big day number */}
        <div className="relative z-10 flex flex-col items-center text-white">
          <span className="mb-1 text-[16px] font-light uppercase leading-none">{monthLabel}</span>
          <span className="text-[9em] leading-none font-light">{displayDay}</span>
        </div>
      </div>

      {/* Right white grid panel */}
      <div className="w-full bg-card p-5 pt-10 md:w-[65%]">
        {/* Chevron row */}
        <div className="relative mb-2">
          <button
            onClick={goToPrev}
            className="absolute left-0 top-0 flex h-[1em] w-[1em] cursor-pointer items-center justify-center rounded-full"
            aria-label="Previous month"
          >
            <ChevronLeft size={18} className="text-chevron" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-0 flex h-[1em] w-[1em] cursor-pointer items-center justify-center rounded-full"
            aria-label="Next month"
          >
            <ChevronRight size={18} className="text-chevron" />
          </button>
        </div>

        {/* Weekday header */}
        <div className="mb-2 grid grid-cols-7 text-center text-[16px] font-bold text-ink">
          {WEEKDAYS.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 gap-y-0 text-center">
          {cells.map((day, i) => {
            const isBlank = day === null
            const isToday = isRefMonth && day === REF_DAY
            const isSelected = day !== null && selectedDay === day

            return (
              <div
                key={i}
                className={cn(
                  'flex h-12 items-center justify-center text-[16px]',
                  !isBlank && 'cursor-pointer transition-transform active:scale-[0.7]',
                  isBlank && 'cursor-default',
                )}
              >
                {!isBlank && (
                  <span
                    onClick={() => selectDay(day!)}
                    className={cn(
                      'flex h-[44px] w-[44px] items-center justify-center rounded-full transition-colors',
                      isToday && 'bg-brand text-white',
                      isSelected && !isToday && 'bg-selected text-white',
                      !isToday && !isSelected && 'text-ink hover:bg-selected hover:text-white',
                    )}
                    aria-label={`${day} ${MONTH_NAMES[month]} ${year}`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        selectDay(day!)
                      } else if (e.key === ' ') {
                        e.preventDefault()
                        selectDay(day!)
                      }
                    }}
                  >
                    {day}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
