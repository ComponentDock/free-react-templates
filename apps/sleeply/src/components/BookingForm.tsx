import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateReservation,
  type ReservationErrors,
  type ReservationField,
  type ReservationValues,
} from '../lib/reservation'

/* Solid light-gray control recreated from the source CSS (.form-control):
   background #f2f1f1, 65px height, 4px corner radius, NO border, NO
   box-shadow, near-black #090a0b 24px weight-300 text; placeholder (and
   empty native dates) render at #b1b6bd. */
const controlClass =
  'h-[65px] w-full rounded-[4px] border-none bg-field px-3 text-[24px] font-light text-ink ' +
  'placeholder:text-faded focus:outline-none focus:ring-2 focus:ring-brand/40'

/* Block label BELOW the field (.form-label): navy-blue #184c8f, uppercase,
   16px, weight 600, 25px line-height, 10px top margin — the control comes
   FIRST in the DOM and the label flows after it (never inside/above). */
const labelClass =
  'relative mt-[10px] block h-[25px] text-[16px] font-semibold uppercase leading-[25px] text-brand'

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

/* form-group wrapper (relative container, 30px bottom margin per the source
   `.form-group { margin-bottom: 30px }`): the control comes first, then the
   label BELOW it, then any error message. */
function Field({ id, label, error, span, children }: FieldProps) {
  return (
    <div className={cn('relative mb-[30px]', span)}>
      {children}
      <label htmlFor={id} className={labelClass}>
        {/* Connector triangle (.form-label:after): field-gray #f2f1f1, 10px
            border trick (10px 10px 0 10px), pointing DOWN (base against the
            field's bottom edge), absolute at left 10px / top -10px. */}
        <span
          aria-hidden="true"
          className="absolute left-[10px] top-[-10px] h-0 w-0 border-[10px] border-b-0 border-x-transparent border-t-field"
        />
        {label}
      </label>
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

/* Plain right-edge arrow zone (.select-arrow): 24px wide, spanning the
   field's full 65px height, at the field's right edge, pointer-events none,
   rotated ➜ (U+279C) glyph in #b1b6bd at 14px — NO background strip (unlike
   Restly's translucent bar). */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 flex h-[65px] w-6 items-center justify-center text-[14px] text-faded"
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

/* Select + plain arrow zone, kept in one helper so the two selects share the
   same option/arrow markup. Guests/Children are NOT required — they default
   to their first options (source fidelity). */
function SelectField({ id, label, error, span, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error} span={span}>
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
    </Field>
  )
}

export function BookingForm() {
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
    /* .booking-form: solid WHITE card (background #fff, padding 30px 15px 0,
       border-radius 4px, overflow auto — no border, no shadow). */
    <div className="overflow-auto rounded-[4px] bg-white px-[15px] pt-[30px]">
      <form noValidate onSubmit={handleSubmit}>
        {/* Row 1: Destination (col-md-8) + Guests (col-md-2) + Children
            (col-md-2). Vertical rhythm comes from the form-group 30px bottom
            margins; the 10px horizontal gap mirrors the source's tight
            column gutters. */}
        <div className="grid grid-cols-1 gap-x-[10px] md:grid-cols-12">
          <Field
            id="destination"
            label="Destination"
            error={errors.destination}
            span="md:col-span-8"
          >
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
            availability" button (col-md-4, .form-btn with its own 30px
            bottom margin). */}
        <div className="grid grid-cols-1 gap-x-[10px] md:grid-cols-12">
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
          {/* .form-btn slot: the submit button fills the 4/12 column and
              carries the source's 30px bottom margin. */}
          <div className="mb-[30px] md:col-span-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="h-[90px] w-full rounded-[4px] bg-brand text-[18px] font-semibold uppercase text-white hover:bg-brand"
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
    </div>
  )
}
