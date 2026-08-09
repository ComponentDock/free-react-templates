import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { formatSummary, validateReservation, type ReservationErrors } from '../lib/reservation'
import { Stepper } from './Stepper'

export function ReservationForm() {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [errors, setErrors] = useState<ReservationErrors>({})
  const [summary, setSummary] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateReservation({
      destination,
      checkIn,
      checkOut,
      rooms,
      adults,
      children,
    })
    setErrors(nextErrors)
    setSummary(
      Object.keys(nextErrors).length === 0
        ? formatSummary({ destination, checkIn, checkOut, rooms, adults, children })
        : '',
    )
  }

  return (
    <div className="rounded-sm bg-white p-6 shadow-xl sm:p-8">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="destination"
            className="block text-xs font-medium uppercase tracking-wide text-mist"
          >
            Your Destination
          </label>
          <input
            id="destination"
            type="text"
            value={destination}
            placeholder="Enter a destination or hotel name"
            onChange={(event) => setDestination(event.target.value)}
            aria-invalid={errors.destination ? true : undefined}
            className="mt-2 h-11 w-full rounded-sm border border-transparent bg-paper px-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none"
          />
          {errors.destination && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.destination}
            </p>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="check-in"
              className="block text-xs font-medium uppercase tracking-wide text-mist"
            >
              Check in
            </label>
            <input
              id="check-in"
              type="date"
              value={checkIn}
              onChange={(event) => setCheckIn(event.target.value)}
              aria-invalid={errors.checkIn ? true : undefined}
              className="mt-2 h-11 w-full rounded-sm border border-transparent bg-paper px-3 text-sm text-ink focus:border-brand focus:outline-none"
            />
            {errors.checkIn && (
              <p role="alert" className="mt-1 text-xs font-medium text-red-600">
                {errors.checkIn}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="check-out"
              className="block text-xs font-medium uppercase tracking-wide text-mist"
            >
              Check out
            </label>
            <input
              id="check-out"
              type="date"
              value={checkOut}
              min={checkIn || undefined}
              onChange={(event) => setCheckOut(event.target.value)}
              aria-invalid={errors.checkOut ? true : undefined}
              className="mt-2 h-11 w-full rounded-sm border border-transparent bg-paper px-3 text-sm text-ink focus:border-brand focus:outline-none"
            />
            {errors.checkOut && (
              <p role="alert" className="mt-1 text-xs font-medium text-red-600">
                {errors.checkOut}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <Stepper label="Rooms" value={rooms} min={1} onChange={setRooms} />
          <Stepper label="Adults" value={adults} min={1} onChange={setAdults} />
          <Stepper label="Children" value={children} min={0} onChange={setChildren} />
        </div>

        <Button type="submit" size="lg" className="mt-6 h-12 w-full rounded-sm font-medium">
          Check availability
        </Button>

        {summary && (
          <p
            role="status"
            className="mt-4 rounded-sm bg-brand/10 px-3 py-2 text-sm font-medium text-ink"
          >
            {summary}
          </p>
        )}
      </form>
    </div>
  )
}
