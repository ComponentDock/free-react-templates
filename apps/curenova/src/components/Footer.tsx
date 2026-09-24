import { useState, type FormEvent } from 'react'
import { Phone, MapPin, Mail } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const departments = [
  'Cardiology',
  'Neurology',
  'Pediatrics',
  'Orthopedics',
  'Ophthalmology',
] as const
const usefulLinks = ['Privacy Policy', 'Terms of Service', 'About Us', 'FAQs'] as const
const supportLinks = ['Help Center', 'Contact Support', 'Technical Support', 'Billing'] as const

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const handleAppointment = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !EMAIL_PATTERN.test(email) || !message.trim()) {
      setError('Please fill in all fields with valid information.')
      setSent(false)
      return
    }
    setError(null)
    setSent(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <footer className="bg-ink-900 text-mute-600">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Head Office */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Head Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>123 Health Avenue, Medical City, MC 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>+1 (800) 254-9876</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>info@curenova.com</span>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Departments</h3>
            <ul className="space-y-2 text-sm">
              {departments.map((dept) => (
                <li key={dept}>
                  <a href="#departments" className="transition-colors hover:text-blue-400">
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#links" className="transition-colors hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#support" className="transition-colors hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Appointment Form */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-lg font-bold text-white">Appointment</h3>
            <form onSubmit={handleAppointment} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-sm border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-mute-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-sm border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-mute-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-sm border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-mute-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
              />
              <Button
                type="submit"
                className="h-10 w-full rounded-sm bg-blue-400 px-6 text-sm font-semibold text-white uppercase hover:bg-blue-500"
              >
                Request Appointment
              </Button>
              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}
              {sent && (
                <p className="text-sm text-green-400" role="status">
                  Appointment request sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-3 text-center text-xs text-mute-600">
        Made with <span className="text-red-400">♥</span> by{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-blue-400 transition-colors hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
