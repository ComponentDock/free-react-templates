import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type FlightErrors,
  type FlightField,
  type FlightValues,
} from '../lib/booking'

/* .form-control recreated from the source CSS: background #1c2126 (ink),
   height 50px, padding 7px 20px 0, NO border, border-radius 0 (SHARP), white
   value text. The value color is overridden per-field: empty + unfocused →
   transparent (only the floating label shows, like the source rule
   `.form-group:not(.input-not-empty) .form-control:not(:focus)`). */
const controlClass = 'h-[50px] w-full border-none bg-ink px-5 pb-0 pt-[7px] focus:outline-none'

/* Floating label (.form-label): at rest — INSIDE the field (top 15px, left
   20px), uppercase, #2d343b (card), 700, 16px, 24px line-height, acting as
   the placeholder; when the control has a value or is focused it floats
   ABOVE the field's top edge (top -10px), white, 14px. Same rule for ALL
   fields including dates (source has no special date rule). */
const labelClass =
  'pointer-events-none absolute left-5 text-[16px] font-bold uppercase leading-6 transition-all duration-200'

const labelRestClass = 'top-[15px] text-card'
const labelFloatedClass = '-top-[10px] text-[14px] text-white'

const errorClass = 'mt-1 pl-5 text-xs text-red-300'

interface FieldProps {
  id: FlightField
  label: string
  error?: string
  /* Whether the label floats ABOVE the field (control has a value; selects
     always do). */
  floated: boolean
  /* Whether the control currently has focus (also floats the label and
     makes an empty control's text visible). */
  focused: boolean
  /* Tailwind column span on ≥768px, mirroring the source Bootstrap col-md-*
     widths (12, 6/6, 4/4/4). */
  span?: string
  children: ReactNode
}

/* form-group wrapper: relative container with the FLOATING label + control +
   error message; the control itself is passed as children (it carries
   id/value/onChange/onFocus/onBlur). */
