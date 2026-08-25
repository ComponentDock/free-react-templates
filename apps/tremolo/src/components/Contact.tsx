import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.')
      return
    }
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSent(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-slate-400">
          Reservations, inquiries, or just want to say hello — we would love to hear from you.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-sm text-slate-400">
                  123 Culinary Lane, Foodie District, NY 10001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-slate-400">(212) 555-0198</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-slate-400">hello@tremolo.kitchen</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          {sent ? (
            <div
              role="status"
              className="flex items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 p-8 text-center"
            >
              <p className="text-lg font-medium text-amber-400">
                Thanks for reaching out — we will get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
              />
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
              />
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows={4}
                className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none"
              />
              {error && (
                <p role="alert" className="text-sm font-medium text-red-400">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                className="rounded-lg bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold"
              >
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
