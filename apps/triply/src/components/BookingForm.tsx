import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Boxed control recreated from the source CSS: transparent background,
   65px tall, padding 0 15px, radius 0, white 700 16px text, full 2px #4d4d4d
   box border (→ #fff + padding-bottom 20px when filled), no focus ring. */
const controlClass =
  'h-[65px] w-full rounded-none border-2 border-ash bg-transparent px-[15px] ' +
  'text-base font-bold text-white transition-all duration-200 ' +
  'placeholder:text-smoke focus:outline-none'

/* Bottom-edge tab label bar: 14px weight-700 uppercase, absolutely
   positioned at the bottom edge of the input, grey #4d4d4d bar with dark
   #1a1b1d text (→ white bar when filled). */
const labelClass =
  'pointer-events-none absolute bottom-0 left-0 flex h-6 w-full items-center px-[15px] ' +
  'text-sm font-bold uppercase leading-6 text-coal transition-all duration-200'

const errorClass = 'mt-1 text-xs font-bold text-red-400'

/* Custom select arrow: rotated ➜ (U+279C) at the right edge, above the tab
   label bar; grey rgba(255,255,255,0.3) → #fff when a value is selected. */
function SelectArrow({ filled }: { filled: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute bottom-[26px] right-0 flex h-8 w-8 items-center justify-center text-sm',
        filled ? 'text-white' : 'text-smoke',
      )}
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

/* Label bar state: text inputs hide the bar (opacity 0) until filled;
   date/time/select keep a grey bar with dark text always; any filled field
   turns the bar WHITE with dark text. */
function labelClassFor(active: boolean, alwaysVisible: boolean): string {
  return cn(
    labelClass,
    'bg-ash',
    active ? 'bg-white opacity-100' : alwaysVisible ? 'opacity-100' : 'opacity-0',
  )
}

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  active: boolean
  alwaysVisible?: boolean
  children: ReactNode
}

/* form-group wrapper: relative container + bottom-edge tab label + error
   message. The control itself is passed as children (it carries
   id/value/onChange). */
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

  const nameActive = values.name !== ''
  const phoneActive = values.phone !== ''
  const pickupActive = values.pickup !== ''
  const destinationActive = values.destination !== ''
  const passengersActive = values.passengers !== ''
  const dateActive = values.date !== ''
  const timeActive = values.time !== ''

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-[768px] bg-coal p-[30px]"
    >
      {/* NO heading — matching the source, the form starts with Name. */}

      <Field id="name" label="Name" error={errors.name} active={nameActive}>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Enter your Name"
          value={values.name}
          onChange={updateField('name')}
          aria-invalid={errors.name ? true : undefined}
          className={cn(controlClass, nameActive && 'border-white pb-5')}
        />
      </Field>

      <Field id="phone" label="Phone" error={errors.phone} active={phoneActive}>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Enter your Phone number"
          value={values.phone}
          onChange={updateField('phone')}
          aria-invalid={errors.phone ? true : undefined}
          className={cn(controlClass, phoneActive && 'border-white pb-5')}
        />
      </Field>

      <Field id="pickup" label="Pickup Location" error={errors.pickup} active={pickupActive}>
        <input
          id="pickup"
          name="pickup"
          type="tel"
          required
          placeholder="Enter an origin location"
          value={values.pickup}
          onChange={updateField('pickup')}
          aria-invalid={errors.pickup ? true : undefined}
          className={cn(controlClass, pickupActive && 'border-white pb-5')}
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
          required
          placeholder="Enter a destination location"
          value={values.destination}
          onChange={updateField('destination')}
          aria-invalid={errors.destination ? true : undefined}
          className={cn(controlClass, destinationActive && 'border-white pb-5')}
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
            'appearance-none pb-5 pr-8 [&>option]:text-coal',
            passengersActive ? 'border-white text-white' : 'text-smoke',
          )}
        >
          <option value="" hidden>
            Select Passenger Numbers
          </option>
          {['1', '2', '3'].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <SelectArrow filled={passengersActive} />
      </Field>

      <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
        <Field id="date" label="Pickup Date" error={errors.date} active={dateActive} alwaysVisible>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={values.date}
            onChange={updateField('date')}
            aria-invalid={errors.date ? true : undefined}
            className={cn(
              controlClass,
              'pb-5',
              dateActive ? 'border-white text-white' : 'text-smoke',
            )}
          />
        </Field>
        <Field id="time" label="Pickup Time" error={errors.time} active={timeActive} alwaysVisible>
          <input
            id="time"
            name="time"
            type="time"
            required
            value={values.time}
            onChange={updateField('time')}
            aria-invalid={errors.time ? true : undefined}
            className={cn(
              controlClass,
              'pb-5',
              timeActive ? 'border-white text-white' : 'text-smoke',
            )}
          />
        </Field>
      </div>

      <div className="mt-[10px]">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="h-[55px] w-full rounded-none border-none bg-brand text-lg font-bold text-coal hover:bg-primary-700 focus-visible:ring-brand/40"
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
  )
}
