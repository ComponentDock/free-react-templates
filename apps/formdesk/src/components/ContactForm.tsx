import { type FormEvent, useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; service: string }) => void
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    onSubmit?.({ name, email, service })
  }

  if (submitted) {
    return (
      <div className="text-center" data-testid="success-state">
        <h2 className="mb-4 text-2xl font-semibold text-ink">Thank You!</h2>
        <p className="text-gray-600">
          Your message has been sent. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setName('')
            setEmail('')
            setService('')
          }}
          className="mt-6 rounded bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-label"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          required
          className={cn(
            'w-full border border-border bg-transparent px-4 py-3 text-sm text-ink',
            'placeholder:text-placeholder focus:border-brand focus:outline-none',
          )}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-label"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
          className={cn(
            'w-full border border-border bg-transparent px-4 py-3 text-sm text-ink',
            'placeholder:text-placeholder focus:border-brand focus:outline-none',
          )}
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-label"
        >
          What Do You Need?
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          className={cn(
            'w-full border border-border bg-transparent px-4 py-3 text-sm text-ink',
            'focus:border-brand focus:outline-none',
            !service && 'text-placeholder',
          )}
        >
          <option value="" disabled>
            Please choose
          </option>
          <option value="uiux">UI/UX Design</option>
          <option value="ecommerce">eCommerce Business</option>
          <option value="online">Online Services</option>
        </select>
      </div>

      <button
        type="submit"
        className={cn(
          'w-full rounded bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white',
          'transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
        )}
      >
        Send
      </button>
    </form>
  )
}
