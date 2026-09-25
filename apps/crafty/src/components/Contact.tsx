import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['56/8, Panthapath, West Dhanmondi', 'Dhaka - 1205, Bangladesh'],
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['info@craftystudio.com', 'support@craftystudio.com'],
  },
  {
    icon: Phone,
    title: 'Phone Number',
    lines: ['012 4562 982 3612', '012 6321 956 4587'],
  },
] as const

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="lg:w-5/12">
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-400/10 text-primary-400">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h5 className="mb-1 text-base font-semibold text-ink">{item.title}</h5>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-smoke">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink placeholder:text-smoke focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
              />
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink placeholder:text-smoke focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
              />
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-ink placeholder:text-smoke focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
              />
              <button
                type="submit"
                className="ml-auto inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-400 hover:ring-2 hover:ring-primary-400"
              >
                Send Message
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
