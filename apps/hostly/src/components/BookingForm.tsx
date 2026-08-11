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
   height 45px, padding 0 15px, near-black #151515 bold 16px text, 1px
   #e5e5e5 border, PILL radius 40px (the signature shape of this variant),
   focus background #f8f8f8. */
const controlClass =
  'h-[45px] w-full rounded-[40px] border border-mist bg-white px-[15px] text-[16px] font-bold text-ink ' +
  'placeholder:text-mist focus:bg-soft focus:outline-none'

/* Static uppercase taupe label ABOVE the input (source .form-label): 14px
   weight-400 #856849, line-height 24px, indented 20px to align with the
   pill inputs' padding — NOT floating, NOT bottom tab bars. */
const labelClass = 'ml-[20px] inline-block text-[14px] uppercase leading-[24px] text-brand'

const errorClass = 'mt-1 text-xs font-bold text-red-600'

/* Floating light-grey arrow glyph (.select-arrow): 32×32, #e5e5e5 (matching
   the border color), at right 3px bottom 5px, pointer-events none, NO tab
   background. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[5px] right-[3px] flex h-8 w-8 items-center justify-center text-mist"
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

/* form-group wrapper: relative container + static taupe label + error
   message; the control itself is passed as children (it carries
   id/value/onChange). */
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
  placeholder?: string
  error?: string
  options: string[]
  values: BookingValues
  update: (field: BookingField) => (event: ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
}

/* Select + floating arrow glyph, kept in one helper so the three selects
   share the same option/arrow markup. Only the Room Type select is required
   and carries a hidden placeholder option (source: Adults/Children default
   to their first options and are NOT required). */
function SelectField({
  id,
  label,
  placeholder,
  error,
  options,
  values,
  update,
  required = false,
}: SelectFieldProps) {
  const isEmpty = values[id] === ''
  return (
    <Field id={id} label={label} error={error}>
      <div className="relative">
        <select
          id={id}
          name={id}
          required={required}
          value={values[id]}
          onChange={update(id)}
          aria-invalid={error ? true : undefined}
          className={cn(controlClass, 'appearance-none pr-10', isEmpty ? 'text-mist' : 'text-ink')}
        >
          {placeholder !== undefined && (
            <option value="" hidden>
              {placeholder}
            </option>
          )}
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
    checkIn: '',
    checkOut: '',
    adults: '1',
    children: '0',
    roomType: '',
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
    <div className="relative mx-auto w-full max-w-[912px] rounded-[6px] bg-white shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)]">
      {/* Left photo panel (.booking-bg): absolute, 400px wide, overlapping the
          card's left edge by 25px on all sides; seeded picsum architectural
          photo dimmed by the heavy warm-taupe scrim; stacks above the form on
          mobile (source media query ≤768px). */}
      <div
        className="relative -top-[15px] mx-auto w-[95%] overflow-hidden rounded-[6px] bg-cover bg-center p-[25px] shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)] md:absolute md:bottom-[-25px] md:left-[25px] md:top-[-25px] md:mx-0 md:w-[400px]"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hostly-1/500/700')" }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-brand/78" />
        <div className="relative z-20 mb-[30px] mt-[60px]">
          <h2 className="m-0 mb-[15px] font-display text-[42px] font-black capitalize text-white">
            Make your reservation
          </h2>
          <p className="text-[18px] leading-relaxed text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam
            at consequatur quisquam suscipit.
          </p>
        </div>
      </div>

      <form noValidate onSubmit={handleSubmit} className="p-[30px] md:ml-[425px]">
        {/* Row 1: Check In · Check Out (source col-md-6 × 2, NO ⇔ divider). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
          <Field id="checkIn" label="Check In" error={errors.checkIn}>
            <input
              id="checkIn"
              name="checkIn"
              type="date"
              required
              value={values.checkIn}
              onChange={updateField('checkIn')}
              aria-invalid={errors.checkIn ? true : undefined}
              className={cn(controlClass, checkInActive ? 'text-ink' : 'text-mist')}
            />
          </Field>
          <Field id="checkOut" label="Check Out" error={errors.checkOut}>
            <input
              id="checkOut"
              name="checkOut"
              type="date"
              required
              value={values.checkOut}
              onChange={updateField('checkOut')}
              aria-invalid={errors.checkOut ? true : undefined}
              className={cn(controlClass, checkOutActive ? 'text-ink' : 'text-mist')}
            />
          </Field>
        </div>

        {/* Row 2: Adults · Children (source col-md-6 × 2). */}
        <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
          <SelectField
            id="adults"
            label="Adults"
            error={errors.adults}
            options={['1', '2', '3']}
            values={values}
            update={updateField}
          />
          <SelectField
            id="children"
            label="Children"
            error={errors.children}
            options={['0', '1', '2']}
            values={values}
            update={updateField}
          />
        </div>

        {/* Full-width Room Type select (source: required, hidden placeholder). */}
        <SelectField
          id="roomType"
          label="Room Type"
          placeholder="Select room type"
          error={errors.roomType}
          options={['Private Room (1 to 2 People)', 'Family Room (1 to 4 People)']}
          values={values}
          update={updateField}
          required
        />

        {/* .form-btn wrapper: margin-top 30px. */}
        <div className="mt-[30px]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-[55px] w-full rounded-[40px] bg-brand/90 text-[18px] font-bold text-white hover:bg-brand focus-visible:ring-brand/40"
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
