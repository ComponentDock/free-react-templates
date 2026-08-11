import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import { Calendar, Check, ChevronDown } from 'lucide-react'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingValues,
} from '../lib/booking'

/* .form-control — height 42px, flat white, 1px #e6e6e6 border, 13px #666
   text (Muli-Regular), rectangular. A brand focus ring is added for
   accessibility (the source has no focus rule). */
const controlClass =
  'h-[42px] w-full border border-border bg-white px-[14px] text-[13px] text-ink placeholder:text-ink/60 focus:outline-none focus:ring-2 focus:ring-brand/40'

/* label — 17px Muli-SemiBold #4c4c4c, margin-bottom 8px. */
const labelClass = 'mb-2 block text-[17px] font-semibold text-label'

const errorClass = 'mt-1 text-xs text-red-500'

/* .form-row — flex with two 50% columns separated by 25px; stacks to a
   block of full-width fields on ≤767px (source keeps margin-bottom 25px on
   both the row and the stacked wrappers). */
const rowClass = 'mb-[25px] flex gap-[25px] max-[767px]:block'
const fieldClass = 'w-1/2 max-[767px]:mb-[25px] max-[767px]:w-full'

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6]

interface FieldProps {
  id: string
  label: string
  error?: string
  children: ReactNode
}

/* form-wrapper — relative so the source's absolutely-positioned icons
   (calendar left 16px top 43px; chevron right 16px top 42px) anchor to the
   field. */
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

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    // Source selects default to 1.
    adults: 1,
    children: 1,
  })
  const [errors, setErrors] = useState<BookingErrors>({})
  const [summary, setSummary] = useState<string | null>(null)
  const [consent, setConsent] = useState(false)

  function updateField(field: 'name' | 'phone' | 'checkIn' | 'checkOut') {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current))
    }
  }

  function updateGuestCount(field: 'adults' | 'children') {
    return (event: ChangeEvent<HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: Number(event.target.value) }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateBooking(values)
    setErrors(nextErrors)
    setSummary(Object.keys(nextErrors).length === 0 ? formatSummary(values) : null)
  }

  return (
    /* .form — width 100%, padding 57px 46px 55px, background #fff
       (30px 20px ≤767px). */
    <form
      noValidate
      onSubmit={handleSubmit}
      className="bg-white px-[46px] pb-[55px] pt-[57px] max-[767px]:px-5 max-[767px]:pb-[30px] max-[767px]:pt-[30px]"
    >
      {/* h3 — 35px Poppins-Medium #3e91f7, letter-spacing 3px, mb 22px. */}
      <h3 className="mb-[22px] text-[35px] font-medium uppercase tracking-[3px] text-brand">
        FIND A ROOM
      </h3>

      <div className={rowClass}>
        <div className={fieldClass}>
          <Field id="name" label="Name *" error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              value={values.name}
              onChange={updateField('name')}
              aria-invalid={errors.name ? true : undefined}
              className={controlClass}
            />
          </Field>
        </div>
        <div className={fieldClass}>
          <Field id="phone" label="Phone *" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone"
              required
              value={values.phone}
              onChange={updateField('phone')}
              aria-invalid={errors.phone ? true : undefined}
              className={controlClass}
            />
          </Field>
        </div>
      </div>

      <div className={rowClass}>
        {/* Datepickers: native <input type="date"> per repo convention; the
            source Air Datepicker format dd M yyyy is kept for the summary. */}
        <div className={fieldClass}>
          <Field id="checkIn" label="Check-in *" error={errors.checkIn}>
            <input
              id="checkIn"
              name="checkIn"
              type="date"
              required
              value={values.checkIn}
              onChange={updateField('checkIn')}
              aria-invalid={errors.checkIn ? true : undefined}
              className={cn(controlClass, 'pl-[39px]')}
            />
            {/* .lnr-calendar-full — absolute left 16px top 43px, 15px, #666. */}
            <Calendar
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-[43px] h-[15px] w-[15px] text-ink"
            />
          </Field>
        </div>
        <div className={fieldClass}>
          <Field id="checkOut" label="Check-out *" error={errors.checkOut}>
            <input
              id="checkOut"
              name="checkOut"
              type="date"
              required
              value={values.checkOut}
              onChange={updateField('checkOut')}
              aria-invalid={errors.checkOut ? true : undefined}
              className={cn(controlClass, 'pl-[39px]')}
            />
            <Calendar
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-[43px] h-[15px] w-[15px] text-ink"
            />
          </Field>
        </div>
      </div>

      {/* .form-row.last — margin-bottom 22px. */}
      <div className={cn(rowClass, 'mb-[22px]')}>
        <div className={fieldClass}>
          <Field id="adults" label="Adults *">
            <select
              id="adults"
              name="adults"
              value={values.adults}
              onChange={updateGuestCount('adults')}
              className={cn(controlClass, 'cursor-pointer appearance-none pr-8')}
            >
              {GUEST_OPTIONS.map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
            {/* .zmdi-chevron-down — absolute right 16px top 42px, 15px, #666. */}
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-[42px] h-[15px] w-[15px] text-ink"
            />
          </Field>
        </div>
        <div className={fieldClass}>
          {/* Source label is "Chidren" — typo fixed to "Children". */}
          <Field id="children" label="Children *">
            <select
              id="children"
              name="children"
              value={values.children}
              onChange={updateGuestCount('children')}
              className={cn(controlClass, 'cursor-pointer appearance-none pr-8')}
            >
              {GUEST_OPTIONS.map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-[42px] h-[15px] w-[15px] text-ink"
            />
          </Field>
        </div>
      </div>

      {/* .checkbox — custom checkbox (native input visually hidden + styled
          checkmark 12×13px, radius 2px, #ebebeb/#ccc, #333 glyph). The
          source consent line is Lorem placeholder copy — paraphrased to an
          equivalent consent-style line. */}
      <label className="flex cursor-pointer items-start gap-2 pl-[22px]">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className={cn(
            'mt-[2px] flex h-[13px] w-3 shrink-0 items-center justify-center rounded-[2px] border border-check-edge bg-check text-check-glyph',
            consent ? 'visible' : 'invisible',
          )}
        >
          <Check className="h-3 w-3" strokeWidth={3} />
        </span>
        <span className="text-[13px] leading-relaxed text-label">
          I agree to the booking terms and conditions.
        </span>
      </label>

      {/* .submit — 173×42px, mt 30px, #3e91f7, white uppercase 15px,
          letter-spacing 3px, hover #0072fd. The source hover label swap is
          recreated with two stacked labels (CSS transitions only): the
          visible label slides down/fades while the duplicate slides in. */}
      <Button
        type="submit"
        className="group relative mt-[30px] h-[42px] w-[173px] overflow-hidden rounded-none bg-brand text-[15px] font-semibold uppercase tracking-[3px] text-white hover:bg-brand-hover"
      >
        <span className="flex h-full w-full items-center justify-center transition-all duration-300 group-hover:translate-y-10 group-hover:opacity-0">
          BOOK ROOM
        </span>
        {/* Duplicate label for the slide-in half of the swap — hidden from
            the accessibility tree so the button name stays "BOOK ROOM". */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex -translate-x-[30%] items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          BOOK ROOM
        </span>
      </Button>

      {summary && (
        <p
          role="status"
          className="mt-5 border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand"
        >
          {summary}
        </p>
      )}
    </form>
  )
}
