import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-light text-navy md:text-4xl">Get Free Quote</h2>
            <p className="mt-4 text-mist">
              Tell us about your project and we will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-lg border border-brand/30 bg-brand/10 p-6 text-center">
                <p className="text-sm font-medium text-brand">
                  Thank you! We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-navy">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-sm text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-navy">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-sm text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-5 py-3 text-sm text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-full bg-gradient-to-b from-[#0181f5] to-brand px-8 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  Send
                </Button>
              </form>
            )}
          </div>

          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/stratagem-contact/500/400"
              alt="Contact illustration"
              className="w-full max-w-md rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
