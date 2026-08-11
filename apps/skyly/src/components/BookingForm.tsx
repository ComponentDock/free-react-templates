import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Boxed control recreated from the source CSS (.form-control): white fill,
   height 65px, padding 0 15px + 24px top (room for the floating label),
   near-black #191a1e bold 16px text, 2px #dfe5e9 border, SHARP 4px radius;
   focus → very light grey #f9fafb. */
const controlClass =
  'h-[65px] w-full rounded-[4px] border-2 border-mist bg-white px-[15px] pt-[24px] text-[16px] font-bold text-ink ' +
  'placeholder:text-mist focus:bg-soft focus:outline-none'

/* Floating label INSIDE the input's top edge (source .form-label): absolute
   top 6px left 20px, 12px, uppercase, weight 700, light-blue #98c9ee,
   line-height 24px — the input's padding-top 24px keeps the typed value
   below it. */
const labelClass =
  'absolute left-[20px] top-[6px] z-10 text-[12px] font-bold uppercase leading-[24px] text-label'

const errorClass = 'mt-1 text-xs font-bold text-red-600'

const FLIGHT_TYPES = ['Roundtrip', 'One way', 'Multi-City'] as const

/* Floating light-grey arrow glyph (.select-arrow): 32×32, #dfe5e9 (matching
   the border/placeholder color), at right 6px bottom 6px, pointer-events
   none, NO tab background. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[6px] right-[6px] flex h-8 w-8 items-center justify-center text-mist"
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

/* form-group wrapper: relative container + floating label + error message;
   the control itself is passed as children (it carries id/value/onChange). */
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="relative mb-5">
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
  options: string[]
  values: BookingValues
  update: (field: BookingField) => (event: ChangeEvent<HTMLSelectElement>) => void
}

/* Select + floating arrow glyph, kept in one helper so the three selects
   share the same option/arrow markup. Adults/Children/Travel class are NOT
   required — they default to their first options (source fidelity). */
function SelectField({ id, label, error, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error}>
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
   native input + 20×20px circle with a 2px #dfe5e9 border; the selected
   option shows a 10×10px #4fa3e3 dot. Labels are weight 700 #191a1e with
   30px left padding and 15px inter-label spacing. */
function FlightTypeRadios({ values, update }: FlightTypeRadiosProps) {
  return (
    <div className="mb-5 flex flex-wrap items-center">
      {FLIGHT_TYPES.map((type, index) => {
        const checked = values.flightType === type
        return (
          <label
            key={type}
            className={cn(
              'relative cursor-pointer pl-[30px] pt-[4px] text-[14px] font-bold text-ink',
              index > 0 && 'ml-[15px]',
            )}
          >
            <input
              type="radio"
              name="flightType"
              value={type}
              checked={checked}
              onChange={update('flightType')}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="absolute left-0 top-[4px] h-5 w-5 rounded-full border-2 border-mist bg-white"
            />
            {checked && (
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand"
              />
            )}
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
    <div className="mx-auto w-full max-w-[642px] rounded-[4px] bg-white px-[25px] pb-[25px] pt-[45px] shadow-[0_0_10px_-5px_rgba(0,0,0,0.4)]">
      <form noValidate onSubmit={handleSubmit}>
        {/* Flight-type radio pills (.form-checkbox). */}
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
              className={controlClass}
            />
          </Field>
        </div>

        {/* Row 2: Departing · Returning (source col-md-6 × 2, NO ⇔ divider). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
          <Field id="departing" label="Departing" error={errors.departing}>
            <input
              id="departing"
              name="departing"
              type="date"
              required
              value={values.departing}
              onChange={updateField('departing')}
              aria-invalid={errors.departing ? true : undefined}
              className={cn(controlClass, departingActive ? 'text-ink' : 'text-mist')}
            />
          </Field>
          <Field id="returning" label="Returning" error={errors.returning}>
            <input
              id="returning"
              name="returning"
              type="date"
              required
              value={values.returning}
              onChange={updateField('returning')}
              aria-invalid={errors.returning ? true : undefined}
              className={cn(controlClass, returningActive ? 'text-ink' : 'text-mist')}
            />
          </Field>
        </div>

        {/* Row 3: Adults · Children · Travel class (source col-md-4 × 3). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-3">
          <SelectField
            id="adults"
            label="Adults (18+)"
            error={errors.adults}
            options={['1', '2', '3']}
            values={values}
            update={updateField}
          />
          <SelectField
            id="children"
            label="Children (0-17)"
            error={errors.children}
            options={['0', '1', '2']}
            values={values}
            update={updateField}
          />
          <SelectField
            id="travelClass"
            label="Travel class"
            error={errors.travelClass}
            options={['Economy class', 'Business class', 'First class']}
            values={values}
            update={updateField}
          />
        </div>

        {/* .form-btn wrapper. */}
        <div className="mt-[10px]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-[65px] w-full rounded-[4px] bg-brand font-normal text-[18px] uppercase text-white hover:bg-brand-dark focus-visible:ring-brand/40"
          >
            Show flights
          </Button>
        </div>

        {summary && (
          <p
            role="status"
            className="mt-4 border border-brand/40 bg-brand/10 px-4 py-3 text-sm font-bold text-brand"
          >
            {summary}
          </p>
        )}
      </form>
    </div>
  )
}
