import { useState, type FormEvent } from 'react'
import { BrandIcon, type BrandName } from './BrandIcon'

const links: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const services: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Architectural Design', href: '#services' },
  { label: 'Interior Design', href: '#services' },
  { label: 'Exterior Design', href: '#services' },
  { label: 'Lighting Design', href: '#services' },
  { label: 'AutoCAD Service', href: '#services' },
]

const socials: ReadonlyArray<{ name: BrandName; label: string }> = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'x', label: 'X' },
  { name: 'instagram', label: 'Instagram' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[4fr_2fr_2fr_3fr]">
        <div>
          <a href="#home" className="font-display text-2xl font-bold uppercase tracking-tight">
            Tessera<span className="text-brand">.</span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#home"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Links">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Links</h3>
          <ul className="mt-5 space-y-2.5">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Services</h3>
          <ul className="mt-5 space-y-2.5">
            {services.map((service) => (
              <li key={service.label}>
                <a
                  href={service.href}
                  className="text-sm text-white/60 transition-colors hover:text-brand"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/70">Newsletter</h3>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Far far away, behind the word mountains, far from the countries.
          </p>
          <form onSubmit={handleSubmit} className="mt-5" noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex gap-2">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setStatus('idle')
                }}
                placeholder="Email address"
                className="h-11 w-full rounded-md border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-md bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </div>
            <p aria-live="polite" className="mt-3 text-sm">
              {status === 'error' && (
                <span className="text-red-400">Please enter a valid email address.</span>
              )}
              {status === 'success' && (
                <span className="text-green-400">Thanks! You&rsquo;ve been subscribed.</span>
              )}
            </p>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs text-white/50 sm:flex-row sm:px-6 sm:text-left">
          <p>© 2026 Tessera. All rights reserved.</p>
          <p>recreation of ColorLib Mosaic</p>
        </div>
      </div>
    </footer>
  )
}
