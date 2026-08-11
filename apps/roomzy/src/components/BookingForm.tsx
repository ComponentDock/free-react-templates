import { useState, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import { CheckCircle2 } from 'lucide-react'

const ADULT_OPTIONS = ['1', '2', '3']
const CHILD_OPTIONS = ['0', '1', '2']
const ROOM_TYPES = ['Private Room (1 to 2 People)', 'Family Room (1 to 4 People)']

/* 80px-tall sharp-cornered control: white fill, #dddee9 dividers. Stacked
   fields drop the bottom border so rows share a single divider line (the
   next field's top border); sibling columns drop the left border on
   sm+ screens. */
const fieldBase =
  'h-20 w-full rounded-none border border-line border-b-0 bg-white px-5 pt-[25px] text-xl font-bold text-ink placeholder:text-line focus:bg-frost focus:outline-none'

/* Floating label: absolute top-left inside the field, italic brand red. */
const labelClass = 'absolute left-5 top-[10px] text-sm italic leading-6 text-brand'

function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-1 right-0 flex h-8 w-8 items-center justify-center text-xl text-line"
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

export function BookingForm() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [adults, setAdults] = useState('1')
  const [children, setChildren] = useState('0')
  const [roomType, setRoomType] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setSubmitted(true)
  }

  function handleBookAnotherStay() {
    setCheckIn('')
    setCheckOut('')
    setAdults('1')
    setChildren('0')
    setRoomType('')
    setEmail('')
    setPhone('')
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div role="status" className="w-full max-w-[586px] bg-white text-center">
        <CheckCircle2 aria-hidden="true" className="mx-auto h-16 w-16 text-brand" />
        <h1 className="mt-4 text-2xl font-bold text-ink">Booking request received!</h1>
        <p className="mt-2 text-sm text-ink/70">
          Our team will contact you shortly to confirm your reservation.
        </p>
        <Button
          type="button"
          variant="primary"
          size="lg"
          onClick={handleBookAnotherStay}
          className="mt-8 h-20 w-full rounded-none text-lg font-bold capitalize"
        >
          Book another stay
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[586px]">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative">
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
        </div>
        <div className="relative">
          <label htmlFor="check-out" className={labelClass}>
            Check Out
          </label>
          <input
            id="check-out"
            name="check-out"
            type="date"
            required
            value={checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            className={cn(fieldBase, 'sm:border-l-0', checkOut === '' && 'text-line')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative">
          <label htmlFor="adults" className={labelClass}>
            Adults (18+)
          </label>
          <select
            id="adults"
            name="adults"
            value={adults}
            onChange={(event) => setAdults(event.target.value)}
            className={cn(fieldBase, 'appearance-none pr-10')}
          >
            {ADULT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <SelectArrow />
        </div>
        <div className="relative">
          <label htmlFor="children" className={labelClass}>
            Children (0-17)
          </label>
          <select
            id="children"
            name="children"
            value={children}
            onChange={(event) => setChildren(event.target.value)}
            className={cn(fieldBase, 'sm:border-l-0 appearance-none pr-10')}
          >
            {CHILD_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <SelectArrow />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="room-type" className={labelClass}>
          Room Type
        </label>
        <select
          id="room-type"
          name="room-type"
          required
          value={roomType}
          onChange={(event) => setRoomType(event.target.value)}
          className={cn(fieldBase, 'appearance-none pr-10', roomType === '' && 'text-line')}
        >
          <option value="" hidden>
            Select room type
          </option>
          {ROOM_TYPES.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
        <SelectArrow />
      </div>

      <div className="relative">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          placeholder="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
          className={cn(fieldBase, email === '' && 'text-line')}
        />
      </div>

      <div className="relative">
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          placeholder="Enter your phone number"
          onChange={(event) => setPhone(event.target.value)}
          className={cn(fieldBase, phone === '' && 'text-line')}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="h-20 w-full rounded-none text-lg font-bold capitalize"
      >
        Book Now
      </Button>
    </form>
  )
}
