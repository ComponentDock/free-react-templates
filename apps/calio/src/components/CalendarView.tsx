import { useState, useCallback, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { CalendarEvent } from '../utils/calendar'
import { MONTH_NAMES, formatWeekRange, formatDayTitle, getWeekStart } from '../utils/calendar'
import { MonthView } from './MonthView'
import { WeekView } from './WeekView'
import { DayView } from './DayView'
import { ListView } from './ListView'

type ViewType = 'month' | 'week' | 'day' | 'list'

const VIEW_LABELS: Record<ViewType, string> = {
  month: 'Month',
  week: 'Week',
  day: 'Day',
  list: 'List',
}

function computeMonthNav(currentMonth: number, currentYear: number, direction: 'prev' | 'next') {
  if (direction === 'prev') {
    if (currentMonth === 0) return { month: 11, year: currentYear - 1 }
    return { month: currentMonth - 1, year: currentYear }
  }
  if (currentMonth === 11) return { month: 0, year: currentYear + 1 }
  return { month: currentMonth + 1, year: currentYear }
}

function computeWeekNav(weekStart: Date, direction: 'prev' | 'next'): Date {
  const d = new Date(weekStart)
  d.setDate(d.getDate() + (direction === 'next' ? 7 : -7))
  return d
}

function computeDayNav(currentDate: Date, direction: 'prev' | 'next'): Date {
  const d = new Date(currentDate)
  d.setDate(d.getDate() + (direction === 'next' ? 1 : -1))
  return d
}

export interface CalendarViewProps {
  events: CalendarEvent[]
  initialDate?: Date
  today?: Date
}

export function CalendarView({ events, initialDate, today: todayProp }: CalendarViewProps) {
  const today = useMemo(() => todayProp ?? new Date(), [todayProp])

  const [view, setView] = useState<ViewType>('month')
  const [viewYear, setViewYear] = useState(initialDate?.getFullYear() ?? today.getFullYear())
  const [viewMonth, setViewMonth] = useState(initialDate?.getMonth() ?? today.getMonth())
  const [weekStart, setWeekStart] = useState(() => getWeekStart(initialDate ?? today))
  const [currentDate, setCurrentDate] = useState(() => initialDate ?? today)

  const handleViewChange = useCallback((newView: ViewType) => {
    setView(newView)
  }, [])

  const navigatePrev = useCallback(() => {
    switch (view) {
      case 'month': {
        const next = computeMonthNav(viewMonth, viewYear, 'prev')
        setViewMonth(next.month)
        setViewYear(next.year)
        break
      }
      case 'week':
        setWeekStart(computeWeekNav(weekStart, 'prev'))
        break
      case 'day':
        setCurrentDate(computeDayNav(currentDate, 'prev'))
        break
      case 'list': {
        const prev = computeDayNav(currentDate, 'prev')
        setCurrentDate(prev)
        setWeekStart(getWeekStart(prev))
        break
      }
    }
  }, [view, viewMonth, viewYear, weekStart, currentDate])

  const navigateNext = useCallback(() => {
    switch (view) {
      case 'month': {
        const next = computeMonthNav(viewMonth, viewYear, 'next')
        setViewMonth(next.month)
        setViewYear(next.year)
        break
      }
      case 'week':
        setWeekStart(computeWeekNav(weekStart, 'next'))
        break
      case 'day':
        setCurrentDate(computeDayNav(currentDate, 'next'))
        break
      case 'list': {
        const next = computeDayNav(currentDate, 'next')
        setCurrentDate(next)
        setWeekStart(getWeekStart(next))
        break
      }
    }
  }, [view, viewMonth, viewYear, weekStart, currentDate])

  const goToToday = useCallback(() => {
    setViewYear(today.getFullYear())
    setViewMonth(today.getMonth())
    setWeekStart(getWeekStart(today))
    setCurrentDate(today)
  }, [today])

  const handleEventClick = useCallback((event: CalendarEvent) => {
    if (event.url) {
      window.open(event.url, '_blank', 'noopener,noreferrer')
    }
  }, [])

  const toolbarTitle = useMemo(() => {
    if (view === 'month') return `${MONTH_NAMES[viewMonth]} ${viewYear}`
    if (view === 'week') return formatWeekRange(weekStart)
    if (view === 'day') return formatDayTitle(currentDate)
    return `${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getFullYear()}`
  }, [view, viewMonth, viewYear, weekStart, currentDate])

  const navLabel = view === 'month' ? 'month' : view === 'week' ? 'week' : 'day'

  return (
    <div
      className="mx-auto w-full max-w-[1100px] bg-white shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
      role="region"
      aria-label="Calendar"
    >
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e5e7eb] px-4 py-3">
        {/* Left: nav buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={goToToday}
            aria-label="Today"
            className="cursor-pointer rounded border border-[#007bff] bg-[#007bff] px-3 py-1.5 text-sm text-white hover:bg-[#0056b3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007bff]"
          >
            today
          </button>
          <button
            type="button"
            onClick={navigatePrev}
            aria-label={`Previous ${navLabel}`}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#007bff] bg-[#007bff] text-white hover:bg-[#0056b3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007bff]"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={navigateNext}
            aria-label={`Next ${navLabel}`}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-[#007bff] bg-[#007bff] text-white hover:bg-[#0056b3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007bff]"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Center: title */}
        <h2 className="text-lg font-medium text-[#212529]" aria-live="polite">
          {toolbarTitle}
        </h2>

        {/* Right: view toggle */}
        <div className="flex items-center gap-1" role="group" aria-label="View selector">
          {(['month', 'week', 'day', 'list'] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => handleViewChange(v)}
              aria-label={`Switch to ${VIEW_LABELS[v]} view`}
              aria-pressed={v === view}
              className={cn(
                'cursor-pointer rounded border px-3 py-1.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007bff]',
                v === view
                  ? 'border-[#007bff] bg-[#007bff] text-white'
                  : 'border-[#ccc] bg-white text-[#212529] hover:bg-gray-50',
              )}
            >
              {VIEW_LABELS[v]}
            </button>
          ))}
        </div>
      </div>

      {/* View content */}
      {view === 'month' && (
        <MonthView
          events={events}
          viewYear={viewYear}
          viewMonth={viewMonth}
          today={today}
          onEventClick={handleEventClick}
        />
      )}
      {view === 'week' && (
        <WeekView
          events={events}
          weekStart={weekStart}
          today={today}
          onEventClick={handleEventClick}
        />
      )}
      {view === 'day' && (
        <DayView events={events} currentDate={currentDate} onEventClick={handleEventClick} />
      )}
      {view === 'list' && (
        <ListView events={events} weekStart={weekStart} onEventClick={handleEventClick} />
      )}
    </div>
  )
}
