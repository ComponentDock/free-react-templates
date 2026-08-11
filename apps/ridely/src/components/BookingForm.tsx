import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Underline-style control recreated from the source CSS: transparent
   background, 65px tall, padding-top 15px, radius 0, white 700 16px text,
   capitalized, 2px #cecccd bottom border only, no focus ring. */
const controlClass =
  'h-[65px] w-full rounded-none border-b-2 border-ash bg-transparent px-0 pt-[15px] ' +
  'text-base font-bold capitalize transition-colors duration-200 ' +
  'placeholder:text-smoke focus:outline-none'

/* Floating label: 14px weight-700, absolutely positioned over the field. */
const labelClass =
  'pointer-events-none absolute left-0 text-sm font-bold leading-6 transition-all duration-200'

const errorClass = 'mt-1 text-xs font-bold text-red-400'

/* Seeded picsum placeholder for the source photo (aerial night city street
   with yellow taxis). The original background.jpg must not be copied. */
const PANEL_IMAGE = 'https://picsum.photos/seed/ridely-1/310/520'

function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-1 right-0 flex h-8 w-8 items-center justify-center text-sm text-ash"
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

/* Label classes: hidden (opacity 0, top 26px) until focused/filled for text
   inputs; always-visible grey for date/time/select, yellow at top on
   focus/fill. */
function labelClassFor(active: boolean, alwaysVisible: boolean): string {
  return cn(
    labelClass,
    'capitalize',
    active
      ? 'top-0 text-brand opacity-100'
      : alwaysVisible
        ? 'top-[26px] text-smoke opacity-100'
        : 'top-[26px] opacity-0',
  )
}

/* Control text color: white when focused/filled; grey for empty date/time
   inputs; transparent (placeholder-only) for empty text inputs and select. */
function controlTextClass(active: boolean, emptyStyle: 'transparent' | 'smoke'): string {
  return cn(active ? 'text-white' : emptyStyle === 'smoke' ? 'text-smoke' : 'text-transparent')
}

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  active: boolean
  alwaysVisible?: boolean
  children: ReactNode
}

/* form-group wrapper: relative container + floating label + error message.
   The control itself is passed as children (it carries id/value/onChange). */
function Field({ id, label, error, active, alwaysVisible = false, children }: FieldProps) {
  return (
    <div className="relative mb-5">
      {children}
      <label htmlFor={id} className={labelClassFor(active, alwaysVisible)}>
        {label}
      </label>
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    passengers: '',
    date: '',
    time: '',
  })
  const [errors, setErrors] = useState<BookingErrors>({})
  const [summary, setSummary] = useState<string | null>(null)
  const [focused, setFocused] = useState<BookingField | null>(null)

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

  const nameActive = focused === 'name' || values.name !== ''
  const phoneActive = focused === 'phone' || values.phone !== ''
  const pickupActive = focused === 'pickup' || values.pickup !== ''
  const destinationActive = focused === 'destination' || values.destination !== ''
  const passengersActive = focused === 'passengers' || values.passengers !== ''
  const dateActive = focused === 'date' || values.date !== ''
  const timeActive = focused === 'time' || values.time !== ''

  const focusProps = (field: BookingField) => ({
    onFocus: () => setFocused(field),
    onBlur: () => setFocused(null),
  })

  return (
    <div className="relative mx-auto w-full max-w-[768px] bg-coal">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[310px] bg-cover bg-center min-[481px]:block"
        style={{ backgroundImage: `url('${PANEL_IMAGE}')` }}
      />
      <form noValidate onSubmit={handleSubmit} className="p-[30px] min-[481px]:ml-[310px]">
        <div className="mb-[25px]">
          <h2 className="m-0 text-center text-[42px] font-normal uppercase text-white">
            Book Your Taxi
          </h2>
        </div>

        <Field id="name" label="Name" error={errors.name} active={nameActive}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your Name"
            value={values.name}
            onChange={updateField('name')}
            aria-invalid={errors.name ? true : undefined}
            className={cn(controlClass, controlTextClass(nameActive, 'transparent'))}
            {...focusProps('name')}
          />
        </Field>

        <Field id="phone" label="Phone" error={errors.phone} active={phoneActive}>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your Phone number"
            value={values.phone}
            onChange={updateField('phone')}
            aria-invalid={errors.phone ? true : undefined}
            className={cn(controlClass, controlTextClass(phoneActive, 'transparent'))}
            {...focusProps('phone')}
          />
        </Field>

        <Field id="pickup" label="Pickup Location" error={errors.pickup} active={pickupActive}>
          <input
            id="pickup"
            name="pickup"
            type="tel"
            placeholder="Enter an origin location"
            value={values.pickup}
            onChange={updateField('pickup')}
            aria-invalid={errors.pickup ? true : undefined}
            className={cn(controlClass, controlTextClass(pickupActive, 'transparent'))}
            {...focusProps('pickup')}
          />
        </Field>

        <Field
          id="destination"
          label="Destination Location"
          error={errors.destination}
          active={destinationActive}
        >
          <input
            id="destination"
            name="destination"
            type="tel"
            placeholder="Enter a destination location"
            value={values.destination}
            onChange={updateField('destination')}
            aria-invalid={errors.destination ? true : undefined}
            className={cn(controlClass, controlTextClass(destinationActive, 'transparent'))}
            {...focusProps('destination')}
          />
        </Field>

        <Field
          id="passengers"
          label="Passenger Numbers"
          error={errors.passengers}
          active={passengersActive}
          alwaysVisible
        >
          <select
            id="passengers"
            name="passengers"
            required
            value={values.passengers}
            onChange={updateField('passengers')}
            aria-invalid={errors.passengers ? true : undefined}
            className={cn(
              controlClass,
              controlTextClass(passengersActive, 'transparent'),
              'appearance-none pr-8',
            )}
            {...focusProps('passengers')}
          >
            <option value="" hidden />
            {['1', '2', '3'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <SelectArrow />
        </Field>

        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
          <Field
            id="date"
            label="Pickup Date"
            error={errors.date}
            active={dateActive}
            alwaysVisible
          >
            <input
              id="date"
              name="date"
              type="date"
              required
              value={values.date}
              onChange={updateField('date')}
              aria-invalid={errors.date ? true : undefined}
              className={cn(controlClass, controlTextClass(dateActive, 'smoke'))}
              {...focusProps('date')}
            />
          </Field>
          <Field
            id="time"
            label="Pickup Time"
            error={errors.time}
            active={timeActive}
            alwaysVisible
          >
            <input
              id="time"
              name="time"
              type="time"
              required
              value={values.time}
              onChange={updateField('time')}
              aria-invalid={errors.time ? true : undefined}
              className={cn(controlClass, controlTextClass(timeActive, 'smoke'))}
              {...focusProps('time')}
            />
          </Field>
        </div>

        <div className="mt-[25px]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-[55px] w-full rounded-none border-2 border-brand bg-coal px-[35px] text-lg font-bold text-brand hover:bg-coal focus-visible:ring-brand/40"
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
