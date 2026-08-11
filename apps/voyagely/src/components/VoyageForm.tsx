import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingField,
  type BookingValues,
} from '../lib/booking'

/* input recreated from the source CSS: border none, background #fff, radius
   5px, padding 13px 20px, font-size 16px, weight 600, color #222,
   placeholder #999. A brand focus ring is added for accessibility (the
   source has no focus rule). */
const inputClass =
  'w-full rounded-[5px] border-none bg-white px-5 py-[13px] text-[16px] font-semibold text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand'

/* label: 12px weight 500, margin-bottom 2px, white (body text color). */
const labelClass = 'mb-[2px] block text-[12px] font-medium text-white'

const errorClass = 'mt-1 text-xs text-red-300'

interface FieldProps {
  id: BookingField
  label: string
  error?: string
  children: ReactNode
}

/* form-group field wrapper: label above the control, relative so the
   source's absolutely-positioned icons (calendar trigger, quantity chevrons)
   anchor to it. */
function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

export function VoyageForm() {
  const [values, setValues] = useState<BookingValues>({
    destination: '',
    from: '',
    to: '',
    quantity: 0,
  })
  const [errors, setErrors] = useState<BookingErrors>({})
  const [summary, setSummary] = useState<string | null>(null)

  function updateField(field: 'destination' | 'from' | 'to') {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
    }
  }

  function increaseQuantity() {
    setValues((current) => ({ ...current, quantity: current.quantity + 1 }))
  }

  function decreaseQuantity() {
    /* Source Giam() clamps at min 0. */
    setValues((current) => ({ ...current, quantity: Math.max(0, current.quantity - 1) }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateBooking(values)
    setErrors(nextErrors)
    setSummary(Object.keys(nextErrors).length === 0 ? formatSummary(values) : null)
  }

  return (
    /* .container — the dark translucent booking container: width 960px
       desktop (calc(100% - 30px) ≤768px), background rgba(11,13,24,0.6),
       border-radius 10px, margin 265px auto; form padding 35px 70px 51px
       70px (30px sides ≤480px). */
    <div className="mx-auto mt-[265px] w-[calc(100%-30px)] rounded-[10px] bg-panel px-[70px] pb-[51px] pt-[35px] md:w-[960px] max-[480px]:px-[30px]">
      {/* .form-group — flex row (space-between, align-items center),
          stacking to a column ≤768px with 20px gaps (source:
          flex-direction column, fields width 100% + margin-bottom 20px). */}
      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        {/* .form-destination — width 230px. */}
        <div className="max-md:mb-5 md:w-[230px]">
          <Field id="destination" label="Destination" error={errors.destination}>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="EG. HAWAII"
              required
              value={values.destination}
              onChange={updateField('destination')}
              aria-invalid={errors.destination ? true : undefined}
              className={inputClass}
            />
          </Field>
        </div>

        {/* .form-date-from.form-icon — width 155px + calendar trigger
            (absolute right 16px top 40px, #999). */}
        <div className="max-md:mb-5 md:w-[155px]">
          <Field id="from" label="From" error={errors.from}>
            <input
              id="from"
              name="from"
              type="date"
              placeholder="Pick a date"
              required
              value={values.from}
              onChange={updateField('from')}
              aria-invalid={errors.from ? true : undefined}
              className={cn(inputClass, 'pr-10')}
            />
            <Calendar
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-10 h-4 w-4 text-muted"
            />
          </Field>
        </div>

        {/* .form-date-to.form-icon — width 155px + calendar trigger. */}
        <div className="max-md:mb-5 md:w-[155px]">
          <Field id="to" label="To" error={errors.to}>
            <input
              id="to"
              name="to"
              type="date"
              placeholder="Pick a date"
              required
              value={values.to}
              onChange={updateField('to')}
              aria-invalid={errors.to ? true : undefined}
              className={cn(inputClass, 'pr-10')}
            />
            <Calendar
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-10 h-4 w-4 text-muted"
            />
          </Field>
        </div>

        {/* .form-quantity — width 80px, relative; number input (spin
            buttons stripped, value #999) + chevron-up (right 12px, top
            23px) / chevron-down (right 12px, bottom 0), #999, z-99. */}
        <div className="max-md:mb-5 md:w-[80px]">
          <Field id="quantity" label="Quantity">
            <input
              id="quantity"
              name="quantity"
              type="number"
              min={0}
              readOnly
              value={values.quantity}
              className={cn(
                inputClass,
                'text-muted [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
              )}
            />
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={increaseQuantity}
              className="absolute right-3 top-[23px] z-[99] cursor-pointer p-0.5 text-muted hover:text-white"
            >
              <ChevronUp className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={decreaseQuantity}
              className="absolute bottom-0 right-3 z-[99] cursor-pointer p-0.5 text-muted hover:text-white"
            >
              <ChevronDown className="h-[18px] w-[18px]" />
            </button>
          </Field>
        </div>

        {/* .form-submit — width 140px; the gold "Book now" button: #f8ba0f
            bg, white text, 14px, padding 15px 20px, margin-top 23px, hover
            #ce9906, rectangular (no radius). */}
        <div className="max-md:w-full md:w-[140px]">
          <Button
            type="submit"
            size="lg"
            className="mt-[23px] h-auto w-full rounded-none bg-brand px-5 py-[15px] text-[14px] font-semibold text-white hover:bg-brand-hover"
          >
            Book now
          </Button>
        </div>
      </form>

      {summary && (
        <p
          role="status"
          className="mt-5 border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand"
        >
          {summary}
        </p>
      )}
    </div>
  )
}
