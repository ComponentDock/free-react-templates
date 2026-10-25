import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  book,
  daysInMonth,
  fullyBooked,
  services,
  slots,
  weekdays,
  weeks,
  type Service,
} from '../content'
import { SectionHeading, containerClass } from './ui'

const booked = new Set<number>(fullyBooked)

/**
 * The page's argument, not a screenshot of it: three services, an October
 * 2026 calendar with ten unbookable days, nine slots of which three are gone
 * and two are scarce, and a summary that only confirms when all three choices
 * exist.
 */
export function Booking() {
  const [service, setService] = useState<Service>(services[0])
  const [day, setDay] = useState<number>(book.defaultDay)
  const [slot, setSlot] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  const complete = slot !== null
  const status = confirmed ? book.status.done : slot === null ? book.status.idle : book.status.held
  const when = slot === null ? `${day} October 2026 — pick a time` : `${day} October 2026, ${slot}`
  const total = slot === null ? '—' : service.price

  const chooseService = (next: Service) => {
    setService(next)
    setConfirmed(false)
  }

  const chooseDay = (value: number) => {
    setDay(value)
    setConfirmed(false)
  }

  const chooseSlot = (time: string) => {
    setSlot(time)
    setConfirmed(false)
  }

  return (
    <section id="book" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading kicker={book.kicker} title={book.title} lede={book.lede} />

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm" data-testid="booking-widget">
          <div className="grid lg:grid-cols-12">
            <div className="border-b border-gray-200 p-6 lg:col-span-4 lg:border-r lg:border-b-0">
              <fieldset>
                <legend className="text-xs font-semibold tracking-[0.16em] text-gray-400 uppercase">1 · Choose a service</legend>
                <div className="mt-3 space-y-2">
                  {services.map((entry) => (
                    <label
                      key={entry.id}
                      className={cn(
                        'flex cursor-pointer items-start gap-3 rounded-xl border p-4',
                        entry.id === service.id ? 'border-primary-600 bg-primary-50' : 'border-gray-200',
                      )}
                    >
                      <input
                        type="radio"
                        name="slotline-service"
                        value={entry.id}
                        checked={entry.id === service.id}
                        onChange={() => chooseService(entry)}
                        className="mt-1 accent-primary-700"
                      />
                      <span className="flex-1">
                        <span className="flex items-baseline justify-between gap-3">
                          <span className="text-sm leading-5 font-semibold text-gray-900">{entry.name}</span>
                          <span className="text-sm leading-5 font-semibold text-primary-700">{entry.price}</span>
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-gray-500">{entry.duration}</span>
                        {entry.note === undefined ? null : (
                          <span className="mt-1 block text-xs leading-5 text-accent-700">{entry.note}</span>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="border-b border-gray-200 p-6 lg:col-span-4 lg:border-r lg:border-b-0">
              <p className="text-xs font-semibold tracking-[0.16em] text-gray-400 uppercase">2 · Pick a day</p>
              <p className="mt-3 font-serif text-lg leading-7 font-semibold text-gray-900">{book.month}</p>
              <table className="mt-2 w-full border-collapse">
                <caption className="sr-only">{book.calendarCaption}</caption>
                <thead>
                  <tr>
                    {weekdays.map((weekday) => (
                      <th
                        key={weekday.name}
                        scope="col"
                        className="pb-1 text-[0.65rem] font-semibold tracking-wider text-gray-400 uppercase"
                      >
                        <span aria-hidden="true">{weekday.letter}</span>
                        <span className="sr-only">{weekday.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((week, index) => (
                    <tr key={`week-${index}`}>
                      {week.map((value, cellIndex) =>
                        value === null ? (
                          <td key={`blank-${index}-${cellIndex}`} className="p-0.5">
                            <span className="block h-9" />
                          </td>
                        ) : (
                          <td key={`day-${value}`} className="p-0.5">
                            {booked.has(value) ? (
                              <span
                                title="Fully booked"
                                className="block h-9 w-full rounded-lg text-center text-sm leading-9 text-gray-300"
                              >
                                {value}
                              </span>
                            ) : (
                              <button
                                type="button"
                                aria-pressed={day === value}
                                onClick={() => chooseDay(value)}
                                className={cn(
                                  'h-9 w-full rounded-lg text-center text-sm leading-9 text-gray-700 transition-colors hover:bg-primary-100',
                                  day === value && 'bg-primary-700 font-semibold text-white hover:bg-primary-700',
                                )}
                              >
                                {value}
                              </button>
                            )}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-2 text-xs leading-5 text-gray-500">{book.calendarNote}</p>

              <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-gray-400 uppercase">3 · Pick a time</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {slots.map((entry) => {
                  const selected = slot === entry.time
                  return (
                    <button
                      key={entry.time}
                      type="button"
                      disabled={entry.state === 'booked'}
                      title={entry.title}
                      aria-pressed={entry.state === 'booked' ? undefined : selected}
                      onClick={() => chooseSlot(entry.time)}
                      className={cn(
                        'rounded-lg border px-2 py-2 text-sm leading-5 transition-colors',
                        entry.state === 'open' && 'border-gray-200 text-gray-700 hover:bg-primary-50',
                        entry.state === 'scarce' && 'border-accent-300 bg-accent-50 text-accent-800',
                        entry.state === 'booked' && 'cursor-not-allowed border-dashed border-gray-200 text-gray-300',
                        selected && 'border-primary-700 bg-primary-700 font-semibold text-white',
                      )}
                    >
                      {entry.time}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="p-6 lg:col-span-4">
              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="text-sm leading-5 font-semibold text-gray-900">{book.summaryTitle}</h4>
                <dl className="mt-3 space-y-2 text-sm leading-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-gray-500">Service</dt>
                    <dd className="font-medium text-gray-900">{service.name}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-gray-500">When</dt>
                    <dd className="text-right font-medium text-gray-900">{when}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-gray-500">Total</dt>
                    <dd className="font-semibold text-primary-700">{total}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  disabled={!complete}
                  onClick={() => setConfirmed(true)}
                  className={cn(
                    'mt-4 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition-colors',
                    complete
                      ? 'bg-primary-700 text-white hover:bg-primary-800'
                      : 'cursor-not-allowed bg-gray-300 text-gray-500',
                  )}
                >
                  {book.confirm}
                </button>
                <p role="status" className="mt-3 text-xs leading-5 text-gray-500">
                  {status}
                </p>
              </div>
              <p className="mt-3 text-[0.7rem] leading-5 text-gray-400">
                {daysInMonth} days in {book.month}. Ten are full.
              </p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-gray-500">{book.footNote}</p>
      </div>
    </section>
  )
}
