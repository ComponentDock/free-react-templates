import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { SocialIcon } from './SocialIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const services = [
  'General Contracting',
  'Project Planning',
  'Interior Design',
  'Renovation',
  'Consulting',
] as const
const navigationLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'] as const

const socials = [
  { name: 'facebook' as const, label: 'Facebook' },
  { name: 'twitter' as const, label: 'Twitter' },
  { name: 'instagram' as const, label: 'Instagram' },
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
    <footer role="contentinfo" className="bg-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About column */}
          <div>
            <a href="#home" className="text-xl font-bold text-white">
              Structa<span className="text-brand">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Your trusted construction partner delivering quality and excellence in every project
              we undertake.
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                +1 601-609 6780
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                info@structa.com
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                78/A, Green Lane, New York
              </p>
            </div>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/50 transition-colors hover:border-brand hover:text-brand"
                >
                  <SocialIcon name={s.name} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-base font-medium text-white">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navigationLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-base font-medium text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-brand">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <h3 className="text-base font-medium text-white">Newsletter</h3>
            <p className="mt-4 text-sm text-white/70">
              Subscribe to our newsletter for the latest updates.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-brand/30 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Email Address
                </label>
                <div className="flex gap-2">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                  >
                    Subscribe
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-2 text-xs text-red-400">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Structa. Made with{' '}
        <a href="https://www.componentdock.com/" className="font-medium text-brand hover:underline">
          Component Dock
        </a>
      </div>
    </footer>
  )
}