function Field({ id, label, error, floated, focused, span, children }: FieldProps) {
  return (
    <div className={cn('relative', span)}>
      <label
        htmlFor={id}
        className={cn(labelClass, floated || focused ? labelFloatedClass : labelRestClass)}
      >
        {label}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

/* Full-height right-edge arrow strip (.select-arrow): 24px wide, full 50px
   height at the select's right edge, pointer-events none, #2d343b (card),
   14px, rotated ➜ (U+279C) glyph — NOT Dozely's floating 32×32 glyph. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 flex h-[50px] w-6 items-center justify-center text-[14px] text-card"
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

interface SelectFieldProps {
  id: FlightField
  label: string
  error?: string
  span?: string
  options: string[]
  values: FlightValues
  update: (field: FlightField) => (event: ChangeEvent<HTMLSelectElement>) => void
}

/* Select + arrow strip helper. The source selects have REAL first options
   (no hidden placeholder): "Economy class" / "1" / "0" are selected by
   default, so the label is always floated (the source JS adds
   .input-not-empty to every control that has a value on load). */
function SelectField({ id, label, error, span, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error} floated focused={false} span={span}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={update(id)}
          className={cn(controlClass, 'appearance-none text-white')}
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

interface RadioOptionProps {
  id: string
  label: string
  checked: boolean
  onSelect: () => void
}

/* Custom circular radio (.form-checkbox): the native input is visually
   hidden (sr-only, still focusable for a11y) and a styled 20×20px circle
   (`#1c2126` fill + 2px `#1c2126` border) sits before the uppercase white
   700 label; checked → `#f7c411` border + 10×10px `#f7c411` dot. */
function RadioOption({ id, label, checked, onSelect }: RadioOptionProps) {
  return (
    <label
      htmlFor={id}
      className="relative cursor-pointer pt-1 pl-[30px] font-bold uppercase text-white"
    >
      <input
        id={id}
        name="flight-type"
        type="radio"
        value={label}
        checked={checked}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-[2px] top-1 h-5 w-5 rounded-full border-2 bg-ink transition-all duration-200',
          checked ? 'border-brand' : 'border-ink',
        )}
      >
        <span
          className={cn(
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand transition-all duration-200',
            checked ? 'h-2.5 w-2.5 opacity-100' : 'h-0 w-0 opacity-0',
          )}
        />
      </span>
      {label}
    </label>
  )
}

const FLIGHT_TYPES = ['Roundtrip', 'One way', 'Multi-City']

export function BookingForm() {
  const [values, setValues] = useState<FlightValues>({
    flightType: '',
    flyingFrom: '',
    flyingTo: '',
    checkIn: '',
    checkOut: '',
    travelClass: 'Economy class',
    adults: '1',
    children: '0',
  })
  const [errors, setErrors] = useState<FlightErrors>({})
  const [summary, setSummary] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<FlightField | null>(null)

  function updateField(field: FlightField) {
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
    /* .booking-form — the SOLID-CHARCOAL card: max-width 642px, padding
       0 40px 40px, background #2d343b (card), NO border-radius, NO
       box-shadow (flat rectangle), NO photo. */
    <div className="mx-auto w-full max-w-[642px] bg-card px-10 pb-10">
      {/* .form-header — full-bleed darker band (negative side margins span
          the card's 40px padding): background #1a1f24 (band), padding 40px,
          margin 0 -40px 30px; LEFT-aligned h1 "Book Your Flight" — white,
          Montserrat 700, 38px, capitalize. */}
      <div className="-mx-10 mb-[30px] bg-band p-10">
        <h1 className="m-0 text-[38px] font-bold capitalize text-white">Book Your Flight</h1>
      </div>

      {/* Bootstrap-era grid re-implemented with Tailwind: rows 12 → 6/6 →
          4/4/4 → button, all stacking full width below 768px. gap-y matches
          the source's 30px .form-group margin-bottom; gap-x matches
          Bootstrap 3's 30px column gutter. */}
      <form
        noValidate
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-12"
      >
        {/* Flight-type radio group (first .form-group). */}
        <div className="flex flex-wrap gap-x-[15px] gap-y-2 md:col-span-12">
          {FLIGHT_TYPES.map((type) => (
            <RadioOption
              key={type}
              id={type.toLowerCase().replace(' ', '-')}
              label={type}
              checked={values.flightType === type}
              onSelect={() => setValues((current) => ({ ...current, flightType: type }))}
            />
          ))}
        </div>

        <Field
          id="flyingFrom"
          label="Flying from"
          error={errors.flyingFrom}
          floated={values.flyingFrom !== ''}
          focused={focusedField === 'flyingFrom'}
          span="md:col-span-12"
        >
          <input
            id="flyingFrom"
            name="flyingFrom"
            type="text"
            value={values.flyingFrom}
            onChange={updateField('flyingFrom')}
            onFocus={() => setFocusedField('flyingFrom')}
            onBlur={() => setFocusedField(null)}
            aria-invalid={errors.flyingFrom ? true : undefined}
            className={cn(
              controlClass,
              values.flyingFrom !== '' || focusedField === 'flyingFrom'
                ? 'text-white'
                : 'text-transparent',
            )}
          />
        </Field>

        <Field
          id="flyingTo"
          label="Flying to"
          error={errors.flyingTo}
          floated={values.flyingTo !== ''}
          focused={focusedField === 'flyingTo'}
          span="md:col-span-12"
        >
          <input
            id="flyingTo"
            name="flyingTo"
            type="text"
            value={values.flyingTo}
            onChange={updateField('flyingTo')}
            onFocus={() => setFocusedField('flyingTo')}
            onBlur={() => setFocusedField(null)}
            aria-invalid={errors.flyingTo ? true : undefined}
            className={cn(
              controlClass,
              values.flyingTo !== '' || focusedField === 'flyingTo'
                ? 'text-white'
                : 'text-transparent',
            )}
          />
        </Field>

        <Field
          id="checkIn"
          label="Check In"
          error={errors.checkIn}
          floated={values.checkIn !== ''}
          focused={focusedField === 'checkIn'}
          span="md:col-span-6"
        >
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            value={values.checkIn}
            onChange={updateField('checkIn')}
            onFocus={() => setFocusedField('checkIn')}
            onBlur={() => setFocusedField(null)}
            aria-invalid={errors.checkIn ? true : undefined}
            className={cn(
              controlClass,
              values.checkIn !== '' || focusedField === 'checkIn'
                ? 'text-white'
                : 'text-transparent',
            )}
          />
        </Field>

        <Field
          id="checkOut"
          label="Check Out"
          error={errors.checkOut}
          floated={values.checkOut !== ''}
          focused={focusedField === 'checkOut'}
          span="md:col-span-6"
        >
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            value={values.checkOut}
            onChange={updateField('checkOut')}
            onFocus={() => setFocusedField('checkOut')}
            onBlur={() => setFocusedField(null)}
            aria-invalid={errors.checkOut ? true : undefined}
            className={cn(
              controlClass,
              values.checkOut !== '' || focusedField === 'checkOut'
                ? 'text-white'
                : 'text-transparent',
            )}
          />
        </Field>

        <SelectField
          id="travelClass"
          label="Travel class"
          error={errors.travelClass}
          span="md:col-span-4"
          options={['Economy class', 'Business class', 'First class']}
          values={values}
          update={updateField}
        />
        <SelectField
          id="adults"
          label="Adults"
          error={errors.adults}
          span="md:col-span-4"
          options={['1', '2', '3']}
          values={values}
          update={updateField}
        />
        <SelectField
          id="children"
          label="Children"
          error={errors.children}
          span="md:col-span-4"
          options={['0', '1', '2']}
          values={values}
          update={updateField}
        />

        {/* .form-btn slot: the "Check availability" button — LEFT-aligned,
            NOT full width: #f7c411 bg, #1c2126 text, 700, height 50px,
            padding 0 50px, no hover rule (source CSS declares none). */}
        <div className="md:col-span-12">
          <Button
            type="submit"
            variant="primary"
            className="h-[50px] rounded-none bg-brand px-[50px] font-bold text-ink hover:bg-brand focus-visible:ring-brand/40"
          >
            Check availability
          </Button>
        </div>
      </form>

      {summary && (
        <p
          role="status"
          className="mt-4 border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand"
        >
          {summary}
        </p>
      )}
    </div>
  )
}
