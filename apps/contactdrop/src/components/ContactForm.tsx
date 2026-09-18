import { type FormEvent, useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface FieldConfig {
  name: string
  label: string
  placeholder: string
  type: 'text' | 'email' | 'tel'
  icon: React.JSX.Element
}

const fields: FieldConfig[] = [
  {
    name: 'name',
    label: 'Your name',
    placeholder: 'Your name',
    type: 'text',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: 'email',
    label: 'Your email',
    placeholder: 'Your email',
    type: 'email',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: 'phone',
    label: 'Your phone',
    placeholder: 'Your phone',
    type: 'tel',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
]

export function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {fields.map((field) => (
        <div key={field.name} className="relative">
          <div className="flex items-center gap-3 border-b border-border py-2">
            <span className="text-body">{field.icon}</span>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChange={(e) => setValues((prev) => ({ ...prev, [field.name]: e.target.value }))}
              className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-body"
              aria-label={field.label}
            />
          </div>
        </div>
      ))}

      {/* Message textarea */}
      <div className="relative">
        <div className="flex items-start gap-3 border-b border-border py-2">
          <span className="mt-0.5 text-body">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </span>
          <textarea
            name="message"
            placeholder="Your comments..."
            rows={3}
            value={values.message}
            onChange={(e) => setValues((prev) => ({ ...prev, message: e.target.value }))}
            className="flex-1 resize-none bg-transparent text-sm text-ink outline-none placeholder:text-body"
            aria-label="Your message"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-2 flex justify-center">
        <button
          type="submit"
          className={cn(
            'rounded-full bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark',
            submitted && 'opacity-60',
          )}
          disabled={submitted}
        >
          {submitted ? 'Sent!' : 'Send Now'}
        </button>
      </div>
    </form>
  )
}
