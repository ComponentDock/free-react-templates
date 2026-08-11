import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  formatSummary,
  validateBooking,
  type BookingErrors,
  type BookingValues,
} from '../lib/booking'

/* 40px-tall square light-gray control: #f7f9fa fill, inset shadow, 16px 700
   navy text. Focus keeps the same inset shadow (the source has no ring). */
const controlClass =
  'h-10 w-full rounded-none border-0 bg-mist px-[10px] text-base font-bold text-navy ' +
  'shadow-[inset_0_1px_4px_rgba(181,193,204,0.3)] ' +
  'focus:shadow-[inset_0_1px_4px_rgba(181,193,204,0.3)] focus:outline-none ' +
  'placeholder:text-fog'

/* Label: 14px weight-700 uppercase slate above the control. */
const labelClass = 'block h-6 text-sm font-bold uppercase leading-6 text-slate'

const errorClass = 'mt-1 text-xs font-bold text-red-600'

/* Seeded picsum placeholder for the source photo (resort scene). The original
   background.jpg must not be copied. */
const PANEL_IMAGE = 'https://picsum.photos/seed/stayly-1/250/640'

function SelectArrow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute bottom-1 right-0 flex h-8 w-8 items-center justify-center text-sm text-arrow"
    >
      <span className="rotate-90">➜</span>
    </span>
  )
}

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>({
    checkIn: '',
    checkOut: '',
    adults: '1',
    children: '0',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<BookingErrors>({})
  const [summary, setSummary] = useState<string | null>(null)

  function updateField(field: keyof BookingValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = event.target.value
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) =>
        current[field as keyof BookingErrors] ? { ...current, [field]: undefined } : current,
      )
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateBooking(values)
    setErrors(nextErrors)
    setSummary(Object.keys(nextErrors).length === 0 ? formatSummary(values) : null)
  }

  return (
    <div className="relative mx-auto w-full max-w-[642px] bg-white shadow-[0_5px_10px_-5px_rgba(0,0,0,0.3)]">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[250px] bg-cover bg-center min-[481px]:block"
        style={{ backgroundImage: `url('${PANEL_IMAGE}')` }}
      />
      <form
        onSubmit={handleSubmit}
        noValidate
        className="border border-faint border-l-0 p-[30px] max-[480px]:ml-0 min-[481px]:ml-[250px]"
      >
        <div className="mb-[30px]">
          <h2 className="m-0 text-[35px] font-bold capitalize text-navy">Make your reservation</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="check-in" className={labelClass}>
              Check In
            </label>
            <input
              id="check-in"
              name="check-in"
              type="date"
              required
              value={values.checkIn}
              onChange={updateField('checkIn')}
              aria-invalid={errors.checkIn ? true : undefined}
              className={cn(controlClass, values.checkIn === '' && 'text-fog')}
            />
            {errors.checkIn && <p className={errorClass}>{errors.checkIn}</p>}
          </div>
          <div>
            <label htmlFor="check-out" className={labelClass}>
              Check Out
            </label>
            <input
              id="check-out"
              name="check-out"
              type="date"
              required
              value={values.checkOut}
              onChange={updateField('checkOut')}
              aria-invalid={errors.checkOut ? true : undefined}
              className={cn(controlClass, values.checkOut === '' && 'text-fog')}
            />
            {errors.checkOut && <p className={errorClass}>{errors.checkOut}</p>}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="relative">
            <label htmlFor="adults" className={labelClass}>
              Adults
            </label>
            <select
              id="adults"
              name="adults"
              value={values.adults}
              onChange={updateField('adults')}
              className={cn(controlClass, 'appearance-none pr-8')}
            >
              {['1', '2', '3'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectArrow />
          </div>
          <div className="relative">
            <label htmlFor="children" className={labelClass}>
              Children
            </label>
            <select
              id="children"
              name="children"
              value={values.children}
              onChange={updateField('children')}
              className={cn(controlClass, 'appearance-none pr-8')}
            >
              {['0', '1', '2'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <SelectArrow />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={updateField('email')}
            placeholder="Enter your email"
            aria-invalid={errors.email ? true : undefined}
            className={controlClass}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div className="mt-5">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={values.phone}
            onChange={updateField('phone')}
            placeholder="Enter your phone number"
            aria-invalid={errors.phone ? true : undefined}
            className={controlClass}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>

        <div className="mt-[10px]">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-auto w-full rounded-none px-[35px] py-[13px] text-base font-bold"
          >
            Book Now
          </Button>
        </div>

        {summary && (
          <p
            role="status"
            className="mt-4 border border-primary-200 bg-primary-50 px-4 py-3 text-sm font-bold text-navy"
          >
            {summary}
          </p>
        )}
      </form>
    </div>
  )
}
