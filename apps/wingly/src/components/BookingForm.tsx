import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Pill control recreated from the source CSS (.form-control): white fill,
   height 50px, padding 0 25px, near-black #191a1e 16px weight-400 text, NO
   border, 40px PILL radius, box-shadow none; placeholder (and empty native
   dates) render at rgba(82, 82, 84, 0.4). A brand-red focus ring is added
   for keyboard visibility (repo a11y convention). */
const controlClass =
  'h-[50px] w-full rounded-[40px] border-none bg-white px-[25px] text-[16px] font-normal text-ink ' +
  'placeholder:text-faded focus:outline-none focus:ring-2 focus:ring-brand/60'

/* Static label ABOVE the field (.form-label): white, 12px, uppercase,
   weight 400, line-height/height 24px, margin-left 20px, margin-bottom 5px —
   it NEVER floats (the defining difference vs the Skyly flight card). */
const labelClass =
  'mb-[5px] ml-[20px] block h-[24px] text-[12px] font-normal uppercase leading-[24px] text-white'

const errorClass = 'mt-1 text-xs text-red-300'

const FLIGHT_TYPES = ['Roundtrip', 'One way', 'Multi-City'] as const

/* Floating arrow glyph (.select-arrow): 32×32, rgba(0,0,0,0.3), font-size
   14px, at right 10px bottom 6px, pointer-events none, rotated ➜ (U+279C). */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[6px] right-[10px] flex h-8 w-8 items-center justify-center text-[14px] text-arrow"
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  /* Tailwind column span on ≥768px, mirroring the source Bootstrap
     col-md-* widths (6/6 → 3/3/2/2 → 3/3). */
  span?: string
  children: ReactNode
}

/* form-group wrapper: relative container + STATIC label + error message;
   the control itself is passed as children (it carries id/value/onChange). */
function Field({ id, label, error, span, children }: FieldProps) {
  return (
    <div className={cn('relative mb-5', span)}>
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
  error?: string
  span?: string
  options: string[]
  values: BookingValues
  update: (field: BookingField) => (event: ChangeEvent<HTMLSelectElement>) => void
}

/* Select + floating arrow glyph, kept in one helper so the three selects
   share the same option/arrow markup. Adults/Children/Travel class are NOT
   required — they default to their first options (source fidelity). */
function SelectField({ id, label, error, span, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error} span={span}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={update(id)}
          className={cn(controlClass, 'appearance-none pr-10')}
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

interface FlightTypeRadiosProps {
  values: BookingValues
  update: (field: BookingField) => (event: ChangeEvent<HTMLInputElement>) => void
}

/* Custom circular flight-type radios (.form-checkbox): visually hidden
   native input + 20×20px white circle (NO border); the checked option shows
   a 10×10px #f23e3e red dot. Labels are white weight 400 with 30px left
   padding and 15px inter-label spacing. */
function FlightTypeRadios({ values, update }: FlightTypeRadiosProps) {
  return (
    <div className="mb-5 flex flex-wrap items-center">
      {FLIGHT_TYPES.map((type, index) => {
        const checked = values.flightType === type
        return (
          <label
            key={type}
            className={cn(
              'relative cursor-pointer pl-[30px] pt-[4px] text-[14px] font-normal text-white',
              index > 0 && 'ml-[15px]',
            )}
          >
            <input
              type="radio"
              name="flightType"
              value={type}
              checked={checked}
              onChange={update('flightType')}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className="absolute left-[2px] top-[4px] flex h-5 w-5 items-center justify-center rounded-full bg-white"
            >
              {checked && <span className="h-[10px] w-[10px] rounded-full bg-brand" />}
            </span>
            {type}
          </label>
        )
      })}
    </div>
  )
}

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    flightType: 'Roundtrip',
    from: '',
    to: '',
    departing: '',
    returning: '',
    adults: '1',
    children: '0',
    travelClass: 'Economy class',
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

  const departingActive = values.departing !== ''
  const returningActive = values.returning !== ''

  return (
    /* Dark translucent card (.booking-form): rgba(0,0,0,0.7), padding 40px,
       radius 6px, NO max-width (spans the container), NO shadow, NO border. */
    <div className="w-full rounded-[6px] bg-card p-10">
      <form noValidate onSubmit={handleSubmit}>
        {/* Flight-type radios (.form-checkbox). */}
        <FlightTypeRadios values={values} update={updateField} />

        {/* Row 1: Flying from · Flying to (source col-md-6 × 2; the source
            typo "Flyning to" is fixed). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
          <Field id="from" label="Flying from" error={errors.from}>
            <input
              id="from"
              name="from"
              type="text"
              placeholder="City or airport"
              value={values.from}
              onChange={updateField('from')}
              aria-invalid={errors.from ? true : undefined}
              className={controlClass}
            />
          </Field>
          <Field id="to" label="Flying to" error={errors.to}>
            <input
              id="to"
              name="to"
              type="text"
              placeholder="City or airport"
              value={values.to}
              onChange={updateField('to')}
              aria-invalid={errors.to ? true : undefined}
              className={controlClass}
            />
          </Field>
        </div>

        {/* Row 2: Departing · Returning · Adults · Children (source
            col-md-3 + col-md-3 + col-md-2 + col-md-2). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-12">
          <Field id="departing" label="Departing" error={errors.departing} span="md:col-span-3">
            <input
              id="departing"
              name="departing"
              type="date"
              required
              value={values.departing}
              onChange={updateField('departing')}
              aria-invalid={errors.departing ? true : undefined}
              className={cn(controlClass, departingActive ? 'text-ink' : 'text-faded')}
            />
          </Field>
          <Field id="returning" label="Returning" error={errors.returning} span="md:col-span-3">
            <input
              id="returning"
              name="returning"
              type="date"
              required
              value={values.returning}
              onChange={updateField('returning')}
              aria-invalid={errors.returning ? true : undefined}
              className={cn(controlClass, returningActive ? 'text-ink' : 'text-faded')}
            />
          </Field>
          <SelectField
            id="adults"
            label="Adults (18+)"
            error={errors.adults}
            span="md:col-span-2"
            options={['1', '2', '3']}
            values={values}
            update={updateField}
          />
          <SelectField
            id="children"
            label="Children (0-17)"
            error={errors.children}
            span="md:col-span-2"
            options={['0', '1', '2']}
            values={values}
            update={updateField}
          />
        </div>

        {/* Row 3: Travel class · Show flights (source col-md-3 × 2; the
            .form-btn margin-top 27px aligns the button with the select). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-12">
          <SelectField
            id="travelClass"
            label="Travel class"
            error={errors.travelClass}
            span="md:col-span-3"
            options={['Economy class', 'Business class', 'First class']}
            values={values}
            update={updateField}
          />
          <div className="mt-[27px] md:col-span-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="h-[50px] w-full rounded-[40px] bg-brand text-[14px] font-normal uppercase text-white hover:opacity-90 focus-visible:ring-brand/40"
            >
              Show flights
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
