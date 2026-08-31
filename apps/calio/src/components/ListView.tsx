import { useMemo, useCallback } from 'react'
import type { CalendarEvent } from '../utils/calendar'
import { getEventsForDate, formatTimeLong } from '../utils/calendar'
import { addDays, WEEKDAYS_FULL, MONTH_NAMES } from '../utils/calendar'

interface ListViewProps {
  events: CalendarEvent[]
  weekStart: Date
  onEventClick: (event: CalendarEvent) => void
}

export function ListView({ events, weekStart, onEventClick }: ListViewProps) {
  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
    [weekStart],
  )

  const eventsByDay = useMemo(() => days.map((d) => getEventsForDate(events, d)), [events, days])

  const handleEventClick = useCallback(
    (event: CalendarEvent) => {
      onEventClick(event)
    },
    [onEventClick],
  )

  return (
    <div className="divide-y divide-[#e5e7eb]">
      {days.map((day, i) => {
        const dayEvents = eventsByDay[i]!
        if (dayEvents.length === 0) return null
        const dayLabel = `${WEEKDAYS_FULL[i]}, ${MONTH_NAMES[day.getMonth()]} ${day.getDate()}`
        return (
          <div key={i} className="px-4 py-3">
            <div className="mb-2 text-sm font-bold text-[#212529]">{dayLabel}</div>
            <div className="space-y-1">
              {dayEvents.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => handleEventClick(event)}
                  className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-left text-sm hover:bg-gray-100"
                >
                  <span className="w-20 text-xs text-[#666]">
                    {event.allDay ? 'All day' : formatTimeLong(event.start)}
                  </span>
                  <span className="text-[#212529]">{event.title}</span>
                </button>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
