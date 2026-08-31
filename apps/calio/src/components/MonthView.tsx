import { useMemo, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'
import type { CalendarEvent } from '../utils/calendar'
import { buildGrid, getEventsForDate, formatTime, isSameDate } from '../utils/calendar'
import { WEEKDAYS_SHORT } from '../utils/calendar'

const MAX_VISIBLE_EVENTS = 4

interface MonthViewProps {
  events: CalendarEvent[]
  viewYear: number
  viewMonth: number
  today: Date
  onEventClick: (event: CalendarEvent) => void
}

export function MonthView({ events, viewYear, viewMonth, today, onEventClick }: MonthViewProps) {
  const grid = useMemo(() => buildGrid(viewYear, viewMonth, today), [viewYear, viewMonth, today])

  const handleEventClick = useCallback(
    (event: CalendarEvent) => {
      onEventClick(event)
    },
    [onEventClick],
  )

  return (
    <div>
      {/* Weekday header */}
      <div className="grid grid-cols-7">
        {WEEKDAYS_SHORT.map((day) => (
          <div
            key={day}
            className="border border-[#e5e7eb] px-1 py-2 text-center text-base font-bold text-[#212529]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Month grid */}
      <div className="grid grid-cols-7">
        {grid.flat().map((cell, idx) => {
          const dayEvents = getEventsForDate(events, cell.date)
          const visibleEvents = dayEvents.slice(0, MAX_VISIBLE_EVENTS)
          const overflowCount = dayEvents.length - MAX_VISIBLE_EVENTS
          const isToday = isSameDate(cell.date, today)

          return (
            <div
              key={idx}
              className={cn(
                'relative min-h-[80px] border border-[#e5e7eb] p-0.5',
                isToday && 'bg-[#007bff]/10',
              )}
            >
              {/* Day number */}
              <div
                className={cn(
                  'text-right text-sm',
                  cell.isCurrentMonth ? 'text-[#212529]' : 'text-[#212529] opacity-30',
                  isToday && 'font-bold text-[#007bff]',
                )}
              >
                {cell.day}
              </div>

              {/* Event bars */}
              <div className="mt-0.5 space-y-px">
                {visibleEvents.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => handleEventClick(event)}
                    className={cn(
                      'block w-full cursor-pointer truncate rounded-[3px] border border-[#007bff] bg-[#007bff] px-0.5 text-left text-[0.85em] leading-[1.4] text-white',
                      event.url && 'hover:underline',
                    )}
                    title={event.allDay ? event.title : `${formatTime(event.start)} ${event.title}`}
                  >
                    {event.allDay ? event.title : `${formatTime(event.start)} ${event.title}`}
                  </button>
                ))}
              </div>

              {/* "+N more" link */}
              {overflowCount > 0 && (
                <span className="mt-0.5 block text-[0.85em] text-[#007bff]">
                  +{overflowCount} more
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
