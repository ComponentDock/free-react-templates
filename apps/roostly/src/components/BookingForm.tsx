import { useState, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'

const GUEST_OPTIONS = ['1', '2', '3']

/* Borderless 50px-tall control: transparent fill, 20px #222 text, no focus
   shadow — mirrors the source .form-control. */
const fieldBase =
  'h-[50px] w-full rounded-none border-none bg-transparent p-0 text-xl font-normal text-ink shadow-none placeholder:text-line focus:outline-none'

/* Small hot-pink label above each field (14px / 25px line-height). */
const labelClass = 'block h-[25px] text-sm font-normal leading-[25px] text-brand'

/* Thin 2px vertical divider between columns (rgba(129,131,144,0.15), 75px
   tall, aligned with the input row). Hidden on mobile where fields stack. */
function ColumnDivider() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-[25px] hidden h-[75px] w-[2px] bg-divider md:block"
    />
  )
}

/* Custom rotated ➜ (U+279C) select arrow, bottom-right of the field. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[30px] right-0 flex h-8 w-8 items-center justify-center text-sm text-line"
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

/* Pure summary formatter — kept exported for direct 100%-coverage tests. */
export function formatSummary(
  destination: string,
  checkIn: string,
  checkOut: string,
  guests: string,
): string {
  const guestLabel = guests === '1' ? '1 guest' : `${guests} guests`
  return `${destination} · ${checkIn} → ${checkOut} · ${guestLabel}`
}

export function BookingForm() {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('1')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) return
    setSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1140px] rounded-[2px] bg-white shadow-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Destination */}
        <div className="relative p-[25px] md:col-span-3">
          <label htmlFor="destination" className={labelClass}>
            Destination
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            required
            value={destination}
            placeholder="Country, ZIP, city..."
            onChange={(event) => setDestination(event.target.value)}
            className={fieldBase}
          />
          <ColumnDivider />
        </div>

        {/* Check In | Check out | Guests (nested row, col-6 equivalent) */}
        <div className="md:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="relative p-[25px] md:col-span-5">
              <label htmlFor="check-in" className={labelClass}>
                Check In
              </label>
              <input
                id="check-in"
                name="check-in"
                type="date"
                required
                value={checkIn}
                onChange={(event) => setCheckIn(event.target.value)}
                className={cn(fieldBase, checkIn === '' && 'text-line')}
              />
              <ColumnDivider />
            </div>
            <div className="relative p-[25px] md:col-span-5">
              <label htmlFor="check-out" className={labelClass}>
                Check out
              </label>
              <input
                id="check-out"
                name="check-out"
                type="date"
                required
                value={checkOut}
                min={checkIn}
                onChange={(event) => setCheckOut(event.target.value)}
                className={cn(fieldBase, checkOut === '' && 'text-line')}
              />
              <ColumnDivider />
            </div>
            <div className="relative p-[25px] md:col-span-2">
              <label htmlFor="guests" className={labelClass}>
                Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                className={cn(fieldBase, 'cursor-pointer appearance-none pr-10')}
              >
                {GUEST_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <SelectArrow />
              <ColumnDivider />
            </div>
          </div>
        </div>

        {/* Check availability */}
        <div className="p-[25px] md:col-span-3">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-[75px] w-full rounded-[2px] text-base font-normal capitalize"
          >
            Check availability
          </Button>
        </div>
      </div>

      {submitted && (
        <p role="status" className="mx-[25px] mb-[25px] bg-brand/10 px-4 py-3 text-sm text-brand">
          {formatSummary(destination, checkIn, checkOut, guests)}
        </p>
      )}
    </form>
  )
}
