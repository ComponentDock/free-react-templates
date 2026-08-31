import { useMemo, useCallback } from 'react'
import { cn } from '@free-react-templates/ui'
import type { CalendarEvent } from '../utils/calendar'
import {
  getTimedEventsForDate,
  getAllDayEventsForDate,
  formatHour,
  isSameDate,
} from '../utils/calendar'
import { addDays, WEEKDAYS_SHORT } from '../utils/calendar'

const HOURS = Array.from({ length: 24 }, (_, i) => i)

interface WeekViewProps {
  events: CalendarEvent[]
  weekStart: Date
  today: Date
  onEventClick: (event: CalendarEvent) => void
}

function getEventHeight(event: CalendarEvent): number {
  if (!event.end) return 30
  const diff = event.end.getTime() - event.start.getTime()
  const hours = diff / (1000 * 60 * 60)
  return Math.max(hours * 60, 20)
}

export function WeekView({ events, weekStart, today, onEventClick }: WeekViewProps) {
  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
    [weekStart],
  )

  const handleEventClick = useCallback(
    (event: CalendarEvent) => {
      onEventClick(event)
    },
    [onEventClick],
  )

  // All-day events per day
  const allDayEventsByDay = useMemo(
    () => days.map((d) => getAllDayEventsForDate(events, d)),
    [events, days],
  )

  // Timed events per day
  const timedEventsByDay = useMemo(
    () => days.map((d) => getTimedEventsForDate(events, d)),
    [events, days],
  )

  return (
    <div className="overflow-x-auto">
      {/* All-day section */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)] border-b border-[#e5e7eb]">
        <div className="border-r border-[#e5e7eb] px-1 py-2 text-center text-xs text-[#666]">
          all-day
        </div>
        {days.map((_day, i) => (
          <div key={i} className="border-r border-[#e5e7eb] px-1 py-1">
            {allDayEventsByDay[i]!.map((event) => (
              <button
                key={event.id}
                type="button"
                onClick={() => handleEventClick(event)}
                className="mb-0.5 block w-full cursor-pointer truncate rounded bg-[#007bff] px-1 py-0.5 text-left text-xs text-white hover:bg-[#0056b3]"
              >
                {event.title}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Time grid */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)]">
        {/* Day headers */}
        <div className="border-r border-[#e5e7eb]" />
        {days.map((day, i) => {
          const isToday = isSameDate(day, today)
          return (
            <div
              key={i}
              className={cn(
                'border-r border-[#e5e7eb] px-1 py-2 text-center text-xs',
                isToday ? 'font-bold text-[#007bff]' : 'text-[#212529]',
              )}
            >
              <div>{WEEKDAYS_SHORT[i]}</div>
              <div className="text-lg">{day.getDate()}</div>
            </div>
          )
        })}

        {/* Hour rows */}
        {HOURS.map((hour) => (
          <div key={hour} className="contents">
            <div className="border-r border-t border-[#e5e7eb] px-1 py-2 text-right text-xs text-[#666]">
              {formatHour(hour)}
            </div>
            {days.map((_day, dayIdx) => (
              <div
                key={dayIdx}
                className="relative border-r border-t border-[#e5e7eb]"
                style={{ minHeight: 60 }}
              >
                {/* Event blocks for this hour */}
                {timedEventsByDay[dayIdx]!.filter((ev) => ev.start.getHours() === hour).map(
                  (event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => handleEventClick(event)}
                      className="absolute left-0.5 right-0.5 cursor-pointer truncate rounded bg-[#007bff] px-1 py-0.5 text-left text-xs text-white hover:bg-[#0056b3]"
                      style={{
                        top: (event.start.getMinutes() / 60) * 60,
                        height: getEventHeight(event),
                        zIndex: 1,
                      }}
                    >
                      {event.title}
                    </button>
                  ),
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
