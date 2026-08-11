import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Boxed control recreated from the source CSS (.form-control): light-grey
   #f5f5f5 solid fill, no border, 45px tall, 3px radius, dark #101113 14px
   text; placeholder at rgba(16,17,19,0.3). */
const controlClass =
  'h-[45px] w-full rounded-[3px] border-0 bg-field px-3 text-[14px] font-normal text-ink ' +
  'placeholder:text-placeholder focus:outline-none'

/* Static label (source .form-label): white, 12px, uppercase, weight 400, 5px
   bottom margin — sits FIXED above the control and never floats (the
   defining difference vs Bookly/Ridely floating labels). */
const labelClass = 'mb-[5px] block text-[12px] font-normal uppercase leading-none text-white'

const errorClass = 'mt-1 text-xs font-normal text-red-400'

const HOURS = Array.from({ length: 12 }, (_, index) => String(index + 1))
const MINS = Array.from({ length: 11 }, (_, index) => String((index + 1) * 5).padStart(2, '0'))

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  children: ReactNode
}

/* form-group wrapper: static label + control + error message (source
   .form-group: position relative, margin-bottom 15px). */
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="relative mb-[15px]">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

/* Floating arrow glyph (source .select-arrow): 32×32, #101113 14px, rotated
   ➜ (U+279C), at right 0 bottom 6px, pointer-events none. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[6px] right-0 flex h-8 w-8 items-center justify-center text-[14px] text-ink"
    >
      <span className="rotate-90">➜</span>
    </span>
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

/* Select + arrow glyph, kept in one helper so Hour/Min/AM-PM share the same
   option/arrow markup. */
function SelectField({ id, label, error, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={values[id]}
          onChange={update(id)}
          className={cn(controlClass, 'appearance-none pr-5')}
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

export function CarBookingForm() {
  const [values, setValues] = useState<BookingValues>({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    destination: '',
    pickupDate: '',
    hour: '1',
    min: '05',
    ampm: 'AM',
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

  const dateActive = values.pickupDate !== ''

  return (
    <div className="booking-form mx-auto w-full max-w-[642px]">
      {/* .form-header — centered, 25px below the card top; the h1 sits ABOVE
          the dark card (source: header outside <form>). */}
      <div className="form-header mb-[25px] text-center">
        <h1 className="text-[58px] font-bold uppercase leading-none text-brand">Book a car</h1>
      </div>

      {/* The DARK CARD IS the <form> itself (source: form { background-color:
          #101113; padding: 30px 20px; border-radius: 3px }) — no shadow, no
          border. */}
      <form noValidate onSubmit={handleSubmit} className="rounded-[3px] bg-ink px-[20px] py-[30px]">
        {/* Row 1: Name · Email (source col-sm-6 × 2). */}
        <div className="grid grid-cols-1 gap-x-[30px] sm:grid-cols-2">
          <Field id="name" label="Name" error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={values.name}
              onChange={updateField('name')}
              aria-invalid={errors.name ? true : undefined}
              className={controlClass}
            />
          </Field>
          <Field id="email" label="Email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={updateField('email')}
              aria-invalid={errors.email ? true : undefined}
              className={controlClass}
            />
          </Field>
        </div>

        {/* Rows 2–4: Phone · Pickup Location · Destination (full width). */}
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={values.phone}
            onChange={updateField('phone')}
            aria-invalid={errors.phone ? true : undefined}
            className={controlClass}
          />
        </Field>
        <Field id="pickup" label="Pickup Location" error={errors.pickup}>
          <input
            id="pickup"
            name="pickup"
            type="text"
            placeholder="Enter ZIP/Location"
            value={values.pickup}
            onChange={updateField('pickup')}
            aria-invalid={errors.pickup ? true : undefined}
            className={controlClass}
          />
        </Field>
        <Field id="destination" label="Destination" error={errors.destination}>
          <input
            id="destination"
            name="destination"
            type="text"
            placeholder="Enter ZIP/Location"
            value={values.destination}
            onChange={updateField('destination')}
            aria-invalid={errors.destination ? true : undefined}
            className={controlClass}
          />
        </Field>

        {/* Row 5: Pickup Date (source col-sm-5) + Hour/Min/AM-PM (source
            col-sm-7 holding three col-sm-4 selects). */}
        <div className="grid grid-cols-1 gap-x-[30px] sm:grid-cols-12">
          <div className="sm:col-span-5">
            <Field id="pickupDate" label="Pickup Date" error={errors.pickupDate}>
              <input
                id="pickupDate"
                name="pickupDate"
                type="date"
                required
                value={values.pickupDate}
                onChange={updateField('pickupDate')}
                aria-invalid={errors.pickupDate ? true : undefined}
                className={cn(controlClass, dateActive ? 'text-ink' : 'text-placeholder')}
              />
            </Field>
          </div>
          <div className="grid grid-cols-3 gap-x-[30px] sm:col-span-7">
            <SelectField
              id="hour"
              label="Hour"
              error={errors.hour}
              options={HOURS}
              values={values}
              update={updateField}
            />
            <SelectField
              id="min"
              label="Min"
              error={errors.min}
              options={MINS}
              values={values}
              update={updateField}
            />
            <SelectField
              id="ampm"
              label="AM/PM"
              error={errors.ampm}
              options={['AM', 'PM']}
              values={values}
              update={updateField}
            />
          </div>
        </div>

        {/* .form-btn wrapper. */}
        <div className="mt-[15px]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-[50px] w-full rounded-[3px] bg-brand text-[14px] font-bold uppercase text-ink hover:bg-brand/90 focus-visible:ring-brand/40"
          >
            Book Now
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
