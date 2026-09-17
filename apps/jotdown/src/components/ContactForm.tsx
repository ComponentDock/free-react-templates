import { type FormEvent, useState } from 'react'

export function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-card px-8 py-12 text-center shadow-xl">
        <h1 className="mb-2 text-2xl font-bold text-ink">Thank You!</h1>
        <p className="text-body">Your message has been sent. We&apos;ll get back to you shortly.</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setEmail('')
            setMessage('')
          }}
          className="mt-6 text-sm font-medium text-brand underline underline-offset-2 hover:text-brand-dark"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-card px-8 py-10 shadow-xl" noValidate>
      {/* Heading */}
      <h1 className="mb-6 text-2xl font-bold text-ink">Send Us A Message</h1>

      {/* Email field */}
      <div className="mb-4">
        <label htmlFor="email" className="sr-only">
          Your Email Address
        </label>
        <div className="flex items-center gap-3 border border-border px-4 py-3">
          <span className="text-body" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>
          <input
            id="email"
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-body"
          />
        </div>
      </div>

      {/* Message textarea */}
      <div className="mb-6">
        <label htmlFor="message" className="sr-only">
          How Can We Help?
        </label>
        <textarea
          id="message"
          placeholder="How Can We Help?"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none border border-border bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-body"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="rounded bg-brand px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
      >
        Send Message
      </button>
    </form>
  )
}
