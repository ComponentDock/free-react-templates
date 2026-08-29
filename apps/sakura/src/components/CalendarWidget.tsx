import { useState, useCallback, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const

const MONTH_ABBR = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

const MONTH_FULL = [
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

/** Reference "today" — December 18, 2020 — matching the original screenshot. */
const REF_YEAR = 2020
const REF_MONTH = 11 // 0-indexed December
const REF_DAY = 18

/** Seed events — sample data in May 2020 (the original's own seed month). */
interface SeedEvent {
  occasion: string
  invited_count: number
  year: number
  month: number
  day: number
  cancelled?: boolean
}

const SEED_EVENTS: SeedEvent[] = [
  { occasion: 'Product review', invited_count: 6, year: 2020, month: 4, day: 12 },
  { occasion: 'Team standup', invited_count: 8, year: 2020, month: 4, day: 15 },
  { occasion: 'Sprint planning', invited_count: 12, year: 2020, month: 4, day: 20 },
]

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
  while (cells.length < 35 + offset && cells.length < 42) cells.push(null)
  return cells
}

interface CalendarWidgetProps {
  initialYear?: number
  initialMonth?: number
  initialDay?: number
}

export function CalendarWidget({
  initialYear = REF_YEAR,
  initialMonth = REF_MONTH,
  initialDay = REF_DAY,
}: CalendarWidgetProps = {}) {
  const [year, setYear] = useState(initialYear)
  const [month, setMonth] = useState(initialMonth)
  const [activeDay, setActiveDay] = useState(initialDay)
  const [events, setEvents] = useState<SeedEvent[]>(SEED_EVENTS)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [eventName, setEventName] = useState('')
  const [eventCount, setEventCount] = useState('')
  const [nameError, setNameError] = useState(false)
  const [countError, setCountError] = useState(false)

  const cells = useMemo(() => buildGrid(year, month), [year, month])

  const hasEvent = useCallback(
    (day: number) => events.some((e) => e.year === year && e.month === month && e.day === day),
    [events, year, month],
  )

  const eventsForDate = useMemo(
    () => events.filter((e) => e.year === year && e.month === month && e.day === activeDay),
    [events, year, month, activeDay],
  )

  const goToPrevYear = useCallback(() => {
    setYear((y) => y - 1)
  }, [])

  const goToNextYear = useCallback(() => {
    setYear((y) => y + 1)
  }, [])

  const selectMonth = useCallback((m: number) => {
    setMonth(m)
  }, [])

  const selectDay = useCallback((day: number) => {
    setActiveDay(day)
    setDialogOpen(false)
  }, [])

  const openDialog = useCallback(() => {
    setEventName('')
    setEventCount('')
    setNameError(false)
    setCountError(false)
    setDialogOpen(true)
  }, [])

  const closeDialog = useCallback(() => {
    setDialogOpen(false)
    setNameError(false)
    setCountError(false)
  }, [])

  const handleOk = useCallback(() => {
    const trimmedName = eventName.trim()
    if (!trimmedName) {
      setNameError(true)
      return
    }
    const count = Number(eventCount)
    if (eventCount === '' || isNaN(count)) {
      setCountError(true)
      return
    }
    setEvents((prev) => [
      ...prev,
      { occasion: trimmedName, invited_count: count, year, month, day: activeDay },
    ])
    setDialogOpen(false)
    setNameError(false)
    setCountError(false)
  }, [eventName, eventCount, activeDay, year, month])

  const eventDateLabel = `${MONTH_FULL[month]} ${activeDay}`

  return (
    <div className="mx-auto w-full max-w-[500px]">
      {/* White calendar card */}
      <div className="relative bg-card p-5 pb-20 font-sans">
        {/* Year header */}
        <div className="relative mb-2 h-10 text-center">
          <button
            onClick={goToPrevYear}
            className="absolute left-0 top-0 flex h-10 w-7 cursor-pointer items-center justify-center text-muted transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label="Previous year"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="inline-block h-10 leading-10 text-[20px] text-ink">{year}</span>
          <button
            onClick={goToNextYear}
            className="absolute right-0 top-0 flex h-10 w-7 cursor-pointer items-center justify-center text-muted transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label="Next year"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Month strip */}
        <div className="mb-2 flex justify-between px-0">
          {MONTH_ABBR.map((m, i) => (
            <button
              key={m}
              onClick={() => selectMonth(i)}
              className={cn(
                'cursor-pointer px-[2px] pt-[10px] pb-[6px] text-[11px] uppercase leading-[26px] transition-colors hover:text-brand max-lg:text-[9px] max-md:text-[10.5px]',
                i === month ? 'font-bold text-brand' : 'text-muted',
              )}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Weekday header */}
        <div className="mb-0 grid grid-cols-7 text-center">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="h-[26px] px-2.5 leading-[26px] text-[10px] uppercase text-ink"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 text-center">
          {cells.map((day, i) => {
            const isBlank = day === null
            const isEventDate = !isBlank && hasEvent(day!)
            const isActive = day === activeDay

            return (
              <div key={i} className="relative z-0">
                {!isBlank ? (
                  <button
                    onClick={() => selectDay(day!)}
                    className={cn(
                      'relative z-[1] mx-auto my-[5px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-transparent text-[15px] transition-all hover:scale-[1.03] active:scale-[0.97]',
                      isActive && 'border-transparent bg-brand text-date-text font-normal',
                      !isActive && isEventDate && 'border-brand bg-brand text-white',
                      !isActive && !isEventDate && 'border-transparent text-date-text',
                    )}
                    aria-label={`${day} ${MONTH_FULL[month]} ${year}`}
                  >
                    {day}
                    {isEventDate && !isActive && (
                      <span className="absolute -left-0.5 -top-0.5 z-[2] h-[10px] w-[10px] rounded-full border border-white bg-event-dot" />
                    )}
                  </button>
                ) : (
                  <span className="mx-auto my-[5px] block h-[40px] w-[40px]" />
                )}
              </div>
            )
          })}
        </div>

        {/* Add Event button */}
        <button
          onClick={openDialog}
          className="absolute bottom-5 right-5 cursor-pointer rounded-[25px] bg-brand px-[1.9rem] py-[0.65rem] text-[1rem] text-white transition-transform hover:scale-[1.03] active:translate-y-[3px] active:scale-[0.97]"
        >
          Add Event
        </button>

        {/* Add Event dialog */}
        {dialogOpen && (
          <div className="absolute inset-0 z-50 flex flex-col bg-brand p-5">
            <h2 className="mb-5 mt-[30px] text-center text-[28px] text-white">Add New Event</h2>
            <div className="mx-auto mt-[20%] w-full max-w-[300px]">
              <label
                htmlFor="event-name"
                className="mb-1 block text-[13px] uppercase tracking-[1px] text-white/90"
              >
                Event name
              </label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => {
                  setEventName(e.target.value)
                  if (nameError) setNameError(false)
                }}
                id="event-name"
                maxLength={36}
                className={cn(
                  'mb-7 block h-10 w-full rounded-[40px] border bg-transparent px-3 text-center text-white outline-none transition-colors focus:border-white',
                  nameError ? 'border-error' : 'border-white/20',
                )}
                aria-invalid={nameError}
              />
              <label
                htmlFor="event-count"
                className="mb-1 block text-[13px] uppercase tracking-[1px] text-white/90"
              >
                Number of people to invite
              </label>
              <input
                type="number"
                value={eventCount}
                onChange={(e) => {
                  setEventCount(e.target.value)
                  if (countError) setCountError(false)
                }}
                min={0}
                id="event-count"
                max={1000000}
                className={cn(
                  'mb-7 block h-10 w-full rounded-[40px] border bg-transparent px-3 text-center text-white outline-none transition-colors focus:border-white',
                  countError ? 'border-error' : 'border-white/20',
                )}
                aria-invalid={countError}
              />
              <div className="flex justify-center gap-4">
                <button
                  onClick={closeDialog}
                  className="cursor-pointer rounded-[25px] bg-ink px-[1.9rem] py-[0.65rem] text-[1rem] text-white transition-transform hover:scale-[1.03] active:translate-y-[3px] active:scale-[0.97]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleOk}
                  className="cursor-pointer rounded-[25px] bg-white px-[1.9rem] py-[0.65rem] text-[1rem] text-ink transition-transform hover:scale-[1.03] active:translate-y-[3px] active:scale-[0.97]"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Events panel */}
      <div className="w-full">
        {eventsForDate.length === 0 ? (
          <div className="rounded bg-brand px-5 py-5 text-center text-[1rem] text-white">
            There are no events planned for {eventDateLabel}.
          </div>
        ) : (
          eventsForDate.map((evt, i) => (
            <div key={i} className="rounded-[4px] bg-brand px-5 py-5 text-[1rem] text-white">
              <span>{evt.occasion}:</span> <span>{evt.invited_count} Invited</span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
