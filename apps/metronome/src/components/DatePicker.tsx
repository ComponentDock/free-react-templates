import { useRef, useState, useCallback, useEffect } from 'react'
import { cn } from '@free-react-templates/ui'

interface DatePickerProps {
  value: string
  onChange: (value: string) => void
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function formatDate(day: number, month: number, year: number): string {
  return `${day} ${MONTH_NAMES[month]}, ${year}`
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

function buildGrid(year: number, month: number): (number | null)[][] {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const grid: (number | null)[][] = []
  let day = 1
  for (let row = 0; row < 6; row++) {
    const week: (number | null)[] = []
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDay) {
        week.push(null)
      } else if (day > daysInMonth) {
        week.push(null)
      } else {
        week.push(day)
        day++
      }
    }
    grid.push(week)
  }
  return grid
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [open, setOpen] = useState(false)
  const today = new Date()
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const inputRef = useRef<HTMLInputElement>(null)
  const pickerRef = useRef<HTMLDivElement>(null)

  const handleFocus = useCallback(() => {
    setOpen(true)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    },
    [open],
  )

  const handleDayClick = useCallback(
    (day: number) => {
      onChange(formatDate(day, viewMonth, viewYear))
      setOpen(false)
    },
    [onChange, viewMonth, viewYear],
  )

  const handlePrev = useCallback(() => {
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear((y) => y - 1)
    } else {
      setViewMonth((m) => m - 1)
    }
  }, [viewMonth])

  const handleNext = useCallback(() => {
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear((y) => y + 1)
    } else {
      setViewMonth((m) => m + 1)
    }
  }, [viewMonth])

  const handleToday = useCallback(() => {
    const now = new Date()
    setViewMonth(now.getMonth())
    setViewYear(now.getFullYear())
    onChange(formatDate(now.getDate(), now.getMonth(), now.getFullYear()))
    setOpen(false)
  }, [onChange])

  const handleClear = useCallback(() => {
    onChange('')
  }, [onChange])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const handlePointerDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        pickerRef.current &&
        !pickerRef.current.contains(target) &&
        inputRef.current &&
        !inputRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [open])

  const grid = buildGrid(viewYear, viewMonth)

  return (
    <div className="relative" onKeyDown={handleKeyDown}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Pick A Date"
        readOnly
        value={value}
        onFocus={handleFocus}
        aria-expanded={open}
        aria-label="Pick A Date"
        className={cn(
          'block w-full rounded-[0.25rem] border bg-white px-3 py-[0.375rem] text-[1rem] font-normal leading-[1.5]',
          'placeholder:text-[#b3b3b3]',
          open
            ? 'border-border-active text-text-input'
            : 'border-border text-text-input focus:border-border-focus focus:outline-none focus:ring-[0.2rem] focus:ring-[rgba(0,123,255,0.25)]',
        )}
        style={{ height: 'calc(1.5em + 0.75rem + 2px)' }}
      />
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(0,0,0,0.32)' }}
            aria-hidden="true"
          />
          <div
            ref={pickerRef}
            role="dialog"
            aria-label="Date picker"
            className="absolute left-1/2 z-50 mt-1 w-[280px] -translate-x-1/2 rounded-[5px_5px_0_0] border border-[#777] border-t-[#898989] bg-white shadow-[0_12px_36px_16px_rgba(0,0,0,0.24)] sm:w-[320px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous month"
                className="flex h-8 w-8 items-center justify-center border-none bg-transparent text-[0.7rem] hover:bg-accent-light"
              >
                <span className="inline-block border-b-[0.4em] border-r-[0.4em] border-t-[0.4em] border-b-transparent border-r-transparent border-t-black" />
              </button>
              <div className="text-[0.85rem] font-medium">
                {MONTH_NAMES[viewMonth]}{' '}
                <span className="text-[0.8em] font-normal italic text-muted">{viewYear}</span>
              </div>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next month"
                className="flex h-8 w-8 items-center justify-center border-none bg-transparent text-[0.7rem] hover:bg-accent-light"
              >
                <span className="inline-block border-b-[0.4em] border-l-[0.4em] border-t-[0.4em] border-b-transparent border-l-transparent border-t-black" />
              </button>
            </div>

            {/* Weekday row */}
            <div className="grid grid-cols-7 px-2 pb-1">
              {WEEKDAYS.map((day) => (
                <div key={day} className="text-center text-[0.75rem] font-medium text-muted">
                  {day}
                </div>
              ))}
            </div>

            {/* Day grid */}
            <div className="grid grid-cols-7 px-2">
              {grid.map((week, rowIdx) =>
                week.map((day, colIdx) => {
                  if (day === null) {
                    return (
                      <div
                        key={`${rowIdx}-${colIdx}`}
                        className="py-[0.3125em] text-center text-[0.85rem] font-light text-outfocus"
                      />
                    )
                  }
                  const isToday =
                    day === today.getDate() &&
                    viewMonth === today.getMonth() &&
                    viewYear === today.getFullYear()
                  const isSelected = value === formatDate(day, viewMonth, viewYear)

                  return (
                    <button
                      key={`${rowIdx}-${colIdx}`}
                      type="button"
                      onClick={() => handleDayClick(day)}
                      aria-label={`${MONTH_NAMES[viewMonth]} ${day}, ${viewYear}`}
                      className={cn(
                        'relative cursor-pointer border-none bg-transparent py-[0.3125em] text-[0.85rem] font-light hover:bg-accent-light',
                        isSelected ? 'bg-accent text-white' : 'text-black',
                      )}
                    >
                      {day}
                      {isToday && !isSelected && (
                        <span
                          className="absolute right-0 top-0 border-[0.5em] border-accent border-b-transparent border-l-transparent border-t-transparent"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  )
                }),
              )}
            </div>

            {/* Footer buttons */}
            <div className="flex border-t border-[#ddd]">
              <button
                type="button"
                onClick={handleToday}
                className="flex flex-1 cursor-pointer items-center justify-center gap-1 border-none bg-transparent py-[0.66em] text-[0.8em] font-bold hover:bg-accent-light focus:outline-2 focus:outline-accent"
              >
                <span
                  className="inline-block border-b-[0.4em] border-l-[0.3em] border-r-[0.3em] border-b-accent border-l-transparent border-r-transparent border-t-0"
                  aria-hidden="true"
                />
                Today
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="flex flex-1 cursor-pointer items-center justify-center gap-1 border-none bg-transparent py-[0.66em] text-[0.8em] font-bold hover:bg-accent-light focus:outline-2 focus:outline-accent"
              >
                <span className="text-[#e20]">—</span>
                Clear
              </button>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="flex flex-1 cursor-pointer items-center justify-center border-none bg-transparent py-[0.66em] text-[0.8em] font-bold hover:bg-accent-light focus:outline-2 focus:outline-accent"
              >
                ×
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
