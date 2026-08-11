import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Control recreated from the source CSS: #2d2d2d fill, 50px tall, padding
   0 20px, no border, radius 0, 14px white text, dim rgba(255,255,255,0.3)
   placeholder, no focus ring. */
const controlClass =
  'h-[50px] w-full rounded-none border-none bg-input px-5 text-sm text-white ' +
  'placeholder:text-smoke focus:outline-none'

/* Static white label ABOVE the input (the source's .form-label): 14px
   weight-400 #fff with letter-spacing 0.4px — NOT a floating label, NOT a
   bottom-edge tab bar. */
const labelClass = 'mb-[5px] inline-block text-sm font-normal tracking-[0.4px] text-white'

const errorClass = 'mt-1 text-xs font-bold text-red-400'

/* Custom select arrow: rotated ➜ (U+279C) as a floating white 32×32 glyph
   at right 6px bottom 6px — NO tab background (unlike Innly's grey tab),
   no focus color change (unlike Triply's bottom bar). */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-1.5 right-1.5 flex h-8 w-8 items-center justify-center text-sm text-white"
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  children: ReactNode
}

/* form-group wrapper: label above the control + error message below. The
   control itself is passed as children (it carries id/value/onChange). */
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="relative mb-[30px]">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    checkIn: '',
    checkOut: '',
    rooms: '',
    adults: '',
    children: '',
  })
  const [errors, setErrors] = useState<BookingErrors>({})
  const [summary, setSummary] = useState<string | null>(null)

  function updateField(field: BookingField) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = event.target.value
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateBooking(values)
    setErrors(nextErrors)
    setSummary(Object.keys(nextErrors).length === 0 ? formatSummary(values) : null)
  }

  const checkInActive = values.checkIn !== ''
  const checkOutActive = values.checkOut !== ''
  const roomsActive = values.rooms !== ''
  const adultsActive = values.adults !== ''
  const childrenActive = values.children !== ''

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[586px] bg-panel p-10 shadow-[0px_5px_15px_-5px_rgba(0,0,0,0.8)]"
    >
      <div className="mb-[25px] text-center">
        {/* Centered white sans-serif headline (Hind, the body font) — NOT a
            serif display font (unlike Innly's Cardo). */}
        <h1 className="text-[42px] font-bold capitalize leading-tight text-white">
          Make your reservation
        </h1>
      </div>

      {/* Row 1: Check In + Check out side by side — NO ⇔ divider (unlike
          Innly/Booking 15). */}
      <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
        <Field id="checkIn" label="Check In" error={errors.checkIn}>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            value={values.checkIn}
            onChange={updateField('checkIn')}
            aria-invalid={errors.checkIn ? true : undefined}
            className={cn(controlClass, checkInActive ? 'text-white' : 'text-smoke')}
          />
        </Field>

        <Field id="checkOut" label="Check out" error={errors.checkOut}>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            value={values.checkOut}
            onChange={updateField('checkOut')}
            aria-invalid={errors.checkOut ? true : undefined}
            className={cn(controlClass, checkOutActive ? 'text-white' : 'text-smoke')}
          />
        </Field>
      </div>

      {/* Row 2: No of rooms, Adults, Children selects + floating arrows. */}
      <div className="grid grid-cols-1 gap-x-5 md:grid-cols-3">
        <Field id="rooms" label="No of rooms" error={errors.rooms}>
          <div className="relative">
            <select
              id="rooms"
              name="rooms"
              required
              value={values.rooms}
              onChange={updateField('rooms')}
              aria-invalid={errors.rooms ? true : undefined}
              className={cn(
                controlClass,
                'appearance-none pr-8 [&>option]:text-neutral-900',
                roomsActive ? 'text-white' : 'text-smoke',
              )}
            >
              <option value="" hidden>
                Select No of rooms
              </option>
              {['1', '2', '3'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectArrow />
          </div>
        </Field>

        <Field id="adults" label="Adults" error={errors.adults}>
          <div className="relative">
            <select
              id="adults"
              name="adults"
              required
              value={values.adults}
              onChange={updateField('adults')}
              aria-invalid={errors.adults ? true : undefined}
              className={cn(
                controlClass,
                'appearance-none pr-8 [&>option]:text-neutral-900',
                adultsActive ? 'text-white' : 'text-smoke',
              )}
            >
              <option value="" hidden>
                Select Adults
              </option>
              {['1', '2', '3'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectArrow />
          </div>
        </Field>

        <Field id="children" label="Children" error={errors.children}>
          <div className="relative">
            <select
              id="children"
              name="children"
              required
              value={values.children}
              onChange={updateField('children')}
              aria-invalid={errors.children ? true : undefined}
              className={cn(
                controlClass,
                'appearance-none pr-8 [&>option]:text-neutral-900',
                childrenActive ? 'text-white' : 'text-smoke',
              )}
            >
              <option value="" hidden>
                Select Children
              </option>
              {['0', '1', '2'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectArrow />
          </div>
        </Field>
      </div>

      {/* .form-btn — the button sits in its own row below the selects. */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="h-[50px] w-full rounded-none border-none bg-brand font-normal tracking-[0.4px] hover:bg-primary-700"
      >
        Check availability
      </Button>

      {summary && (
        <p
          role="status"
          className="mt-4 border border-brand/40 bg-brand/10 px-4 py-3 text-sm font-bold text-brand"
        >
          {summary}
        </p>
      )}
    </form>
  )
}
