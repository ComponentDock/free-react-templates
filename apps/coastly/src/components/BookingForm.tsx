import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Field styling recreated from the source CSS (.form-control): #1a1e24
   background, white 18px weight-400 text, 100px height, SHARP 0-radius
   corners, no side borders, a 2px rgba(243,239,245,0.33) bottom border
   only, 25px top padding (clears the in-field label), dim placeholder. */
const fieldClass =
  'h-[100px] w-full border-b-2 border-separator bg-slab px-[25px] pt-[25px] text-[18px] font-normal ' +
  'text-white placeholder:text-dim focus:outline-none'

/* Label styling (.form-label): white, weight 400, capitalize (NOT
   uppercase), absolutely positioned at the field's top-left edge (left
   10px top 10px). The source uses non-semantic <span> labels — the
   recreation uses real <label htmlFor> elements (accessible). */
const labelClass =
  'absolute left-[10px] top-[10px] z-10 text-[14px] font-normal capitalize text-white'

const errorClass = 'absolute bottom-[2px] left-[25px] text-[11px] font-bold text-red-400'

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  children: ReactNode
}

/* Field wrapper: relative container holding the in-field top-left label,
   the control (passed as children — it carries id/value/onChange) and the
   validation message at the field's bottom edge. */
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="relative">
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
   Guests is NOT required — it defaults to its first option (1), matching
   the source. */
function SelectField({ id, label, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={update(id)}
          className={cn(fieldClass, 'appearance-none pr-[45px]')}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* .select-arrow — 24px-wide full-height strip at the field's right
            edge: rgba(243,239,245,0.33) background with a rotated ➜ glyph
            in #f3eff5; pointer-events none. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 flex h-[100px] w-6 items-center justify-center bg-separator text-[14px] text-glyph"
        >
          <span className="rotate-90">➜</span>
        </span>
      </div>
    </Field>
  )
}

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
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

  const destinationActive = values.destination !== ''
  const checkInActive = values.checkIn !== ''
  const checkOutActive = values.checkOut !== ''

  return (
    <form noValidate onSubmit={handleSubmit} className="bg-slab">
      {/* Your Destination — full-width text input. */}
      <Field id="destination" label="Your Destination" error={errors.destination}>
        <input
          id="destination"
          name="destination"
          type="text"
          value={values.destination}
          onChange={updateField('destination')}
          placeholder="Enter a destination or hotel name"
          aria-invalid={errors.destination ? true : undefined}
          className={cn(fieldClass, destinationActive ? 'text-white' : 'text-dim')}
        />
      </Field>

      {/* Row: Check In · ⇌ · Check out · Guests (source col-sm-4 × 3, flush
          0-gap fields; sibling columns get a 1px translucent left rule). */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Field id="checkIn" label="Check In" error={errors.checkIn}>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            value={values.checkIn}
            onChange={updateField('checkIn')}
            aria-invalid={errors.checkIn ? true : undefined}
            className={cn(fieldClass, checkInActive ? 'text-white' : 'text-dim')}
          />
        </Field>

        <div className="border-l border-separator">
          <Field id="checkOut" label="Check out" error={errors.checkOut}>
            {/* In-out swap glyph (.in-out): ⇌ U+21CC, #f3eff5, 28px, 40×40,
                absolutely between the date fields (right -20px of the Check
                out column), vertically centered; hidden below 768px
                (source .hidden-xs). */}
            <span
              aria-hidden="true"
              className="absolute -left-5 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center text-[28px] leading-10 text-glyph md:flex"
            >
              ⇌
            </span>
            <input
              id="checkOut"
              name="checkOut"
              type="date"
              required
              value={values.checkOut}
              onChange={updateField('checkOut')}
              aria-invalid={errors.checkOut ? true : undefined}
              className={cn(fieldClass, checkOutActive ? 'text-white' : 'text-dim')}
            />
          </Field>
        </div>

        <div className="border-l border-separator">
          <SelectField
            id="guests"
            label="Guests"
            options={['1', '2', '3']}
            values={values}
            update={updateField}
          />
        </div>
      </div>

      {/* .form-btn → .submit-btn — full-width LIME-GREEN #72b01d button,
          white weight-700 capitalize text, 100px, sharp corners; the
          source's only hover treatment is opacity 0.9. */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="h-[100px] w-full rounded-none bg-brand font-bold text-[18px] capitalize text-white hover:bg-brand hover:opacity-90 focus-visible:ring-brand/30"
      >
        Check availability
      </Button>

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
