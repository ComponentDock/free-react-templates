import { useState, type FormEvent, type ReactElement } from 'react'
import { Check } from 'lucide-react'

const reasons = [
  'Consectetur adipisicing elit',
  'Adipisci repellat accusamus',
  'Tempore reprehenderit vitae',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  website?: string
  message?: string
}

export function QuoteForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const next: FormErrors = {}
    if (values.name.trim() === '') next.name = 'Full name is required'
    if (values.email.trim() === '') {
      next.email = 'Email is required'
    } else if (!emailPattern.test(values.email.trim())) {
      next.email = 'Enter a valid email address'
    }
    if (values.message.trim() === '') next.message = 'Message is required'
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div id="quote" className="grid md:grid-cols-2" aria-label="Request a quote">
        <ReasonsColumn />
        <div className="bg-white px-6 py-16 md:px-12">
          <h3 className="mb-2 text-2xl font-normal text-ink">Get a Free Quote</h3>
          <p
            role="status"
            className="mt-6 rounded border border-green-200 bg-green-50 p-4 text-green-800"
          >
            Thanks! Your quote request has been sent. We will get back to you shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="quote" className="grid md:grid-cols-2" aria-label="Request a quote">
      <ReasonsColumn />
      <div className="bg-white px-6 py-16 md:px-12">
        <h3 className="mb-6 text-2xl font-normal text-ink">Get a Free Quote</h3>
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              label="Full Name"
              error={errors.name}
              input={
                <input
                  id="quote-name"
                  type="text"
                  value={values.name}
                  placeholder="Full Name"
                  className="h-[52px] w-full border-b border-gray-300 bg-white text-base text-black focus:border-brand focus:outline-none"
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              }
            />
            <Field
              label="Email"
              error={errors.email}
              input={
                <input
                  id="quote-email"
                  type="email"
                  value={values.email}
                  placeholder="Email"
                  className="h-[52px] w-full border-b border-gray-300 bg-white text-base text-black focus:border-brand focus:outline-none"
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              }
            />
            <Field
              label="Phone"
              error={errors.phone}
              input={
                <input
                  id="quote-phone"
                  type="tel"
                  value={values.phone}
                  placeholder="Phone"
                  className="h-[52px] w-full border-b border-gray-300 bg-white text-base text-black focus:border-brand focus:outline-none"
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              }
            />
            <Field
              label="Website"
              error={errors.website}
              input={
                <input
                  id="quote-website"
                  type="url"
                  value={values.website}
                  placeholder="Website"
                  className="h-[52px] w-full border-b border-gray-300 bg-white text-base text-black focus:border-brand focus:outline-none"
                  onChange={(e) => handleChange('website', e.target.value)}
                />
              }
            />
          </div>
          <div className="mt-4">
            <Field
              label="Message"
              error={errors.message}
              input={
                <textarea
                  id="quote-message"
                  value={values.message}
                  placeholder="Message"
                  rows={4}
                  className="w-full resize-none border-b border-gray-300 bg-white pt-4 text-base text-black focus:border-brand focus:outline-none"
                  onChange={(e) => handleChange('message', e.target.value)}
                />
              }
            />
          </div>
          <button
            type="submit"
            className="mt-8 bg-brand px-8 py-3 text-white transition-colors hover:bg-brand-dark"
          >
            Get a Quote
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({
  label,
  error,
  input,
}: {
  label: string
  error?: string
  input: ReactElement<{ id: string }>
}) {
  return (
    <div>
      <label htmlFor={input.props.id} className="sr-only">
        {label}
      </label>
      {input}
      {error && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

function ReasonsColumn() {
  return (
    <div className="relative bg-brand px-6 py-16 text-white md:px-12">
      <div className="relative z-10">
        <h3 className="mb-4 text-2xl font-normal">Reasons for Choosing Us</h3>
        <p className="mb-6 text-white-80">
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
          decided to leave for the far World of Grammar.
        </p>
        <ul className="space-y-3">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-center gap-3 text-white-80">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <Check className="h-4 w-4 text-white" aria-hidden="true" />
              </span>
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
