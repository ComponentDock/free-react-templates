import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateReservation,
  type ReservationErrors,
  type ReservationField,
  type ReservationValues,
} from '../lib/reservation'

/* Seeded picsum placeholder for the source resort-dusk photograph (the
   original background.jpg must not be copied). The prep spec pinned seed
   dozely-1 (900×675) for the card background. */
const CARD_IMAGE = 'https://picsum.photos/seed/dozely-1/900/675'

/* Translucent-white pill control recreated from the source CSS
   (.form-control): background rgba(255,255,255,0.2), 60px height, 40px
   (PILL) corner radius, NO border, white text, placeholder at
   rgba(255,255,255,0.5), 2px #ff8846 focus ring via box-shadow. */
const controlClass =
  'h-[60px] w-full rounded-[40px] border-none bg-fill px-[25px] text-white ' +
  'placeholder:text-faded transition-[box-shadow] duration-200 focus:outline-none focus:ring-2 focus:ring-brand'

/* Floating label (.form-label): #ff8846, 11px, weight 700, uppercase,
   1.3px letter-spacing, 15px line-height. Hidden state: opacity 0, top -10px
   (above the field's top edge); filled state: opacity 1, top 10px (inside
   the field's top-left). Date labels are ALWAYS visible (dates are always
   "filled" by the control). */
const labelClass =
  'absolute left-[25px] h-[15px] text-[11px] font-bold uppercase leading-[15px] tracking-[1.3px] text-brand transition-all duration-200'

const errorClass = 'mt-1 pl-[25px] text-xs text-red-300'

interface FieldProps {
  id: ReservationField
  label: string
  error?: string
  /* Whether the floating label is visible (control has a value; dates are
     always visible). */
  labelVisible: boolean
  /* Tailwind column span on ≥768px, mirroring the source Bootstrap col-md-*
     widths (12, 6/6, 4/4/4, 6/6). */
  span?: string
  children: ReactNode
}

/* form-group wrapper: relative container with the FLOATING label + control +
   error message; the control itself is passed as children (it carries
   id/value/onChange). */
function Field({ id, label, error, labelVisible, span, children }: FieldProps) {
  return (
    <div className={cn('relative', span)}>
      <label
        htmlFor={id}
        className={cn(labelClass, labelVisible ? 'top-2.5 opacity-100' : '-top-[10px] opacity-0')}
      >
        {label}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

/* Floating arrow glyph (.select-arrow): 32×32 zone at the right edge
   (right 15px, vertically centered), pointer-events none, rotated ➜
   (U+279C) glyph in rgba(255,255,255,0.5) at 14px — NOT Restly's
   full-height strip, NOT Wingly's bar. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-[15px] top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-[14px] text-faded"
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
  placeholder: string
  options: string[]
  values: ReservationValues
  update: (field: ReservationField) => (event: ChangeEvent<HTMLSelectElement>) => void
}

/* Select + floating arrow glyph, kept in one helper so the three selects
   share the same placeholder-option/arrow markup. Rooms/Adults/Children
   start on their hidden placeholder option (source fidelity) and are NOT
   required — the summary defaults them to 1/1/0. */
function SelectField({
  id,
  label,
  error,
  span,
  placeholder,
  options,
  values,
  update,
}: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error} labelVisible={values[id] !== ''} span={span}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={update(id)}
          className={cn(controlClass, 'appearance-none', values[id] !== '' && 'pt-4')}
        >
          <option value="" hidden>
            {placeholder}
          </option>
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
    checkIn: '',
    checkOut: '',
    rooms: '',
    adults: '',
    children: '',
    email: '',
    phone: '',
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

  return (
    /* .booking-form — the DARK PHOTO CARD: max-width 642px, 40px padding,
       5px radius, overflow hidden, cover/center resort photo background
       dimmed by the rgba(0,0,0,0.7) overlay. */
    <div
      className="relative mx-auto w-full max-w-[642px] overflow-hidden rounded-[5px] p-10"
      style={{
        backgroundImage: `url('${CARD_IMAGE}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/70" />
      <div className="relative">
        {/* .form-header — the headline lives INSIDE the card, above the
            form: Raleway 700, white, 42px, capitalize, centered. */}
        <div className="mb-[30px] text-center">
          <h1 className="text-[42px] font-bold capitalize text-white">Make your reservation</h1>
        </div>

        {/* Bootstrap-era grid re-implemented with Tailwind: rows 12 → 6/6 →
            4/4/4 → 6/6 → button, all stacking full width below 768px.
            gap-y matches the source's 30px .form-group margin-bottom;
            gap-x matches Bootstrap 3's 30px column gutter. */}
        <form
          noValidate
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-12"
        >
          <Field
            id="destination"
            label="Destination"
            error={errors.destination}
            labelVisible={values.destination !== ''}
            span="md:col-span-12"
          >
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="Country, ZIP, city..."
              value={values.destination}
              onChange={updateField('destination')}
              aria-invalid={errors.destination ? true : undefined}
              className={cn(controlClass, values.destination !== '' && 'pt-4')}
            />
          </Field>

          <Field
            id="checkIn"
            label="Check In"
            error={errors.checkIn}
            labelVisible
            span="md:col-span-6"
          >
            <input
              id="checkIn"
              name="checkIn"
              type="date"
              required
              value={values.checkIn}
              onChange={updateField('checkIn')}
              aria-invalid={errors.checkIn ? true : undefined}
              className={cn(controlClass, 'pt-4')}
            />
          </Field>

          <Field
            id="checkOut"
            label="Check out"
            error={errors.checkOut}
            labelVisible
            span="md:col-span-6"
          >
            <input
              id="checkOut"
              name="checkOut"
              type="date"
              required
              value={values.checkOut}
              onChange={updateField('checkOut')}
              aria-invalid={errors.checkOut ? true : undefined}
              className={cn(controlClass, 'pt-4')}
            />
          </Field>

          <SelectField
            id="rooms"
            label="Rooms"
            error={errors.rooms}
            span="md:col-span-4"
            placeholder="no of rooms"
            options={['1', '2', '3']}
            values={values}
            update={updateField}
          />
          <SelectField
            id="adults"
            label="Adults"
            error={errors.adults}
            span="md:col-span-4"
            placeholder="no of adults"
            options={['1', '2', '3']}
            values={values}
            update={updateField}
          />
          <SelectField
            id="children"
            label="Children"
            error={errors.children}
            span="md:col-span-4"
            placeholder="no of children"
            options={['0', '1', '2']}
            values={values}
            update={updateField}
          />

          <Field
            id="email"
            label="Email"
            error={errors.email}
            labelVisible={values.email !== ''}
            span="md:col-span-6"
          >
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={values.email}
              onChange={updateField('email')}
              className={cn(controlClass, values.email !== '' && 'pt-4')}
            />
          </Field>

          <Field
            id="phone"
            label="Phone"
            error={errors.phone}
            labelVisible={values.phone !== ''}
            span="md:col-span-6"
          >
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter you Phone"
              value={values.phone}
              onChange={updateField('phone')}
              className={cn(controlClass, values.phone !== '' && 'pt-4')}
            />
          </Field>

          {/* .form-btn slot: the full-width submit button. */}
          <div className="md:col-span-12">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="h-[60px] w-full rounded-[40px] bg-deep text-[16px] font-bold uppercase tracking-[1.3px] text-white hover:opacity-90 focus-visible:opacity-90"
            >
              Book Now
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
    </div>
  )
}
