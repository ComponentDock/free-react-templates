import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* Boxed control recreated from the source CSS (.form-control): white
   background, 50px tall, padding 0 20px, radius 3px, 1px #e1e1e1 border
   (→ bronze #c99552 on focus), 14px #6b6b6d text, #e1e1e1 placeholder. */
const controlClass =
  'h-[50px] w-full rounded-[3px] border border-mist bg-white px-5 text-sm text-slate ' +
  'placeholder:text-mist focus:border-brand focus:outline-none'

/* Static bronze label ABOVE the input (source .form-label): 14px weight-700
   capitalized #c99552 with a 3px bottom gap. */
const labelClass = 'mb-[3px] inline-block text-sm font-bold capitalize text-brand'

const errorClass = 'mt-1 text-xs font-bold text-red-600'

/* Custom select arrow tab (.select-arrow): 24px wide, 50px tall, grey
   #e1e1e1 with the rotated ➜ (U+279C) glyph, radius 0 3px 3px 0,
   pointer-events none; turns bronze with a white glyph when the select
   receives focus. */
function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 flex h-[50px] w-6 items-center justify-center rounded-r-[3px] bg-mist text-sm text-slate/30 transition-all duration-200 group-focus-within:bg-brand group-focus-within:text-white"
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

/* form-group wrapper: relative container (group enables the select arrow-tab
   focus-within state) + static bronze label + error message; the control
   itself is passed as children (it carries id/value/onChange). */
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="group relative mb-[30px]">
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
  placeholder: string
  error?: string
  options: string[]
  values: BookingValues
  update: (field: BookingField) => (event: ChangeEvent<HTMLSelectElement>) => void
}

/* Select + grey arrow tab, kept in one helper so the three selects share the
   same option/arrow markup. */
function SelectField({ id, label, placeholder, error, options, values, update }: SelectFieldProps) {
  return (
    <Field id={id} label={label} error={error}>
      <div className="relative">
        <select
          id={id}
          name={id}
          required
          value={values[id]}
          onChange={update(id)}
          aria-invalid={error ? true : undefined}
          className={cn(
            controlClass,
            'appearance-none pr-5',
            values[id] === '' ? 'text-mist' : 'text-slate',
          )}
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

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    checkIn: '',
    checkOut: '',
    rooms: '',
    adults: '',
    children: '',
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
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-[768px] rounded-[3px] bg-white p-[30px]"
    >
      {/* Centered serif header (.form-header → h1 "Make your reservation"). */}
      <div className="mb-10">
        <h1 className="m-0 text-center font-display text-[38px] font-bold capitalize text-ink">
          Make your reservation
        </h1>
      </div>

      {/* Row 1: Check In ⇔ Check out (Bootstrap col-md-6 × 2). */}
      <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
        <div className="relative">
          <Field id="checkIn" label="Check In" error={errors.checkIn}>
            <input
              id="checkIn"
              name="checkIn"
              type="date"
              required
              value={values.checkIn}
              onChange={updateField('checkIn')}
              aria-invalid={errors.checkIn ? true : undefined}
              className={cn(controlClass, checkInActive ? 'text-slate' : 'text-mist')}
            />
          </Field>
          {/* Bronze ⇔ divider between the two date columns (.in-out), hidden
              below the md breakpoint (source: hidden-xs hidden-sm). */}
          <span
            aria-hidden="true"
            className="absolute -right-[15px] bottom-[25px] z-20 hidden h-[30px] w-[30px] -translate-y-1/2 items-center justify-center text-2xl leading-[30px] text-brand md:flex"
          >
            ⇔
          </span>
        </div>
        <Field id="checkOut" label="Check out" error={errors.checkOut}>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            value={values.checkOut}
            onChange={updateField('checkOut')}
            aria-invalid={errors.checkOut ? true : undefined}
            className={cn(controlClass, checkOutActive ? 'text-slate' : 'text-mist')}
          />
        </Field>
      </div>

      {/* Row 2: No of rooms · Adults · Children · Check availability
          (Bootstrap col-md-3 × 4). */}
      <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-4">
        <SelectField
          id="rooms"
          label="No of rooms"
          placeholder="Select rooms"
          error={errors.rooms}
          options={['1', '2', '3']}
          values={values}
          update={updateField}
        />
        <SelectField
          id="adults"
          label="Adults"
          placeholder="Select adults"
          error={errors.adults}
          options={['1', '2', '3']}
          values={values}
          update={updateField}
        />
        <SelectField
          id="children"
          label="Children"
          placeholder="Select children"
          error={errors.children}
          options={['0', '1', '2']}
          values={values}
          update={updateField}
        />
        <div className="mt-[23px]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-[50px] w-full rounded-[3px] border-none bg-brand text-sm font-bold text-white hover:bg-primary-700 focus-visible:ring-brand/40"
          >
            Check availability
          </Button>
        </div>
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
