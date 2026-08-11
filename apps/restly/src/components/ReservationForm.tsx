import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateReservation,
  type ReservationErrors,
  type ReservationField,
  type ReservationValues,
} from '../lib/reservation'

/* Sharp translucent-white control recreated from the source CSS
   (.form-control): background rgba(255,255,255,0.85) (transitioning to solid
   white on focus), 80px height, 0px (SHARP) corner radius, NO border, NO
   box-shadow, dark #333 28px Cantata One weight-600 text with 30px top
   padding so the value sits below the inset label; placeholder (and empty
   native dates) render at rgba(51,51,51,0.3). */
const controlClass =
  'h-20 w-full rounded-none border-none bg-field px-3 pt-[30px] font-serif text-[28px] font-semibold text-ink ' +
  'placeholder:text-faded transition-colors duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/40'

/* Inset label (.form-label): copper-brown #8c5d28, 14px, weight 700,
   letter-spacing 0.6px, 30px line-height, FIXED at the field's top-left edge
   (top-0 left-[10px]) — it never floats, shrinks or moves on focus or when
   the field has a value. */
const labelClass =
  'absolute left-[10px] top-0 h-[30px] text-[14px] font-bold leading-[30px] tracking-[0.6px] text-brand'

const errorClass = 'mt-1 text-xs text-red-700'

interface FieldProps {
  id: ReservationField
  label: string
  error?: string
  /* Tailwind column span on ≥768px, mirroring the source Bootstrap
     col-md-* widths (8/2/2 in row 1, 4/4/4 in row 2). */
  span?: string
  children: ReactNode
}

/* form-group wrapper: relative container with the INSET label + control +
   error message; the control itself is passed as children (it carries
   id/value/onChange). */
function Field({ id, label, error, span, children }: FieldProps) {
  return (
    <div className={cn('relative', span)}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

/* Full-height arrow strip (.select-arrow): 24px wide, spanning the field's
   full 80px height, rgba(255,255,255,0.3) background, at the field's right
   edge, pointer-events none, rotated ➜ (U+279C) glyph in #333 at 14px. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 flex h-20 w-6 items-center justify-center bg-arrowbg text-[14px] text-ink"
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

interface SelectFieldProps {
  id: ReservationField
  label: string
  error?: string
  span?: string
  options: string[]
  values: ReservationValues
  update: (field: ReservationField) => (event: ChangeEvent<HTMLSelectElement>) => void
}

/* Select + full-height arrow strip, kept in one helper so the two selects
   share the same option/arrow markup. Guests/Children are NOT required —
   they default to their first options (source fidelity). */
function SelectField({ id, label, error, span, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error} span={span}>
      <div className="relative h-20">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={update(id)}
          className={cn(controlClass, 'appearance-none pr-8')}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <SelectArrow />
      </div>
    </Field>
  )
}

export function ReservationForm() {
  const [values, setValues] = useState<ReservationValues>({
    destination: '',
    guests: '1',
    children: '0',
    checkIn: '',
    checkOut: '',
  })
  const [errors, setErrors] = useState<ReservationErrors>({})
  const [summary, setSummary] = useState<string | null>(null)

  function updateField(field: ReservationField) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = event.target.value
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateReservation(values)
    setErrors(nextErrors)
    setSummary(Object.keys(nextErrors).length === 0 ? formatSummary(values) : null)
  }

  const checkInActive = values.checkIn !== ''
  const checkOutActive = values.checkOut !== ''

  return (
    /* Transparent wrapper — NO card, NO background, NO padding: the fields
       themselves are the card (source .booking-form has no styles). */
    <form noValidate onSubmit={handleSubmit}>
      {/* Row 1: Destination (col-md-8) + Guests (col-md-2) + Children
          (col-md-2). */}
      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-12">
        <Field id="destination" label="Destination" error={errors.destination} span="md:col-span-8">
          <input
            id="destination"
            name="destination"
            type="text"
            placeholder="Enter Address, zip, city or airport"
            value={values.destination}
            onChange={updateField('destination')}
            aria-invalid={errors.destination ? true : undefined}
            className={controlClass}
          />
        </Field>
        <SelectField
          id="guests"
          label="Guests"
          error={errors.guests}
          span="md:col-span-2"
          options={['1', '2', '3']}
          values={values}
          update={updateField}
        />
        <SelectField
          id="children"
          label="Children"
          error={errors.children}
          span="md:col-span-2"
          options={['0', '1', '2']}
          values={values}
          update={updateField}
        />
      </div>

      {/* Row 2: Check In (col-md-4) + Check out (col-md-4) + "Check
          availability" button (col-md-4). */}
      <div className="mt-[10px] grid grid-cols-1 gap-[10px] md:grid-cols-12">
        <Field id="checkIn" label="Check In" error={errors.checkIn} span="md:col-span-4">
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            value={values.checkIn}
            onChange={updateField('checkIn')}
            aria-invalid={errors.checkIn ? true : undefined}
            className={cn(controlClass, checkInActive ? 'text-ink' : 'text-faded')}
          />
        </Field>
        <Field id="checkOut" label="Check out" error={errors.checkOut} span="md:col-span-4">
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            value={values.checkOut}
            onChange={updateField('checkOut')}
            aria-invalid={errors.checkOut ? true : undefined}
            className={cn(controlClass, checkOutActive ? 'text-ink' : 'text-faded')}
          />
        </Field>
        {/* .form-btn slot: the submit button fills the 4/12 column. */}
        <div className="md:col-span-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-20 w-full rounded-none bg-brand text-[18px] font-bold uppercase tracking-[0.6px] text-white hover:bg-brand focus-visible:ring-brand/40"
          >
            Check availability
          </Button>
        </div>
      </div>

      {summary && (
        <p
          role="status"
          className="mt-4 border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand"
        >
          {summary}
        </p>
      )}
    </form>
  )
}
