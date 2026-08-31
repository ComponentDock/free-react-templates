import { useState, useMemo, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { CalendarEvent } from '../utils/calendar'
import { buildGrid, getEventsForDate, formatTimePrefix, isSameDate } from '../utils/calendar'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

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

const MAX_VISIBLE_EVENTS = 4

export function moveEventToDate(
  events: CalendarEvent[],
  eventId: string,
  targetDate: Date,
): CalendarEvent[] {
  return events.map((ev) => {
    if (ev.id !== eventId) return ev
    const newStart = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      targetDate.getDate(),
      ev.start.getHours(),
      ev.start.getMinutes(),
    )
    if (ev.end) {
      const duration = ev.end.getTime() - ev.start.getTime()
      return { ...ev, start: newStart, end: new Date(newStart.getTime() + duration) }
    }
    return { ...ev, start: newStart }
  })
}

export function computeNavigation(
  currentMonth: number,
  currentYear: number,
  direction: 'prev' | 'next',
): { month: number; year: number } {
  if (direction === 'prev') {
    if (currentMonth === 0) return { month: 11, year: currentYear - 1 }
    return { month: currentMonth - 1, year: currentYear }
  }
  if (currentMonth === 11) return { month: 0, year: currentYear + 1 }
  return { month: currentMonth + 1, year: currentYear }
}

export interface CalendarProps {
  events: CalendarEvent[]
  initialDate?: Date
  today?: Date
}

