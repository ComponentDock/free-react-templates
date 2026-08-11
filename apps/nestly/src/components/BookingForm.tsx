import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Field styling recreated from the source CSS (.form-control): transparent
   background, SHARP 0-radius corners, NO borders at all, 50px height,
   Alegreya weight-700 28px values in dark slate #3c404a. */
const fieldClass =
  'h-[50px] w-full bg-transparent p-0 font-display text-[28px] font-bold text-ink focus:outline-none'

/* Static label (.form-label): grey #818390, weight 400, 14px, 30px line,
   display block ABOVE the field — the defining difference vs Bookly's
   floating labels: these NEVER float on focus or value. Real <label
   htmlFor> elements (accessible). */
const labelClass = 'block h-[30px] text-[14px] font-normal leading-[30px] text-label'

/* Field group (.form-group): relative, 110px tall, 15px 10px padding. */
const groupClass = 'relative h-[110px] px-[10px] py-[15px]'

const errorClass = 'text-[11px] font-bold text-red-500'

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  children: ReactNode
}

/* Field wrapper: 110px group holding the STATIC top label, the control
   (passed as children — it carries id/value/onChange) and the validation
   message below it. */
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className={groupClass}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

interface SelectFieldProps {
  id: BookingField
  label: string
  options: string[]
  values: BookingValues
  update: (field: BookingField) => (event: ChangeEvent<HTMLSelectElement>) => void
}

/* Select + arrow strip, kept in one helper so the markup stays in sync.
   Guests and Kids are NOT required — they default to their first options
   (1 and 0), matching the source. */
function SelectField({ id, label, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={update(id)}
          className={cn(fieldClass, 'appearance-none pr-[32px]')}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* .select-arrow — 32×32 grey ➜ (U+279C) rotated 90°, absolutely
            positioned at the group's right edge, 20px from the bottom;
            pointer-events none. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[20px] right-0 flex h-8 w-8 items-center justify-center text-[12px] text-label"
        >
          <span className="rotate-90">➜</span>
        </span>
      </div>
    </Field>
  )
}

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    checkIn: '',
    checkOut: '',
    guests: '1',
    kids: '0',
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

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-bar bg-white shadow-[0_2px_5px_-2px_rgba(0,0,0,0.3)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* col-md-3 .form-header — "Book Now" in Alegreya 52px taupe,
            vertically centered in the 110px header. */}
        <div className="lg:col-span-3">
          <div className="flex h-[110px] items-center justify-center px-[10px] py-[15px] text-center">
            <h2 className="font-display text-[52px] leading-none text-brand">Book Now</h2>
          </div>
        </div>

        {/* col-md-7 — inner row: Check In 4 + Check out 4 + Guests 2 +
            Kids 2 (source col-md-4 / col-md-4 / col-md-2 / col-md-2). */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <Field id="checkIn" label="Check In" error={errors.checkIn}>
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                required
                value={values.checkIn}
                onChange={updateField('checkIn')}
                aria-invalid={errors.checkIn ? true : undefined}
                className={fieldClass}
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
                className={fieldClass}
              />
            </Field>

            <SelectField
              id="guests"
              label="Guests"
              options={['1', '2', '3']}
              values={values}
              update={updateField}
            />

            <SelectField
              id="kids"
              label="Kids"
              options={['0', '1', '2']}
              values={values}
              update={updateField}
            />
          </div>
        </div>

        {/* col-md-2 .form-btn — tall solid taupe #9a8067 uppercase button
            (height 80px, full column width; the source's only hover
            treatment is opacity 0.9). */}
        <div className="lg:col-span-2">
          <div className="h-[110px] px-[10px] py-[15px]">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="h-[80px] w-full rounded-none bg-brand text-[14px] font-normal uppercase text-white hover:bg-brand hover:opacity-90 focus-visible:ring-brand/30"
            >
              Check availability
            </Button>
          </div>
        </div>
      </div>

      {summary && (
        <p
          role="status"
          className="border border-brand/40 bg-brand/10 px-4 py-3 text-sm font-bold text-brand"
        >
          {summary}
        </p>
      )}
    </form>
  )
}
