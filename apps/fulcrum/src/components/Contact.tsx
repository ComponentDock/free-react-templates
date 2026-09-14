import { useState } from 'react'
import type { FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

interface ContactInfo {
  city: string
  address: string
  phone: string
  email: string
}

const offices: ContactInfo[] = [
  {
    city: 'London',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+1 232 3235 324',
    email: 'youremail@domain.com',
  },
  {
    city: 'New York',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+1 232 3235 324',
    email: 'youremail@domain.com',
  },
] as const

export function Contact() {
  const [firstName, setFirstName] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFirstName('')
    setFullName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Contact Form</h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="sr-only">
                  First name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="First name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Full name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject of the message"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here.."
                rows={10}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-2xl border border-gray-300 px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-8">
            {offices.map((office) => (
              <div key={office.city}>
                <h3 className="mb-4 text-xl font-bold text-ink">{office.city}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <strong className="mb-1 block text-sm text-ink">Address</strong>
                      <span className="text-body">{office.address}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <strong className="mb-1 block text-sm text-ink">Phone</strong>
                      <span className="text-body">{office.phone}</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <strong className="mb-1 block text-sm text-ink">Email</strong>
                      <span className="text-body">{office.email}</span>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
