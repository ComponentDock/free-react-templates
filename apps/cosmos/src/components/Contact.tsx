import { useState, useCallback, type FormEvent } from 'react'
import { Send } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (!name.trim() || !email.trim() || !message.trim()) return
      setSubmitted(true)
    },
    [name, email, message],
  )

  if (submitted) {
    return (
      <section id="contact-section" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-mulish mb-4 text-3xl font-bold text-ink">Thank you!</h2>
          <p className="font-roboto-mono text-muted">
            Your message has been sent. I&apos;ll get back to you soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-section" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-mulish mb-2 text-4xl font-bold text-ink">Contact</h2>
          <p className="font-roboto-mono text-muted">Get in touch. Let&apos;s work together.</p>
          <svg
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            className="mx-auto mt-4 h-3 w-24 text-primary"
          >
            <path
              d="M0,6 Q12,0 25,6 T50,6 T75,6 T100,6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-6"
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="font-roboto-mono mb-1 block text-sm text-ink"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-line px-4 py-3 font-roboto-mono text-sm focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="font-roboto-mono mb-1 block text-sm text-ink"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-line px-4 py-3 font-roboto-mono text-sm focus:border-primary focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="contact-subject"
              className="font-roboto-mono mb-1 block text-sm text-ink"
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-line px-4 py-3 font-roboto-mono text-sm focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="font-roboto-mono mb-1 block text-sm text-ink"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-line px-4 py-3 font-roboto-mono text-sm focus:border-primary focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-ink px-8 py-3 text-sm font-medium text-white transition-all hover:bg-transparent hover:text-ink"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
