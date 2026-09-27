import { useState, type FormEvent } from 'react'

const COURSE_TYPES = [
  'Web Development',
  'Data Science',
  'Mobile Development',
  'UX Design',
  'Digital Marketing',
]

const CONTACT_METHODS = ['By phone', 'By email', 'In person']

const HOURS = ['8am - 10am', '10am - 12pm', '12pm - 2pm', '2pm - 4pm', '4pm - 6pm']

interface FormFieldProps {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}

function FormField({ label, type = 'text', value, onChange, required }: FormFieldProps) {
  return (
    <div>
      <label className="mb-1 block text-sm text-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={label}
        className="w-full border-b border-border bg-transparent py-2 text-sm text-heading placeholder-label/60 outline-none focus:border-brand"
        aria-label={label}
      />
    </div>
  )
}

interface SelectFieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-1 block text-sm text-label">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none border-b border-border bg-transparent py-2 text-sm text-heading outline-none focus:border-brand"
        aria-label={label}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export function AppointmentForm() {
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [courseType, setCourseType] = useState('')
  const [contactMethod, setContactMethod] = useState('')
  const [hours, setHours] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!agreeTerms) return
    if (title && name && email && phone && courseType && contactMethod && hours) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-lg rounded-lg bg-card-bg p-10 shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-heading">Thank You!</h2>
        <p className="text-sm text-label">
          Your appointment request has been submitted. We will contact you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg rounded-lg bg-card-bg p-10 shadow-xl"
      aria-label="Education appointment form"
    >
      <h2 className="mb-8 text-lg font-bold uppercase tracking-wide text-heading">
        Education Appointment Form
      </h2>

      <div className="space-y-5">
        <FormField label="Title" value={title} onChange={setTitle} required />
        <FormField label="Your Name" value={name} onChange={setName} required />
        <FormField label="Email" type="email" value={email} onChange={setEmail} required />
        <FormField label="Phone number" type="tel" value={phone} onChange={setPhone} required />
        <SelectField
          label="Course Type"
          value={courseType}
          onChange={setCourseType}
          options={COURSE_TYPES}
        />
      </div>

      <div className="mt-8">
        <h3 className="mb-5 text-sm font-bold text-heading">How would you like to be located?</h3>
        <div className="space-y-5">
          <SelectField
            label="By phone"
            value={contactMethod}
            onChange={setContactMethod}
            options={CONTACT_METHODS}
          />
          <SelectField label="Hours : 8am 10pm" value={hours} onChange={setHours} options={HOURS} />
        </div>
      </div>

      <div className="mt-8 flex items-start gap-3">
        <input
          type="checkbox"
          id="terms"
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          className="mt-0.5"
        />
        <label htmlFor="terms" className="text-sm text-label">
          I agree to the{' '}
          <a href="#terms" className="font-semibold text-heading underline">
            Terms and Conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="mt-8 rounded-md bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        Request an appointment
      </button>
    </form>
  )
}
