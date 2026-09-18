import { type FormEvent, useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
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
        <h1 className="mb-2 font-display text-2xl font-bold text-ink">Thank You!</h1>
        <p className="text-body">Your message has been sent. We&apos;ll get back to you shortly.</p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false)
            setName('')
            setEmail('')
            setMessage('')
          }}
          className="mt-6 text-sm font-medium text-brand-pink underline underline-offset-2 hover:text-brand-coral"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-card px-8 py-10 shadow-xl" noValidate>
      {/* Heading */}
      <h1 className="mb-8 text-center font-display text-3xl font-bold text-ink">Contact Us</h1>

      {/* Name field */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-body"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-b border-border bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brand-pink"
        />
      </div>

      {/* Email field */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-body"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b border-border bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brand-pink"
        />
      </div>

      {/* Message textarea */}
      <div className="mb-8">
        <label
          htmlFor="message"
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-body"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none border-b border-border bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-brand-pink"
        />
      </div>

      {/* Submit button */}
      <div className="text-center">
        <button
          type="submit"
          className="rounded bg-gradient-to-r from-brand-pink to-brand-coral px-8 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
        >
          Send Your Message
        </button>
      </div>
    </form>
  )
}
