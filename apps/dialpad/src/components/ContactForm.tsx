import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">If you need, Just drop us a line</h2>
          <p className="mt-3 text-sm text-mist">
            We are here to help. Reach out and our team will get back to you shortly.
          </p>
        </div>

        {submitted ? (
          <div className="mx-auto max-w-2xl rounded-lg border border-brand/30 bg-brand/5 px-6 py-8 text-center">
            <p className="text-sm font-medium text-brand">
              Thank you, {name}! Your message has been sent. We will get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-2xl">
            <div className="grid gap-4 md:grid-cols-2">
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />

              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Enter email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />

              <label htmlFor="contact-subject" className="sr-only">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Enter your subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand md:col-span-2"
              />
            </div>

            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              placeholder="Your message"
              rows={6}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-4 w-full resize-none rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />

            <button
              type="submit"
              className="mt-6 rounded-full bg-gradient-to-r from-sky to-brand px-8 py-3 text-xs font-medium uppercase tracking-wider text-white hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
