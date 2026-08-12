import { useState, type FormEvent } from 'react'
import { Calendar, ChevronDown, Minus, Plus } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { GUEST_STEPPERS, ROOM_TYPES } from '../data'
import { bookingSchema, fieldErrors, initialBooking, type BookingValues } from '../lib/forms'

const DATE_FIELDS = [
  { name: 'fromDate', label: 'From', errorKey: 'fromDate' },
  { name: 'toDate', label: 'To', errorKey: 'toDate' },
] as const

/* BookingForm — the dark translucent "Check Availability" card that
   overlaps the hero's bottom edge: From/To date fields with calendar
   icons, Adults/Children/Rooms quantity steppers, a room-type dropdown and
   a peach "Go" button. Zod-validated; on success the card is replaced by a
   confirmation. */
export function BookingForm() {
  const [values, setValues] = useState<BookingValues>(initialBooking)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [submitted, setSubmitted] = useState(false)

  const setCount = (name: 'adults' | 'children' | 'rooms', delta: number) => {
    setValues((current) => ({ ...current, [name]: Math.max(0, current[name] + delta) }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = bookingSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors(result))
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section
        aria-label="Check Availability"
        className="relative z-[99] -mt-[362px] bg-black/47 px-6 py-16 text-white"
      >
        <p role="status" className="mx-auto max-w-2xl text-center text-2xl">
          Thank you — your reservation request has been received. Our team will get back to you
          shortly.
        </p>
      </section>
    )
  }

  return (
    <section aria-label="Check Availability" className="relative z-[99] -mt-[362px] bg-black/47">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto max-w-6xl px-6 pb-[65px] pt-[30px]"
      >
        <h4 className="mb-[30px] text-2xl text-white">Check Availability</h4>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {DATE_FIELDS.map((field) => (
            <div key={field.name} className="bg-white p-[18px] text-ink">
              <p className="mb-[7px] text-sm font-semibold text-ink">{field.label}</p>
              <div className="relative">
                <input
                  aria-label={field.label}
                  value={values[field.name]}
                  onChange={(event) =>
                    setValues((current) => ({ ...current, [field.name]: event.target.value }))
                  }
                  placeholder="dd / mm / yyyy"
                  className="w-full border-b border-[#888888] pb-1 text-[10px] font-bold uppercase tracking-[1.2px] text-ink opacity-50 outline-none placeholder:opacity-50"
                />
                <Calendar
                  aria-hidden="true"
                  className="absolute bottom-2 right-0 h-4 w-4 text-ink/50"
                />
              </div>
              {errors[field.errorKey] && (
                <p role="alert" className="mt-2 text-xs font-medium text-red-600">
                  {errors[field.errorKey]}
                </p>
              )}
            </div>
          ))}

          <div className="bg-white p-[18px] text-ink">
            <div className="flex gap-[30px]">
              {GUEST_STEPPERS.map((stepper) => (
                <div key={stepper.name}>
                  <p className="mb-[10px] text-sm font-semibold text-ink">{stepper.label}</p>
                  <div className="flex items-center border-b border-[#888888]">
                    <button
                      type="button"
                      aria-label={`Decrease ${stepper.name}`}
                      onClick={() => setCount(stepper.name, -1)}
                      className="w-[15px] text-[11px] text-ink"
                    >
                      <Minus aria-hidden="true" className="h-3 w-3" />
                    </button>
                    <input
                      aria-label={stepper.label}
                      value={values[stepper.name]}
                      readOnly
                      className="w-[28px] border-none text-center text-sm font-semibold text-ink opacity-25 outline-none"
                    />
                    <button
                      type="button"
                      aria-label={`Increase ${stepper.name}`}
                      onClick={() => setCount(stepper.name, 1)}
                      className="w-[15px] text-[11px] text-ink"
                    >
                      <Plus aria-hidden="true" className="h-3 w-3" />
                    </button>
                  </div>
                  {errors[stepper.name] && (
                    <p role="alert" className="mt-2 text-xs font-medium text-red-600">
                      {errors[stepper.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-[18px] text-ink">
            <p className="mb-[10px] text-sm font-semibold text-ink">Room</p>
            <div className="relative">
              <select
                aria-label="Room type"
                value={values.roomType}
                onChange={(event) =>
                  setValues((current) => ({ ...current, roomType: event.target.value }))
                }
                className="w-full appearance-none border-b border-[#888888] bg-transparent pb-1 text-[10px] font-bold uppercase tracking-[1.2px] text-ink opacity-50 outline-none"
              >
                {ROOM_TYPES.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="absolute bottom-2 right-0 h-4 w-4 text-ink/50"
              />
            </div>
            {errors.roomType && (
              <p role="alert" className="mt-2 text-xs font-medium text-red-600">
                {errors.roomType}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="h-auto rounded-none border border-brand bg-brand px-[27px] py-[43px] text-lg text-white hover:opacity-90"
          >
            Go
          </Button>
        </div>
      </form>
    </section>
  )
}
