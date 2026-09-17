import { type FormEvent, useState } from 'react'
import { cn } from '@free-react-templates/ui'

type FormMode = 'hi' | 'quote'

interface ContactFormProps {
  mode: FormMode
  onSubmit?: (data: Record<string, string>) => void
}

const services = ['Web Design', 'Development', 'Marketing', 'SEO', 'Branding']
const budgets = ['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', 'Over $10,000']

export function ContactForm({ mode, onSubmit }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    onSubmit?.({ name, email, message, service, budget })
  }

  function handleReset() {
    setSubmitted(false)
    setName('')
    setEmail('')
    setMessage('')
    setService('')
    setBudget('')
  }

  if (submitted) {
    return (
      <div className="text-center" data-testid="success-state">
        <h2 className="mb-4 text-2xl font-bold">Thank You!</h2>
        <p className="mb-6 text-sm opacity-80">
          Your message has been sent. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className={cn(
            'rounded bg-white px-6 py-2 text-sm font-semibold text-brand',
            'transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand',
          )}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} data-testid="contact-form">
      <div className="mb-4">
        <label htmlFor={`${mode}-name`} className="mb-1 block text-sm font-medium text-label">
          Your Name
        </label>
        <input
          id={`${mode}-name`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className={cn(
            'w-full border-b border-border bg-transparent px-0 py-2 text-sm text-ink',
            'placeholder:text-placeholder focus:border-white focus:outline-none',
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor={`${mode}-email`} className="mb-1 block text-sm font-medium text-label">
          Your Email
        </label>
        <input
          id={`${mode}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className={cn(
            'w-full border-b border-border bg-transparent px-0 py-2 text-sm text-ink',
            'placeholder:text-placeholder focus:border-white focus:outline-none',
          )}
        />
      </div>

      {mode === 'quote' && (
        <>
          <div className="mb-4">
            <label
              htmlFor={`${mode}-service`}
              className="mb-1 block text-sm font-medium text-label"
            >
              Needed Services
            </label>
            <select
              id={`${mode}-service`}
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className={cn(
                'w-full border-b border-border bg-transparent px-0 py-2 text-sm text-ink',
                'focus:border-white focus:outline-none',
              )}
            >
              <option value="" disabled>
                Needed Services
              </option>
              {services.map((s) => (
                <option key={s} value={s} className="text-gray-900">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor={`${mode}-budget`} className="mb-1 block text-sm font-medium text-label">
              Budget
            </label>
            <select
              id={`${mode}-budget`}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              className={cn(
                'w-full border-b border-border bg-transparent px-0 py-2 text-sm text-ink',
                'focus:border-white focus:outline-none',
              )}
            >
              <option value="" disabled>
                Budget
              </option>
              {budgets.map((b) => (
                <option key={b} value={b} className="text-gray-900">
                  {b}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <div className="mb-6">
        <label htmlFor={`${mode}-message`} className="mb-1 block text-sm font-medium text-label">
          Your Message
        </label>
        <textarea
          id={`${mode}-message`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
          rows={4}
          className={cn(
            'w-full resize-none border-b border-border bg-transparent px-0 py-2 text-sm text-ink',
            'placeholder:text-placeholder focus:border-white focus:outline-none',
          )}
        />
      </div>

      <button
        type="submit"
        className={cn(
          'rounded bg-white px-8 py-2.5 text-sm font-bold uppercase text-brand',
          'transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand',
        )}
      >
        Submit
      </button>
    </form>
  )
}
