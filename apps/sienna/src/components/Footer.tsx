import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const quickLinks = ['About', 'Services', 'Pricing', 'Team', 'Blog'] as const

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
    <footer id="contact" className="bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
                <Scissors className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-[0.2em]">
                Sienna<span className="text-brand">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              There are many variations of passages of barber lore available, but the majority have
              suffered alteration in some form — our craft is the exception.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
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
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  659, Rocky beach bullevard, santa monica, USA
                  <br />
                  Los Angeles, United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                +44 6532 986 652
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                contact@siennabarber.com
              </li>
            </ul>
            <h3 className="mt-8 font-display text-lg font-bold uppercase tracking-wide text-brand">
              Newsletter
            </h3>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your Email Address
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@example.com"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                  >
                    Subscribe
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} All rights reserved | Sienna
      </div>
    </footer>
  )
}
