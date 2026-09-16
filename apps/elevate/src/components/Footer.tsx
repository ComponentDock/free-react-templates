import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const quickLinks = ['Home', 'About', 'Services', 'Pricing', 'Blog'] as const

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
] as const

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
    <footer className="bg-ink text-white transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#home" className="text-xl font-bold">
              Elevate<span className="text-brand">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Empowering professionals to reach their full potential through expert coaching and
              personalized guidance.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-colors hover:border-brand hover:text-brand"
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                hello@elevate.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                123 Coaching Lane, Suite 100
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">Stay updated with our latest tips.</p>
            {subscribed ? (
              <p className="mt-3 rounded-lg border border-brand/40 bg-brand/10 px-4 py-2 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-3">
                <label htmlFor="footer-email" className="sr-only">
                  Your Email Address
                </label>
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                  >
                    Subscribe
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-1 text-sm text-red-400">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Elevate. More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-brand transition-colors hover:text-brand-dark"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
