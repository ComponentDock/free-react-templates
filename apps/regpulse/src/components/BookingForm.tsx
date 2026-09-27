import { useState, type FormEvent } from 'react'
import { DiningSpaceSelector } from './DiningSpaceSelector'

const TIME_OPTIONS = ['6:00 PM', '7:00 PM']
const FOOD_OPTIONS = ['Seasonal steamed fish', 'Assorted mushrooms']

interface FloatingInputProps {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  id: string
}

function FloatingInput({
  label,
  type = 'text',
  value,
  onChange,
  required,
  id,
}: FloatingInputProps) {
  return (
    <div className="relative pt-5">
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={label}
        className="peer w-full border-b border-input-border bg-transparent py-2 text-sm text-heading placeholder-transparent outline-none focus:border-brand"
        aria-label={label}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-5 text-sm text-label transition-all duration-200 peer-focus:top-0.5 peer-focus:text-xs peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-0.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand"
      >
        {label}
      </label>
    </div>
  )
}

interface FloatingSelectProps {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
  id: string
}

function FloatingSelect({ label, value, onChange, options, id }: FloatingSelectProps) {
  return (
    <div className="relative pb-6">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none border-b border-input-border bg-transparent py-2 text-sm text-label outline-none focus:border-brand"
        aria-label={label}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-label">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

export function BookingForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [time, setTime] = useState('')
  const [food, setFood] = useState('')
  const [diningSpace, setDiningSpace] = useState(4)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (name && phone && time && food) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <h2 className="mb-4 text-xl font-bold text-heading">Thank you!</h2>
        <p className="text-sm text-label">
          Your booking has been received. We will confirm shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Dinner booking form">
      <h2 className="mb-8 text-center text-lg font-bold text-heading">
        Booking place for your dinner!
      </h2>

      <div className="space-y-1">
        <FloatingInput id="name" label="Your name" value={name} onChange={setName} required />
        <FloatingInput
          id="phone"
          label="Your phone number"
          type="number"
          value={phone}
          onChange={setPhone}
          required
        />
        <FloatingSelect
          id="time"
          label="Time"
          value={time}
          onChange={setTime}
          options={TIME_OPTIONS}
        />
        <FloatingSelect
          id="food"
          label="Food"
          value={food}
          onChange={setFood}
          options={FOOD_OPTIONS}
        />
      </div>

      <DiningSpaceSelector value={diningSpace} onChange={setDiningSpace} />

      <div className="mt-2">
        <button
          type="submit"
          className="rounded-md bg-brand px-10 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-form-bg"
        >
          Book now
        </button>
        <a
          href="#verify"
          className="mt-3 block text-xs text-brand underline transition-colors hover:text-brand-dark"
        >
          Verify your booking info from your phone
        </a>
      </div>
    </form>
  )
}
