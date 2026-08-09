import { useState, type FormEvent } from 'react'
import { CalendarDays, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const services = ['Hair Dressing', 'Spa Treatments', 'Manicure & Pedicure'] as const

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSent(true)
    setName('')
    setEmail('')
    setService('')
    setMessage('')
  }

  return (
    <footer id="contact" className="relative bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div>
          <a
            href="#home"
            className="font-sans text-2xl font-bold uppercase tracking-widest text-white"
          >
            Rouge<span className="text-rouge-400">.</span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem — a beauty salon experience
            crafted around you.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-rouge-400" aria-hidden="true" />
              34 Street Name, City Name Here, United States
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-rouge-400" aria-hidden="true" />
              +564 7885 3222
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-rouge-400" aria-hidden="true" />
              webmaster@free-templates.cc
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-lg font-bold uppercase tracking-wide">Our Services</h3>
          <ul className="mt-5 space-y-2 text-sm text-white/70">
            {services.map((serviceName) => (
              <li key={serviceName}>
                <a
                  href="#services"
                  className="transition-colors hover:text-rouge-300"
                  aria-label={serviceName}
                >
                  {serviceName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-lg font-bold uppercase tracking-wide">Contact</h3>
          <ul className="mt-5 space-y-2 text-sm text-white/70">
            <li>Monday – Saturday: 9:00 – 20:00</li>
            <li>Sunday: 10:00 – 16:00</li>
            <li className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 shrink-0 text-rouge-400" aria-hidden="true" />
              Bookings by appointment
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-lg font-bold uppercase tracking-wide">
            Make an appointment
          </h3>
          {sent ? (
            <p
              role="status"
              className="mt-5 rounded-lg bg-rouge-600/20 px-4 py-3 text-sm text-rouge-200"
            >
              Thanks! Your appointment request has been received.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-3">
              <label htmlFor="appt-name" className="sr-only">
                Your Name
              </label>
              <input
                id="appt-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-rouge-400 focus:outline-none"
              />
              <label htmlFor="appt-email" className="sr-only">
                Your E-mail
              </label>
              <input
                id="appt-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your E-mail"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-rouge-400 focus:outline-none"
              />
              <label htmlFor="appt-service" className="sr-only">
                Service you need
              </label>
              <input
                id="appt-service"
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="Service you need"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-rouge-400 focus:outline-none"
              />
              <label htmlFor="appt-message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="appt-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows={3}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-rouge-400 focus:outline-none"
              />
              {error && (
                <p role="alert" className="text-sm font-medium text-rouge-300">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                className="w-full rounded-lg bg-rouge-600 font-semibold uppercase tracking-wide hover:bg-rouge-700"
              >
                Submit
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-sm text-white/60">
            Copyright © {new Date().getFullYear()} All rights reserved | Rouge
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#contact"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-rouge-400 hover:bg-rouge-600 hover:text-white"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
