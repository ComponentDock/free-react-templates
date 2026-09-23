import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const services = ['Interior', 'Architecture', '3D Modeling'] as const
const company = ['About', 'Blog', 'Contact', 'Appointment'] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-primary text-white">
      {/* Query CTA */}
      <div className="border-b border-footer-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <div>
            <p className="text-lg font-semibold">Have any project or query? Just say hello</p>
            <a href="mailto:info@plano.com" className="text-sm text-white/70 hover:text-white">
              Mail Us
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+10673563629"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +10 673 563 629
            </a>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Address */}
          <div>
            <h3 className="text-lg font-bold">Address</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>123 Design Avenue, Suite 400, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                +10 673 563 629
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                info@plano.com
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {services.map((item) => (
                <li key={item}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {company.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-bold">Subscribe</h3>
            {subscribed ? (
              <p className="mt-5 rounded border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-5">
                <label htmlFor="footer-email" className="block text-sm text-white/60">
                  Your Email Address
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@example.com"
                    aria-invalid={Boolean(error)}
                    className="w-full border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-accent px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-white"
                  >
                    Subscribe
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                )}
              </form>
            )}
            <p className="mt-4 text-xs text-white/40">
              Subscribe to our newsletter for the latest design inspiration.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-footer-border py-5 text-center text-sm text-white/50">
        Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-colors hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
