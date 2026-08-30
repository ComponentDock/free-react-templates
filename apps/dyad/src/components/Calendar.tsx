import { useState, useMemo, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as const

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
] as const

interface DayCell {
  date: Date
  day: number
  isCurrentMonth: boolean
  isSelected: boolean
  isDisabled: boolean
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function buildGrid(
  year: number,
  month: number,
  selectedDate: Date | null,
  disabledBefore: Date | null,
  disabledAfter: Date | null,
): DayCell[][] {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfWeek(year, month)
  const daysInPrevMonth = getDaysInMonth(year, month - 1)

  const cells: DayCell[] = []

  // Leading adjacent-month days
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i
    cells.push({
      date: new Date(year, month - 1, day),
      day,
      isCurrentMonth: false,
      isSelected: false,
      isDisabled: true,
    })
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d)
    const isSelected = selectedDate !== null && isSameDate(date, selectedDate)
    let isDisabled = false
    if (disabledBefore && date < disabledBefore) {
      isDisabled = true
    }
    if (disabledAfter && date > disabledAfter) {
      isDisabled = true
    }
    cells.push({ date, day: d, isCurrentMonth: true, isSelected, isDisabled })
  }

  // Trailing adjacent-month days
  const remaining = 7 - (cells.length % 7)
  if (remaining < 7) {
    for (let d = 1; d <= remaining; d++) {
      cells.push({
        date: new Date(year, month + 1, d),
        day: d,
        isCurrentMonth: false,
        isSelected: false,
        isDisabled: true,
      })
    }
  }

  // Split into rows of 7
  const rows: DayCell[][] = []
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7))
  }

  return rows
}

export interface CalendarProps {
  selectedDate: Date | null
  onSelect: (date: Date) => void
  disabledBefore?: Date | null
  disabledAfter?: Date | null
}

export function Calendar({
  selectedDate,
  onSelect,
  disabledBefore = null,
  disabledAfter = null,
}: CalendarProps) {
  const today = useMemo(() => new Date(), [])
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const grid = useMemo(
    () => buildGrid(currentYear, currentMonth, selectedDate, disabledBefore, disabledAfter),
    [currentYear, currentMonth, selectedDate, disabledBefore, disabledAfter],
  )

  const monthLabel = `${MONTH_NAMES[currentMonth]} ${currentYear}`

  const goToPrevMonth = useCallback(() => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((y) => y - 1)
    } else {
      setCurrentMonth((m) => m - 1)
    }
  }, [currentMonth])

  const goToNextMonth = useCallback(() => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((y) => y + 1)
    } else {
      setCurrentMonth((m) => m + 1)
    }
  }, [currentMonth])

  const handleDayClick = useCallback(
    (cell: DayCell) => {
      if (cell.isCurrentMonth && !cell.isDisabled) {
        onSelect(cell.date)
      }
    },
    [onSelect],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, cell: DayCell) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleDayClick(cell)
      }
    },
    [handleDayClick],
  )

  return (
    <div className="inline-block bg-white p-2.5 text-center shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]">
      {/* Month header */}
      <div className="mb-5 flex items-center justify-between">
        <button
          type="button"
          onClick={goToPrevMonth}
          aria-label="Previous month"
          className="cursor-pointer rounded p-1 text-[#212529] hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f67280]"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-sm font-normal text-[#212529]">{monthLabel}</span>
        <button
          type="button"
          onClick={goToNextMonth}
          aria-label="Next month"
          className="cursor-pointer rounded p-1 text-[#212529] hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f67280]"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Calendar grid */}
      <table className="border-collapse" role="grid" aria-label={monthLabel}>
        <thead>
          <tr>
            {WEEKDAYS.map((day) => (
              <th
                key={day}
                scope="col"
                className="w-[50px] p-0 text-center text-sm font-bold text-[#212529]"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {grid.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, colIdx) => (
                <td key={colIdx} className="h-[50px] w-[50px] p-0 text-center">
                  <button
                    type="button"
                    onClick={() => handleDayClick(cell)}
                    onKeyDown={(e) => handleKeyDown(e, cell)}
                    aria-selected={cell.isSelected}
                    data-adjacent={!cell.isCurrentMonth}
                    tabIndex={cell.isCurrentMonth && !cell.isDisabled ? 0 : -1}
                    className={cn(
                      'flex h-[50px] w-[50px] items-center justify-center rounded-full text-sm',
                      cell.isCurrentMonth && !cell.isDisabled
                        ? 'cursor-pointer text-[#212529] hover:bg-gray-100'
                        : 'cursor-default text-[#ccc]',
                      cell.isSelected && 'bg-[#f67280] text-white hover:bg-[#f67280]',
                      cell.isCurrentMonth &&
                        cell.isDisabled &&
                        !cell.isSelected &&
                        'cursor-default text-[#fcc]',
                    )}
                  >
                    {cell.day}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
