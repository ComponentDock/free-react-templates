import { type FormEvent, useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    onSubmit?.({ name, email, message })
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
            setMessage('')
          }}
          className="mt-6 rounded bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} data-testid="contact-form">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className={cn(
              'w-full border border-border bg-transparent px-4 py-3 text-sm text-ink',
              'placeholder:text-placeholder focus:border-brand focus:outline-none',
            )}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className={cn(
              'w-full border border-border bg-transparent px-4 py-3 text-sm text-ink',
              'placeholder:text-placeholder focus:border-brand focus:outline-none',
            )}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-label">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write Us A Message"
          required
          rows={6}
          className={cn(
            'w-full resize-none border border-border bg-transparent px-4 py-3 text-sm text-ink',
            'placeholder:text-placeholder focus:border-brand focus:outline-none',
          )}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className={cn(
            'rounded bg-brand px-8 py-2.5 text-sm font-semibold text-white',
            'transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
          )}
        >
          Send
        </button>
      </div>
    </form>
  )
}
