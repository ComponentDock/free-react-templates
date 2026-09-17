import { useState } from 'react'

export interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ name, email, message })
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  if (submitted) {
    return (
      <div className="py-8 text-center" role="status">
        <p className="text-lg font-semibold text-brand">Thank you!</p>
        <p className="mt-2 text-label">Your message has been sent.</p>
        <button
          type="button"
          className="mt-4 text-sm text-brand underline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-label">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border-b-2 border-input-border bg-transparent py-2 text-heading outline-none transition-colors placeholder:text-gray-400 focus:border-brand"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border-b-2 border-input-border bg-transparent py-2 text-heading outline-none transition-colors placeholder:text-gray-400 focus:border-brand"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-label">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full resize-none border-b-2 border-input-border bg-transparent py-2 text-heading outline-none transition-colors placeholder:text-gray-400 focus:border-brand"
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-[30px] bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
        >
          Submit
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  )
}
