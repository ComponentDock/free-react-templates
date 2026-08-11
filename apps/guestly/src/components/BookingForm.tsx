import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Boxed control recreated from the source CSS (.form-control): transparent
   fill, height 45px, padding 0 20px, white bold 16px text, 2px
   rgba(255,255,255,0.15) border, PILL radius 40px; on focus the control
   flips to a white fill with near-black #222 text. */
const controlClass =
  'h-[45px] w-full rounded-[40px] border-2 border-dim bg-transparent px-5 text-[16px] font-bold ' +
  'focus:bg-white focus:text-ink focus:outline-none'

/* Static uppercase orange label ABOVE the input (source .form-label): 14px
   weight-400 #ff9000, line-height 24px, indented 20px to align with the
   pill inputs' padding — NOT floating, NOT bottom tab bars. */
const labelClass = 'ml-[20px] inline-block text-[14px] uppercase leading-[24px] text-brand'

const errorClass = 'mt-1 text-xs font-bold text-red-600'

/* Floating dim-white arrow glyph (.select-arrow): 32×32,
   rgba(255,255,255,0.15) (matching the placeholder/border color, NOT white,
   NOT orange), at right 10px bottom 7px, pointer-events none, NO tab
   background; dims to rgba(0,0,0,0.3) when the select is focused (the
   white-fill state). */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[7px] right-[10px] flex h-8 w-8 items-center justify-center text-dim group-focus-within:text-[rgba(0,0,0,0.3)]"
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

/* form-group wrapper: relative container (group enables the arrow's
   focus-within state) + static orange label + error message; the control
   itself is passed as children (it carries id/value/onChange). */
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="group relative mb-5">
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
   share the same option/arrow markup. Rooms/Adults/Kids are NOT required —
   they default to their first options (1, 1 and 0), matching the source. */
function SelectField({ id, label, error, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={update(id)}
          className={cn(controlClass, 'appearance-none pr-10', 'text-white')}
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

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    arrival: '',
    departure: '',
    rooms: '1',
    adults: '1',
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

  const arrivalActive = values.arrival !== ''
  const departureActive = values.departure !== ''

  return (
    <div className="relative mx-auto w-full max-w-[642px] bg-panel">
      {/* Full-width photo header panel (.form-header): the card's top half —
          cover/center photo dimmed by the heavy dark-grey scrim, padding
          85px 25px 25px; seeded picsum interior placeholder (the source
          background.jpg must not be copied). */}
      <div
        className="relative bg-cover bg-center px-[25px] pb-[25px] pt-[85px]"
        style={{ backgroundImage: "url('https://picsum.photos/seed/guestly-1/1280/600')" }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-scrim" />
        <div className="relative z-20">
          <h2 className="m-0 mb-[15px] font-display text-[58px] capitalize text-white">
            Reserve your Room
          </h2>
          <p className="text-[18px] leading-relaxed text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam
            at consequatur quisquam suscipit.
          </p>
        </div>
      </div>

      <form noValidate onSubmit={handleSubmit} className="p-[30px]">
        {/* Row 1: Arrival date · Departure date (source col-md-6 × 2, NO ⇔
            divider). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
          <Field id="arrival" label="Arrival date" error={errors.arrival}>
            <input
              id="arrival"
              name="arrival"
              type="date"
              required
              value={values.arrival}
              onChange={updateField('arrival')}
              aria-invalid={errors.arrival ? true : undefined}
              className={cn(controlClass, arrivalActive ? 'text-white' : 'text-dim')}
            />
          </Field>
          <Field id="departure" label="Departure date" error={errors.departure}>
            <input
              id="departure"
              name="departure"
              type="date"
              required
              value={values.departure}
              onChange={updateField('departure')}
              aria-invalid={errors.departure ? true : undefined}
              className={cn(controlClass, departureActive ? 'text-white' : 'text-dim')}
            />
          </Field>
        </div>

        {/* Row 2: Rooms · Adults · Kids (source col-md-4 × 3). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-3">
          <SelectField
            id="rooms"
            label="Rooms"
            error={errors.rooms}
            options={['1', '2', '3']}
            values={values}
            update={updateField}
          />
          <SelectField
            id="adults"
            label="Adults"
            error={errors.adults}
            options={['1', '2', '3']}
            values={values}
            update={updateField}
          />
          <SelectField
            id="kids"
            label="Kids"
            error={errors.kids}
            options={['0', '1', '2']}
            values={values}
            update={updateField}
          />
        </div>

        {/* .form-btn wrapper: margin-top 10px. */}
        <div className="mt-[10px]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-[55px] w-full rounded-[40px] bg-brand text-[18px] font-bold uppercase text-white hover:bg-brand-dark focus-visible:ring-brand/40"
          >
            Check availability
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
