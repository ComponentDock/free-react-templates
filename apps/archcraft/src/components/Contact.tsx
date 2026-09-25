import { useState, type FormEvent } from 'react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-brand">
          Get In Touch
        </p>
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">Contact Us</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-mist">
          Have a project in mind? Reach out and let us help you bring your vision to life.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl rounded bg-white p-8 shadow-sm">
          {submitted && (
            <p className="mb-4 rounded bg-brand/10 p-3 text-center text-sm text-brand">
              Thank you! Your message has been sent.
            </p>
          )}
          <div className="mb-5">
            <label htmlFor="full-name" className="mb-1 block text-sm font-bold text-ink">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded border border-line px-4 py-3 text-sm text-ink transition-colors focus:border-brand focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-1 block text-sm font-bold text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full rounded border border-line px-4 py-3 text-sm text-ink transition-colors focus:border-brand focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="mb-1 block text-sm font-bold text-ink">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project"
              rows={5}
              required
              className="w-full rounded border border-line px-4 py-3 text-sm text-ink transition-colors focus:border-brand focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded border-2 border-brand bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
