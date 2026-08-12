import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { z } from 'zod'
import { BRAND, COMPONENT_DOCK_URL, CONTACT_LINES, FOOTER_ABOUT, IMPORTANT_LINKS } from '../data'
import { FacebookIcon, InstagramIcon, SkypeIcon, TwitterIcon } from './social-icons'

const newsletterSchema = z.object({
  email: z.string().min(1, 'Please enter your email').email('Please enter a valid email'),
})

const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, InstagramIcon, SkypeIcon]

const CONTACT_ICONS = [MapPin, Phone, Mail]

/**
 * Footer — very dark navy (#080a19) four-column footer: About Us,
 * Important Link, Contact us, and a validated Newsletter form, plus a
 * copyright row with social icons and a Component Dock link.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.flatten().fieldErrors.email?.[0])
      return
    }
    setError(undefined)
    setSubscribed(true)
  }

  return (
    <footer className="bg-night py-16 text-white/80">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-3xl font-bold uppercase text-white">
              <span className="text-brand">G</span>ains
            </p>
            <p className="mt-4 text-sm leading-relaxed">{FOOTER_ABOUT}</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold uppercase text-white">Important Link</h4>
            <ul className="mt-5 space-y-2.5">
              {IMPORTANT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold uppercase text-white">Contact us</h4>
            <ul className="mt-5 space-y-4">
              {CONTACT_LINES.map((line, index) => {
                const Icon = CONTACT_ICONS[index]!
                return (
                  <li key={line.label} className="flex items-start gap-3 text-sm">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      {line.label}: {line.value}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold uppercase text-white">Newsletter</h4>
            <p className="mt-5 text-sm leading-relaxed">
              Training tips and member offers — no spam, ever.
            </p>
            {subscribed ? (
              <p role="status" className="mt-5 text-sm font-semibold text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-5">
                <label htmlFor="footer-email" className="sr-only">
                  Newsletter email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-full border border-white/25 bg-white/5 px-5 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                />
                {error && (
                  <p role="alert" className="mt-2 text-xs font-semibold text-brand">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-4 w-full rounded-full border-2 border-brand bg-gradient-to-r from-brand to-brand-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-right"
                  style={{ backgroundSize: '200% auto' }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/60">© 2026 {BRAND}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={COMPONENT_DOCK_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/60 transition-colors hover:text-brand"
            >
              More templates at Component Dock
            </a>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((Icon, index) => (
                <a
                  key={index}
                  href="#home"
                  aria-label="Gains on social media"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
