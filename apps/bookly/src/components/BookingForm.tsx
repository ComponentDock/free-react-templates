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
   height 55px, near-black #181818 bold 16px text, SHARP 0-radius corners,
   no side borders — only a 2px rgba(0,0,0,0.2) bottom border, 15px top
   padding (room for the floating label). */
const controlClass =
  'h-[55px] w-full rounded-none border-0 border-b-2 border-line bg-white px-0 pt-[15px] ' +
  'text-[16px] font-bold text-ink placeholder:text-line focus:outline-none'

/* Floating label (source .form-label, toggled by the jQuery floatedLabel()):
   uppercase weight-700, pointer-events none, idle at top 20px in
   rgba(0,0,0,0.2) 16px; floats to top 0, shrinks to 14px and turns green
   #2b9328 when the field is focused OR has a value. */
const labelClass =
  'pointer-events-none absolute left-0 top-[20px] text-[16px] font-bold uppercase leading-[24px] text-line'
const labelFloatedClass = 'top-0 text-[14px] text-brand'

const errorClass = 'mt-1 text-xs font-bold text-red-600'

interface FocusHandlers {
  onFocus: () => void
  onBlur: () => void
}

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  hasValue: boolean
  children: (handlers: FocusHandlers) => ReactNode
}

/* form-group wrapper: relative container + floating label + error message;
   the control itself is passed as a render-prop receiving the focus/blur
   handlers (the label floats on focus OR when the field has a value — the
   React equivalent of the source's jQuery floatedLabel() +
   .input-not-empty). */
function Field({ id, label, error, hasValue, children }: FieldProps) {
  const [focused, setFocused] = useState(false)
  const floated = focused || hasValue

  return (
    <div className="relative mb-5">
      <label htmlFor={id} className={cn(labelClass, floated && labelFloatedClass)}>
        {label}
      </label>
      {children({
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
      })}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

/* Floating arrow glyph (.select-arrow): 32×32, rgba(0,0,0,0.2), at right 0
   bottom 7px, pointer-events none. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[7px] right-0 flex h-8 w-8 items-center justify-center text-line"
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

/* Select + floating arrow glyph, kept in one helper so the two selects
   share the same option/arrow markup. Rooms/Guests always hold a value
   (defaults 1 / 1 Person) so their labels are permanently floated. */
function SelectField({ id, label, error, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error} hasValue>
      {({ onFocus, onBlur }) => (
        <div className="relative">
          <select
            id={id}
            name={id}
            value={values[id]}
            onChange={update(id)}
            onFocus={onFocus}
            onBlur={onBlur}
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
      )}
    </Field>
  )
}

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    name: '',
    email: '',
    phone: '',
    rooms: '1',
    guests: '1 Person',
    checkIn: '',
    checkOut: '',
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

  const checkInActive = values.checkIn !== ''
  const checkOutActive = values.checkOut !== ''

  return (
    <div className="mx-auto w-full max-w-[642px] bg-white px-[30px] py-[40px] shadow-[0_0_10px_-5px_rgba(0,0,0,0.3)]">
      <form noValidate onSubmit={handleSubmit}>
        {/* Row 1: Name · Email (source col-md-6 × 2). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
          <Field id="name" label="Name" error={errors.name} hasValue={values.name !== ''}>
            {({ onFocus, onBlur }) => (
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={updateField('name')}
                onFocus={onFocus}
                onBlur={onBlur}
                aria-invalid={errors.name ? true : undefined}
                className={controlClass}
              />
            )}
          </Field>
          <Field id="email" label="Email" error={errors.email} hasValue={values.email !== ''}>
            {({ onFocus, onBlur }) => (
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={updateField('email')}
                onFocus={onFocus}
                onBlur={onBlur}
                aria-invalid={errors.email ? true : undefined}
                className={controlClass}
              />
            )}
          </Field>
        </div>

        {/* Row 2: Phone (col-md-6) · Rooms (col-md-3) · Guests (col-md-3);
            Rooms/Guests stay 2-up ≥768px (source col-sm-6). */}
        <div className="grid grid-cols-1 gap-x-[30px] sm:grid-cols-2 md:grid-cols-12">
          <div className="md:col-span-6">
            <Field id="phone" label="Phone" error={errors.phone} hasValue={values.phone !== ''}>
              {({ onFocus, onBlur }) => (
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={updateField('phone')}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  aria-invalid={errors.phone ? true : undefined}
                  className={controlClass}
                />
              )}
            </Field>
          </div>
          <div className="md:col-span-3">
            <SelectField
              id="rooms"
              label="Rooms"
              error={errors.rooms}
              options={['1', '2', '3']}
              values={values}
              update={updateField}
            />
          </div>
          <div className="md:col-span-3">
            <SelectField
              id="guests"
              label="Guests"
              error={errors.guests}
              options={['1 Person', '2 People', '3 People']}
              values={values}
              update={updateField}
            />
          </div>
        </div>

        {/* Row 3: Check In · Check Out (source col-md-6 × 2, both required,
            NO ⇔ divider). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
          <Field id="checkIn" label="Check In" error={errors.checkIn} hasValue={checkInActive}>
            {({ onFocus, onBlur }) => (
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                required
                value={values.checkIn}
                onChange={updateField('checkIn')}
                onFocus={onFocus}
                onBlur={onBlur}
                aria-invalid={errors.checkIn ? true : undefined}
                className={cn(controlClass, checkInActive ? 'text-ink' : 'text-line')}
              />
            )}
          </Field>
          <Field id="checkOut" label="Check Out" error={errors.checkOut} hasValue={checkOutActive}>
            {({ onFocus, onBlur }) => (
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                required
                value={values.checkOut}
                onChange={updateField('checkOut')}
                onFocus={onFocus}
                onBlur={onBlur}
                aria-invalid={errors.checkOut ? true : undefined}
                className={cn(controlClass, checkOutActive ? 'text-ink' : 'text-line')}
              />
            )}
          </Field>
        </div>

        {/* .form-btn wrapper. */}
        <div className="mt-[10px]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-[55px] w-full rounded-none bg-brand text-[18px] font-bold capitalize text-white hover:bg-brand-dark focus-visible:ring-brand/40"
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