export function Calendar({ events, initialDate, today: todayProp }: CalendarProps) {
  const today = useMemo(() => todayProp ?? new Date(), [todayProp])

  const [viewYear, setViewYear] = useState(initialDate?.getFullYear() ?? today.getFullYear())
  const [viewMonth, setViewMonth] = useState(initialDate?.getMonth() ?? today.getMonth())
  const [localEvents, setLocalEvents] = useState<CalendarEvent[]>(events)
  const [openPopoverDate, setOpenPopoverDate] = useState<Date | null>(null)

  const grid = useMemo(() => buildGrid(viewYear, viewMonth, today), [viewYear, viewMonth, today])

  const monthLabel = `${MONTH_NAMES[viewMonth]} ${viewYear}`

  const navigateMonth = useCallback(
    (direction: 'prev' | 'next') => {
      const next = computeNavigation(viewMonth, viewYear, direction)
      setViewMonth(next.month)
      setViewYear(next.year)
      setOpenPopoverDate(null)
    },
    [viewMonth, viewYear],
  )

  const goToToday = useCallback(() => {
    setViewYear(today.getFullYear())
    setViewMonth(today.getMonth())
    setOpenPopoverDate(null)
  }, [today])

  const handleDrop = useCallback((e: React.DragEvent, targetDate: Date) => {
    e.preventDefault()
    const eventId = e.dataTransfer.getData('text/plain')
    if (!eventId) return
    setLocalEvents((prev) => moveEventToDate(prev, eventId, targetDate))
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }, [])

  const handleEventClick = useCallback((event: CalendarEvent) => {
    if (event.url) {
      window.open(event.url, '_blank', 'noopener,noreferrer')
    }
  }, [])

  const handleMoreClick = useCallback((date: Date) => {
    setOpenPopoverDate((prev) => (prev && isSameDate(prev, date) ? null : date))
  }, [])

  const handleClosePopover = useCallback(() => {
    setOpenPopoverDate(null)
  }, [])

  return (
    <div
      className="mx-auto w-full max-w-[900px] bg-white p-[30px] shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
      role="region"
      aria-label="Calendar"
    >
      {/* Toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-[28px] font-medium text-[#212529]" aria-live="polite">
          {monthLabel}
        </h2>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={goToToday}
            aria-label="Today"
            className="cursor-pointer rounded px-3 py-1.5 text-sm font-normal text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f67280]"
            style={{ backgroundColor: '#f67280', border: '1px solid #f67280' }}
          >
            today
          </button>
          <button
            type="button"
            onClick={() => navigateMonth('prev')}
            aria-label="Previous month"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f67280]"
            style={{ backgroundColor: '#f67280', border: '1px solid #f67280' }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => navigateMonth('next')}
            aria-label="Next month"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f67280]"
            style={{ backgroundColor: '#f67280', border: '1px solid #f67280' }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Weekday header */}
      <div className="grid grid-cols-7">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="border border-[#f9f9f9] px-1 py-2 text-center text-base font-bold text-[#212529]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Month grid */}
      <div className="grid grid-cols-7">
        {grid.flat().map((cell, idx) => {
          const dayEvents = getEventsForDate(localEvents, cell.date)
          const visibleEvents = dayEvents.slice(0, MAX_VISIBLE_EVENTS)
          const overflowCount = dayEvents.length - MAX_VISIBLE_EVENTS
          const hasPopover = openPopoverDate !== null && isSameDate(openPopoverDate, cell.date)

          return (
            <div
              key={idx}
              className={cn(
                'relative min-h-[80px] border border-[#f9f9f9] p-0.5',
                cell.isToday && 'bg-[#40e0d0]',
              )}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, cell.date)}
            >
              {/* Day number */}
              <div
                className={cn(
                  'text-right text-sm',
                  cell.isCurrentMonth ? 'text-[#212529]' : 'text-[#212529] opacity-30',
                )}
              >
                {cell.day}
              </div>

              {/* Event bars */}
              <div className="mt-0.5 space-y-px">
                {visibleEvents.map((event) => (
                  <div
                    key={event.id}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData('text/plain', event.id)
                      e.dataTransfer.effectAllowed = 'move'
                    }}
                    onClick={() => handleEventClick(event)}
                    className={cn(
                      'cursor-pointer truncate rounded-[3px] border border-[#f67280] bg-[#f67280] px-0.5 text-[0.85em] leading-[1.4] text-white',
                      event.url && 'underline-offset-1 hover:underline',
                    )}
                    title={
                      event.allDay ? event.title : `${formatTimePrefix(event.start)} ${event.title}`
                    }
                  >
                    {event.allDay ? event.title : `${formatTimePrefix(event.start)} ${event.title}`}
                  </div>
                ))}
              </div>

              {/* "+N more" link */}
              {overflowCount > 0 && (
                <button
                  type="button"
                  onClick={() => handleMoreClick(cell.date)}
                  className="mt-0.5 cursor-pointer border-none bg-transparent p-0 text-[0.85em] text-[#007bff] underline hover:underline"
                >
                  +{overflowCount} more
                </button>
              )}

              {/* Overflow popover */}
              {hasPopover && (
                <div
                  className="absolute left-0 top-full z-10 mt-1 w-48 rounded bg-white p-2 shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
                  role="dialog"
                  aria-label={`Events for ${MONTH_NAMES[viewMonth]} ${cell.day}`}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#212529]">
                      {MONTH_NAMES[viewMonth]} {cell.day}
                    </span>
                    <button
                      type="button"
                      onClick={handleClosePopover}
                      aria-label="Close"
                      className="cursor-pointer rounded p-0.5 text-[#666] hover:bg-gray-100"
                    >
                      <X size={12} />
                    </button>
                  </div>
                  {dayEvents.slice(MAX_VISIBLE_EVENTS).map((event) => (
                    <div
                      key={event.id}
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData('text/plain', event.id)
                        e.dataTransfer.effectAllowed = 'move'
                      }}
                      onClick={() => handleEventClick(event)}
                      className={cn(
                        'cursor-pointer truncate rounded-[3px] border border-[#f67280] bg-[#f67280] px-0.5 py-px text-[0.85em] leading-[1.4] text-white',
                        event.url && 'underline-offset-1 hover:underline',
                      )}
                    >
                      {event.allDay
                        ? event.title
                        : `${formatTimePrefix(event.start)} ${event.title}`}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
