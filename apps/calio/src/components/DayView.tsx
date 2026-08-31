import { useMemo, useCallback } from 'react'
import type { CalendarEvent } from '../utils/calendar'
import { getTimedEventsForDate, getAllDayEventsForDate, formatHour } from '../utils/calendar'

const HOURS = Array.from({ length: 24 }, (_, i) => i)

interface DayViewProps {
  events: CalendarEvent[]
  currentDate: Date
  onEventClick: (event: CalendarEvent) => void
}

function getEventHeight(event: CalendarEvent): number {
  if (!event.end) return 30
  const diff = event.end.getTime() - event.start.getTime()
  const hours = diff / (1000 * 60 * 60)
  return Math.max(hours * 60, 20)
}

export function DayView({ events, currentDate, onEventClick }: DayViewProps) {
  const timedEvents = useMemo(
    () => getTimedEventsForDate(events, currentDate),
    [events, currentDate],
  )

  const allDayEvents = useMemo(
    () => getAllDayEventsForDate(events, currentDate),
    [events, currentDate],
  )

  const handleEventClick = useCallback(
    (event: CalendarEvent) => {
      onEventClick(event)
    },
    [onEventClick],
  )

  return (
    <div className="overflow-x-auto">
      {/* All-day section */}
      {allDayEvents.length > 0 && (
        <div className="border-b border-[#e5e7eb] px-4 py-2">
          <div className="text-xs text-[#666]">All Day</div>
          {allDayEvents.map((event) => (
            <button
              key={event.id}
              type="button"
              onClick={() => handleEventClick(event)}
              className="mb-0.5 block cursor-pointer truncate rounded bg-[#007bff] px-2 py-1 text-sm text-white hover:bg-[#0056b3]"
            >
              {event.title}
            </button>
          ))}
        </div>
      )}

      {/* Time grid */}
      <div className="grid grid-cols-[60px_1fr]">
        {HOURS.map((hour) => (
          <div key={hour} className="contents">
            <div className="border-r border-t border-[#e5e7eb] px-1 py-2 text-right text-xs text-[#666]">
              {formatHour(hour)}
            </div>
            <div className="relative border-t border-[#e5e7eb]" style={{ minHeight: 60 }}>
              {timedEvents
                .filter((ev) => ev.start.getHours() === hour)
                .map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => handleEventClick(event)}
                    className="absolute left-0.5 right-0.5 cursor-pointer truncate rounded bg-[#007bff] px-2 py-0.5 text-left text-sm text-white hover:bg-[#0056b3]"
                    style={{
                      top: (event.start.getMinutes() / 60) * 60,
                      height: getEventHeight(event),
                      zIndex: 1,
                    }}
                  >
                    {event.title}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
